<template lang="html">
  <button :id="tileName">
    <img :src="'static/images/mahjong/' + tileName + '.png'">
    <span v-show="sign && sign !== 0">{{ sign }}</span>
  </button>
</template>

<script>
export default {
  props: ['tileName', 'sign']
}
</script>

<style lang="css" scoped>
button {
  border:none; outline: none; padding: 0;
  display: inline-flex;
  text-align: center; justify-content: center; align-items: flex-start;
  user-select:none;
  width: 55px; height: 84px; margin-right: 3px; margin-bottom: 10px;
  background: url("../assets/mahjong/mj_bg.png") center/100% no-repeat;
  position: relative;
}

img { margin-top: -22px; display: block; width: 43px; }

span {
  position: absolute; color: white; box-sizing: border-box;
  display: flex; justify-content: center; align-items: center;
  right: -5px; top: -5px;
  width: 22px; height: 22px;
  border-radius: 50%; background-color: #ee6412; border: 3px solid #657ae2;
}
.disabled {
  opacity: 0.5;
}

button:active {
  background-color: rgba(0, 0, 0, 0.6);
}

</style>
