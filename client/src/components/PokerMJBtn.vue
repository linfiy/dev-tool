<template lang="html">
  <button :id="tileName" v-show="sign !== 0">
    <img :src="'static/images/card/card_' + redOrBlack + (Math.floor(tileName / 8)+2)  + '.png'">
    <i v-bind:class="{ 0: 'spade', 1: 'spade', 2: 'heart', 3: 'plum', 4: 'square' }[tileName % 8]"></i>
  </button>
</template>
<script>
export default {
  props: ['tileName', 'sign'],
  computed: {
    redOrBlack () {
      if (this.tileName % 8 === 1) {
        return 'black_'
      } else if (this.tileName % 8 === 2) {
        return 'red_'
      } else if (this.tileName % 8 === 3) {
        return 'black_'
      } else if (this.tileName % 8 === 4) {
        return 'red_'
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="css" scoped>
button {
  border:none; outline: none; padding: 0;
  display: inline-flex;
  text-align: center; justify-content: center; align-items: flex-start;
  user-select:none;
  width: 55px; height: 84px; margin-right: 3px; margin-bottom: 10px;
  position: relative;
  margin-left: -30px;
  cursor: pointer;
}

img { display: block; width: 100%; height: 100%; }

span {
  position: absolute; color: white; box-sizing: border-box;
  display: flex; justify-content: center; align-items: center;
  right: -5px; top: -5px;
  width: 16px; height: 16px;
  border-radius: 50%; background-color: #ee6412;
}
i {
  position: absolute; width: 16px; height: 16px; top: 34px;
}
i.spade {
  background: url(../assets/card/card_color_1.png) no-repeat 0 0;
  background-size: 100% 100%;
}
i.heart {
  background: url(../assets/card/card_color_2.png) no-repeat 0 0;
  background-size: 100% 100%;
}
i.plum {
  background: url(../assets/card/card_color_3.png) no-repeat 0 0;
  background-size: 100% 100%;
}
i.square {
  background: url(../assets/card/card_color_4.png) no-repeat 0 0;
  background-size: 100% 100%;
}

.disabled {
  opacity: 0.5;
}

button:active {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
