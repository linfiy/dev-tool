<template>
  <div id="app">
    <md-toolbar class="md-dense md-theme-default">
      <h2 class="md-title" style="flex: 1">欢迎您的使用！</h2>
      <router-link tag="md-button" to="/mahjong" class="md-raised md-primary">麻将组牌</router-link>
      <router-link tag="md-button" to="/videotape" class="md-raised md-primary">录像回放</router-link>
      <router-link tag="md-button" to="/poker" class="md-raised md-primary">斗地主</router-link>
      <router-link tag="md-button" to="/rest" class="md-raised md-primary">Asker</router-link>
      <router-link tag="md-button" to="/formatJSON" class="md-raised md-primary">JSON</router-link>
      <router-link tag="md-button" to="/zipfont/0" class="md-raised md-accent">压缩字体</router-link>
    </md-toolbar>
    <router-view></router-view>
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

li {
  list-style: none;
}
</style>
