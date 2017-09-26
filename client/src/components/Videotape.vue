<template lang="html">
<div class="game-info-container">
  <textarea type="text" id="input" v-model="message"></textarea>
  <div>
    <p>配牌：{{ generate() }}</p>  
  </div>
  <ul>
    <li v-for="action in actions" :key="action.id" style="border-bottom: 1px solid red; padding-bottom: 20px;margin-bottom: 20px;">
      <span class="left">
        <span>{{ action.array }}</span>
        <div>
          <input type="text" v-model="action.arrToStr">
        </div>
      </span>
      <span class="right" v-html="action.description"></span>
    </li>
  </ul>
</div>
</template>

<script>
import actionDesc from '../utils/actionFuc.js'
import { getTile } from '../utils/actionSumFun.js'
export default {
  data () {
    return {
      actions: {},
      message: '',
      cardArr: []
    }
  },
  watch: {
    'message': function () {
      var tempAction = []
      tempAction = this.message.split(',').map(function (actString, i) {
        var action = {
          id: '',
          description: '',
          array: [],
          arrToStr: ''
        }

        action.id = i
        action.array = actString.split('|').map(function (sign) {
          return parseInt(sign)
        })
        action.arrToStr = action.array.join(',')

        action.description = actionDesc[action.array[0]](action.array)

        return action
      })
      this.actions = tempAction
      console.log('监听message')
    },
    'actions': {
      handler: function () {
        var newMessage = ''
        for (var i = 0; i < this.actions.length - 1; i++) {
          newMessage += this.actions[i].arrToStr.split(',').join('|') + '&'
        }
        newMessage += this.actions[this.actions.length - 1].arrToStr.split(',').join('|')
        newMessage = newMessage.split('&').join(',')
        this.message = newMessage
        console.log('监听actions')
      },
      // 为了发现对象内部值的变化，可以在选项参数中指定 deep: true
      deep: true
    }
  },
  computed: {
    actionDescriptions () {
      return this.actions
    }
  },
  methods: {
    generate () {
      let arr1 = []
      let arr2 = []
      let arr3 = []
      let arr4 = []
      let arr5 = []
      for (let i = 0; i < this.actions.length - 1; i++) {
        if (this.actions[i].array[0] === 16) {
          arr1 = arr1.concat(getTile(this.actions[i].array[1]))
          arr2 = arr2.concat(getTile(this.actions[i].array[2]))
          arr3 = arr3.concat(getTile(this.actions[i].array[3]))
          arr4 = arr4.concat(getTile(this.actions[i].array[4]))
        }
        if (this.actions[i].array[0] === 9) {
          arr5 = arr5.concat(getTile(this.actions[i].array[2]))
        }
      }
      return arr1.concat(arr2).concat(arr3).concat(arr4).concat(5)
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.message = '10|1|0|1|56,14|2|3|0|0,16|7051939|38050205|0|0,25|1|1|0|0,16|4413801|7245501|0|0,16|52515338|35080808|0|0,16|37|7|0|0,9|1|18|1|0,15|1|17|1|0,8|1|51|1|0,9|2|34|2|0,8|2|55|2|0,9|1|2|1|0,8|1|52|1|0,9|2|19|2|0,8|2|19|2|0,9|1|41|1|0,8|1|53|1|0,9|2|36|2|0,8|2|38|2|0,2|1|38|2|0,8|1|19|1|0,9|2|20|2|0,8|2|20|2|0,9|1|19|1|0,8|1|19|1|0,9|2|23|2|0,8|2|1|2|0,9|1|41|1|0,8|1|39|1|0,9|2|54|2|0,8|2|54|2|0,9|1|6|1|0,8|1|4|1|0,9|2|53|2|0,8|2|53|2|0,9|1|35|1|0,8|1|35|1|0,9|2|49|2|0,8|2|49|2|0,9|1|33|1|0,8|1|33|1|0,9|2|18|2|0,8|2|2|2|0,9|1|21|1|0,8|1|21|1|0,9|2|2|2|0,8|2|18|2|0,9|1|49|1|0,8|1|49|1|0,9|2|37|2|0,8|2|2|2|0,9|1|22|1|0,8|1|22|1|0,9|2|37|2|0,8|2|24|2|0,9|1|51|1|0,8|1|51|1|0,9|2|50|2|0,8|2|50|2|0,9|1|23|1|0,8|1|23|1|0,9|2|8|2|0,8|2|23|2|0,9|1|49|1|0,8|1|49|1|0,9|2|38|2|0,8|2|37|2|0,6|1|37|2|0'
    })
  }
}
</script>

<style lang="css">
.game-info-container {
  text-align: center;
}
textarea { width: 1000px; height: 150px; }
ul { list-style: none; padding: 0; }
li { display: flex; }
li span.left { flex: 1 }
li span.right { flex: 2 }
img { height: 32px; }

.tile {
  display: inline-flex;
  padding-top: 2px; padding-left: 2px; text-align: center; width: 26px; height: 47px; position: relative; background: url("../assets/mahjong/mj_bg.png") center / 100% no-repeat;
}
</style>
