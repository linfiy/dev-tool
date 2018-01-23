<template lang="html">
<div class="combine-container">
  <div class="col">
    <div class="btn-area">
      <div>
        <mj-btn 
          v-for="(card, index) in cards"
          :key="index"
          :tile-name="card" 
          :sign="remainingNum(card)" 
          @click.native="push(card)" ></mj-btn>
      </div>
      <hr style="margin-bottom: 30px;">
      <h3 v-show="needCard.length">{{ needCard }}&nbsp;&nbsp;
        <b style="color: #f00d2d;">{{ needCard.length }}张</b> 
        <button v-on:click="completion">补全</button>&nbsp;&nbsp;
        <button v-on:click="playCards=[[], [], [], []]" style="background: #0dc3f0; color: #fff;">清空</button></h3>
      <div id="display-area">
        <p v-bind:class="{ 'active': player == 0 }">
          <a v-on:click="player = 0">底牌</a>&nbsp;&nbsp;<b>{{ playCards[0].length }}张</b>
        </p>
        <span class="tile-mini" v-for="(cardNum, key) in playCards[0]" v-on:click="delect(key, 0)">
          <img :src="'static/images/card/' + reset(cardNum) + '.png'" alt="">
          <i v-bind:class="{ 0: 'spade', 1: 'spade', 2: 'heart', 3: 'plum', 4: 'square' }[reset2(cardNum)]"></i>
        </span>
      </div>
      <div id="display-area">
        <p v-bind:class="{ 'active': player == 1 }">
          <a v-on:click="player = 1">玩家一</a>&nbsp;&nbsp;<b>{{ playCards[1].length }}张</b>
        </p>
        <span class="tile-mini" v-for="(cardNum, key) in playCards[1]" v-on:click="delect(key, 1)">
          <img :src="'static/images/card/' + reset(cardNum) + '.png'" alt="">
          <i v-bind:class="{ 0: 'spade', 1: 'spade', 2: 'heart', 3: 'plum', 4: 'square' }[reset2(cardNum)]"></i>
        </span>
      </div>
      <div id="display-area">
        <p v-bind:class="{ 'active': player == 2 }">
          <a v-on:click="player = 2">玩家二</a>&nbsp;&nbsp;<b>{{ playCards[2].length }}张</b>
        </p>
        <span class="tile-mini" v-for="(cardNum, key) in playCards[2]" v-on:click="delect(key, 2)">
          <img :src="'static/images/card/' + reset(cardNum) + '.png'" alt="">
          <i v-bind:class="{ 0: 'spade', 1: 'spade', 2: 'heart', 3: 'plum', 4: 'square' }[reset2(cardNum)]"></i>
        </span>
      </div>
      <div id="display-area">
        <p v-bind:class="{ 'active': player == 3 }">
          <a v-on:click="player = 3">玩家三</a>&nbsp;&nbsp;<b>{{ playCards[3].length }}张</b>
        </p>
        <span class="tile-mini" v-for="(cardNum, key) in playCards[3]" v-on:click="delect(key, 3)">
          <img :src="'static/images/card/' + reset(cardNum) + '.png'" alt="">
          <i v-bind:class="{ 0: 'spade', 1: 'spade', 2: 'heart', 3: 'plum', 4: 'square' }[reset2(cardNum)]"></i>
        </span>
      </div>
    </div>
    <wash-cards :cards="needCard"></wash-cards> 
  </div>
</div>
</template>

<script>
import MJBtn from './PokerMJBtn'
import WashCards from './WashCards'

