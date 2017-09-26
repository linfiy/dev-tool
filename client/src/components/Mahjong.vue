<template lang="html">
<div class="mahjong-container">
  <div class="col">

    <div id="display-area">
      <span class="tile-mini" v-for="(name, key) in store">
        <img :src="'static/images/mahjong/' + name + '.png'" alt=""
             v-on:click="delect(key)">
      </span>
    </div>
    <div>
      <p>
        <button v-on:click="completionButton(true)" v-show="store.length">有序补全</button>&nbsp;&nbsp;
        <button v-on:click="completionButton(false)" v-show="store.length">无序补全</button>&nbsp;&nbsp;
        <button v-on:click="reset" v-show="store.length">重置</button>
      </p>
      <p><span style="color: #1891b9;">已选&nbsp;<span style="color: #e14e4e;">{{ store.length }}</span>&nbsp;张</span></p>
    </div>
    <textarea style="width: 400px; height: 140px;" id="copyValue" v-model="storeToStr"></textarea>
    <p>
      <button v-on:click="copy" v-show="store.length">点击复制</button>
    </p>
  </div>
  <div class="col">
    <div class="select-area checkbox-class">
      万牌：<label><input disabled type="checkbox" v-model="hasWan"></label><br>
      条牌：<label><input disabled type="checkbox" v-model="hasTiao"></label><br>
      筒牌：<label><input disabled type="checkbox" v-model="hasTong"></label><br>
      花牌：<label><input disabled type="checkbox" v-model="hasFlower"></label><br><label>
      风牌：<input type="checkbox" v-model="hasWind"></label><br>
      箭牌：<label><input type="radio" value="1" v-model="hasArrowType"> 全部</label>
           <label><input type="radio" value="2" v-model="hasArrowType"> 红中癞子</label>
           <label><input type="radio" value="3" v-model="hasArrowType"> 白板癞子</label>
           <label><input type="radio" value="0" v-model="hasArrowType"> 无</label>
      <br>
      总数 {{ total }}
    </div>
    <div class="btn-area">
      <div v-show="hasWan">
        <mj-btn v-for="i in 9" :tile-name="i" :sign="remainingNum(i)" @click.native="push(i)"></mj-btn>
      </div>
      <div v-show="hasTiao">
        <mj-btn v-for="i in 9" :tile-name="i + 16" :sign="remainingNum(i+16)" @click.native="push(i + 16)"></mj-btn>
      </div>
      <div v-show="hasTong">
        <mj-btn v-for="i in 9" :tile-name="i + 32" :sign="remainingNum(i+32)" @click.native="push(i + 32)"></mj-btn>
      </div>
      <mj-btn v-show="hasWind" v-for="i in 4" :tile-name="i + 48" :sign="remainingNum(i+48)" @click.native="push(i + 48)"></mj-btn>
      <mj-btn v-show="hasArrowType == 1 || hasArrowType == 2" :tile-name="53" :sign="remainingNum(53)" @click.native="push(53)"></mj-btn>
      <mj-btn v-show="hasArrowType == 1" :tile-name="54" :sign="remainingNum(54)" @click.native="push(54)"></mj-btn>
      <mj-btn v-show="hasArrowType == 1 || hasArrowType == 3" :tile-name="55" :sign="remainingNum(55)" @click.native="push(55)"></mj-btn>
    </div>
  </div>
</div>
</template>

<script>
import MJBtn from './MahjongMJBtn'
export default {
  components: { 'mj-btn': MJBtn },
  data () {
    return {
      manualArr: [],
      store: [],
      hasWan: true,
      hasTong: true,
      hasTiao: true,
      hasWind: true,
      hasArrowType: 1, // 0:无, 1:全部 2: 红中癞子
      hasFlower: false,
      storeToStr: ''
    }
  },
  computed: {
    total () {
      var num = 0
      if (this.hasWan) num += 36
      if (this.hasTong) num += 36
      if (this.hasTiao) num += 36
      if (this.hasWind) num += 16
      if (parseInt(this.hasArrowType) === 1) num += 12
      if (parseInt(this.hasArrowType) === 2) num += 4
      return num
    }
  },
  watch: {
    'storeToStr': function () {
      this.store = JSON.parse(this.storeToStr)
    },
    'store': function () {
      this.storeToStr = JSON.stringify(this.store)
    }
  },
  methods: {
    copy () {
      var Url2 = document.getElementById('copyValue')
      Url2.select()
      document.execCommand('Copy')
    },
    // 补全
    completion (start, end) {
      for (let i = start; i <= end; i++) {
        if (this.remainingNum(i) === 0) continue
        let num = this.remainingNum(i)
        for (let j = 1; j <= num; j++) {
          this.push(i)
        }
      }
    },
    completionButton (boolValue) {
      if (this.manualArr.length) this.store = this.manualArr
      let num = this.manualArr.length ? this.manualArr.length : this.store.length  // 无序补全时用

      this.completion(1, 9) // 补全万
      this.completion(17, 25) // 补全条
      this.completion(33, 41) // 补全筒
      if (this.hasWind) this.completion(49, 52) // 补全风牌
      if (parseInt(this.hasArrowType) === 1 || parseInt(this.hasArrowType) === 2) this.completion(53, 53) // 补全箭牌 红中
      if (parseInt(this.hasArrowType) === 1) this.completion(54, 54) // 补全发财
      if (parseInt(this.hasArrowType) === 1 || parseInt(this.hasArrowType) === 3) this.completion(55, 55) // 补全箭牌 白板

      this.manualArr = this.store.slice(0, num)
      if (!boolValue) {
        let randomSort = function () {
          return Math.random() > 0.5 ? -1 : 1
        }
        let supplementArr = this.store.slice(num, this.store.length).sort(randomSort)

        this.store = this.manualArr.concat(supplementArr)
      }
    },
    // 重置
    reset () {
      this.manualArr = []
      this.store = []
    },
    // 删除某一项
    delect (index) {
      this.store.splice(index, 1)
    },
    // 每个麻将的剩余个数
    remainingNum (i) {
      if (!this.store.length) return 4
      var startNum = 0
      for (var j = 0; j < this.store.length; j++) {
        if (this.store[j] === i) startNum++
      }
      return 4 - startNum
    },
    push (tileName) {
      // 每张麻将4张牌  用完了就不准添加了
      if (this.remainingNum === 0) return

      var hasStoreCount = 0
      console.log(this.store)
      this.store.forEach((name) => name === tileName && hasStoreCount++)

      if (hasStoreCount < 4) this.store.push(tileName)
    }
  }
}
</script>

<style lang="css" scoped>
.mahjong-container { display: flex; text-align: center; }
.col { flex: 1 }
.checkbox-class {
  text-align: left;
  margin-left: 40px;
  margin-bottom: 20px;
}
.tile-mini {
  display: inline-block; text-align: center;
  width: 32px; height: 50px; margin-right: 3px; margin-bottom: 10px;
  padding-left: 1px;
  background: url("../assets/mahjong/mj_bg.png") center/100% no-repeat;
}
.tile-mini img {
  width: 28px; height: auto;
}
</style>
