<template>
  <div id="app">
    <md-toolbar class="md-dense md-theme-default">
      <h2 class="md-title" style="flex: 1">欢迎您的使用！</h2>
    </md-toolbar>
    
    <router-link tag="md-button" to="/mahjong" class="md-raised md-primary">麻将组牌</router-link>
    <router-link tag="md-button" to="/videotape" class="md-raised md-primary">录像回放</router-link>
    <router-link tag="md-button" to="/poker" class="md-raised md-primary">斗地主</router-link>
    <router-link tag="md-button" to="/agreement/getConf" class="md-raised md-primary">接口测试</router-link>
    <router-link tag="md-button" to="/zipfont" class="md-raised md-accent">压缩字体</router-link>
    
    <router-view style="margin-top: 30px;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.tile img {
  height: 32px;
}
</style>