export default {
  components: { 'mj-btn': MJBtn, 'wash-cards': WashCards },
  data () {
    return {
      cards: [ 125, 117, 108, 107, 106, 105, 100, 99, 98, 97, 92, 91, 90, 89, 84, 83, 82, 81, 76, 75, 74, 73, 68, 67, 66, 65, 60, 59, 58, 57, 52, 51, 50, 49, 44, 43, 42, 41, 36, 35, 34, 33, 28, 27, 26, 25, 20, 19, 18, 17, 12, 11, 10, 9 ],
      player: 0,
      playCards: [[], [], [], []]
    }
  },
  computed: {
    needCard () {
      return this.playCards[1].concat(this.playCards[2]).concat(this.playCards[3]).concat(this.playCards[0])
    }
  },
  methods: {
    //  补全辅助
    findCard (card) {
      let pArr = [].concat(this.playCards[0]).concat(this.playCards[1]).concat(this.playCards[2]).concat(this.playCards[3])
      for (let i = 0; i < pArr.length; i++) {
        if (pArr[i] === card) {
          return true
        }
      }
      return false
    },
    //  补全
    completion () {
      // 剩余牌 arr
      let arr = []
      for (let i = 0; i < this.cards.length; i++) {
        if (!this.findCard(this.cards[i])) {
          arr.push(this.cards[i])
        }
      }
      arr.sort(function () { return 0.5 - Math.random() })
      for (let i = 0; i < this.playCards.length; i++) {
        let l = this.playCards[i].length
        if (i === 0) {
          for (let j = l; j < 3; j++) {
            this.playCards[i].push(arr[0])
            arr.shift()
          }
        }
        if (i > 0) {
          for (let j = l; j < 17; j++) {
            this.playCards[i].push(arr[0])
            arr.shift()
          }
        }
      }
    },
    //  每张牌的剩余张数
    remainingNum (card) {
      let arr = [].concat(this.playCards[0]).concat(this.playCards[1]).concat(this.playCards[2]).concat(this.playCards[3])
      if (!arr.length) {
        return 1
      }
      var startNum = 0
      for (var j = 0; j < arr.length; j++) {
        if (card === arr[j]) startNum++
      }
      return 1 - startNum
    },
    // 返回牌的贴图
    reset (cardNum) {
      if (parseInt(cardNum) >= 116) {
        return 'card_' + (Math.floor(cardNum / 8) + 2)
      } else if ((cardNum % 8) % 2 === 0) {
        return 'card_red_' + (Math.floor(cardNum / 8) + 2)
      } else {
        return 'card_black_' + (Math.floor(cardNum / 8) + 2)
      }
    },
    reset2 (cardNum) {
      return cardNum % 8
    },
    delect (index, player) {
      this.playCards[player].splice(index, 1)
    },
    push (card) {
      if (this.remainingNum(card) === 0) return
      //  区分是不是王
      if (this.player === 0 && this.playCards[0].length === 3) {
        alert('底牌只能为3张')
        return
      } else if (this.player !== 0 && this.playCards[this.player].length === 17) {
        alert('玩家牌最多只有17张')
        return
      }
      this.playCards[this.player].push(card)
      // this.card.sort(function (a, b) { return b - a })
    }
  }
}
</script>
<style lang="css" scoped>
.combine-container { display: flex; }
.col { flex: 1 }
.btn-area {
  text-align: center;
  padding-left: 80px;
}
.checkbox-class {
  text-align: left;
  margin-left: 40px;
  margin-bottom: 20px;
}
p {
  margin-left: -30px;
  font-weight: bold;
}
p a {
  cursor: pointer;
}
p.active a{
  color: #0dc3f0;
}
p.active b {
  color: #f00d2d;
}
button {
  display: inline-block; color: #fff; outline: none;
  border: none; background: #f0930d; padding: none;
  cursor: pointer;
}
.tile-mini {
  display: inline-block; text-align: center; position: relative;
  width: 55px; height: 84px; margin-right: 3px; margin-bottom: 10px;
  padding-left: 1px; margin-left: -30px;
}
.tile-mini img {
  width: 55px; height: auto;
}
.tile-mini i {
  position: absolute; width: 16px; height: 16px; left: 20px; top: 34px;
}
.tile-mini i.spade {
  background: url(../assets/card/card_color_1.png) no-repeat 0 0;
  background-size: 100% 100%;
}
.tile-mini i.heart {
  background: url(../assets/card/card_color_2.png) no-repeat 0 0;
  background-size: 100% 100%;
}
.tile-mini i.plum {
  background: url(../assets/card/card_color_3.png) no-repeat 0 0;
  background-size: 100% 100%;
}
.tile-mini i.square {
  background: url(../assets/card/card_color_4.png) no-repeat 0 0;
  background-size: 100% 100%;
}
</style>

