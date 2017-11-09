<template>
<div class="rest-container">
  <dictionary></dictionary>
  <div>
    <common-variable></common-variable>
    <parameter :index="0"></parameter>
    <md-button @click="test">Quest</md-button>
  </div>
</div> 
</template>
<script>
import Parameter from './Parameter'
import Dictionary from './Dirctionary'
import CommonVariable from './CommonVariable'
import store from '../../store'

export default {
  components: { Parameter, Dictionary, 'common-variable': CommonVariable },
  data () {
    return {
      projectID: this.$route.params.project,
      protocolID: this.$route.params.protocol
    }
  },
  methods: {
    test () {
      store.dispatch('increazing')
    }
  }
}
</script>

<style>
.rest-container {
  display: flex;
}
</style>

