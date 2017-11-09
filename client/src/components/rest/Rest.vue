<template>
<div class="rest-container">
  <dictionary></dictionary>
  <div>
    <common-variable></common-variable>
    <tabs></tabs>
    <md-button @click="test">Quest</md-button>
  </div>
</div> 
</template>
<script>
import Parameter from './Parameter'
import Dictionary from './Dirctionary'
import CommonVariable from './CommonVariable'
import Tabs from './Tabs'
import store from '../../store'
// test
import testJson from './testJSON'

store.dispatch('initialize', testJson)

export default {
  components: { Parameter, Dictionary, 'common-variable': CommonVariable, Tabs },
  store,
  data () {
    return {
      projectID: this.$route.params.project,
      protocolID: this.$route.params.protocol
    }
  },
  methods: {
    test () {
      console.log(1111)
    }
  },
  mounted () {
  }
}
</script>

<style>
.rest-container {
  display: flex;
}
</style>

