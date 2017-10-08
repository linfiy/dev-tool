<template lang="html">
<div class="container">
    <md-layout md-gutter>
      <md-layout>
        <md-input-container class="md-input-focused">
          <label>模板名称：</label>
          <md-input v-model="argument.templateName"></md-input>
        </md-input-container>
        <md-input-container class="md-input-focused">
          <label>url（访问地址）：</label>
          <md-input v-model="argument.url"></md-input>
        </md-input-container>
        <md-input-container class="md-input-focused">
          <label>randkey：</label>
          <md-input disabled v-model="argument.randkey"></md-input>
        </md-input-container>
        <md-input-container class="md-input-focused">
          <label>c_version：</label>
          <md-input v-model="argument.c_version"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>
    <div>parameter：</div>
    <md-layout md-gutter>
      <md-layout>
        <md-input-container class="md-input-focused">
          <label>mod：</label>
          <md-input disabled value="Business"></md-input>
        </md-input-container>
        <div>
        platform：<br>
          <md-radio v-model="argument.platform" id="my-test4" name="platform" md-value="gfplay" class="md-primary">gfplay</md-radio>
          <md-radio v-model="argument.platform" id="my-test5" name="platform" md-value="gfplay_ios" class="md-primary">gfplay_ios</md-radio>
        </div>
      </md-layout>
    </md-layout>
    <md-button class="md-raised md-primary" v-on:click="save()">保存</md-button>
  </div>
</template>
<script>
export default {
  props: [ 'add' ],
  data () {
    return {
      argument: {
        templateName: '',
        url: 'http://test.linfiy.com/mahjong/game_s_http_cangzhou/index.php',
        randkey: '',
        c_version: '',
        platform: 'gfplay'
      }
    }
  },
  methods: {
    save () {
      this.add(this.argument)
    }
  }
}
</script>
