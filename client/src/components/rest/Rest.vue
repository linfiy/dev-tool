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
  methods: {
    test () {
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

