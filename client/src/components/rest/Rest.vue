<template>
<div class="md-layout rest-container">
  <dictionary></dictionary>
  <div style="flex: 1; display: flex">
    <div style="max-width: 50%; flex: 1">
      <common-variable></common-variable>
      <tabs></tabs>
      <md-button @click="test">Raw</md-button>
      <md-button @click="test">Quest</md-button>
    </div>
    <div style="max-width: 50%; flex: 1">
      <response></response>
    </div>
  </div>
</div> 
</template>
<script>
import Parameter from './Parameter'
import Dictionary from './Dirctionary'
import CommonVariable from './CommonVariable'
import Response from './Response'
import Tabs from './Tabs'
import store from '../../store'
import http from '../../utils/http.js'

import testJson from './testJSON'

store.dispatch('initialize', testJson)

export default {
  components: {
    Parameter,
    Dictionary,
    'common-variable': CommonVariable,
    Tabs,
    Response
  },
  store,
  data () {
    return {
    }
  },
  computed: {
    state () {
      return this.$store.state.rest
    },
    quest () {
      return this.$store.getters.curQuest
    },
    questData () {
      return this.$store.getters.curQuestFormatData
    }
  },
  methods: {
    test () {
      this.questData.parameter = JSON.stringify(this.questData.parameter)
      http.get('http://test.linfiy.com/mahjong/game_s_http_cangzhou/index.php', this.questData)
      // console.log(this.questData)
    }
  },
  mounted () {
  }
}
</script>

<style>
.rest-container {
  font-size: 16px;
}
</style>

