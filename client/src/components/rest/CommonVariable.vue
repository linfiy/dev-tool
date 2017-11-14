<template>
<div v-show="project" style="padding-bottom: 20px">
  <md-layout md-gutter>
    <div class="md-layout md-flex-30 proto-bound">url</div>
    <proto-value 
      :protovalue="project.url.value"
      :position="[rest.pIndex, 'url']"
      :type="1"
    ></proto-value>
  </md-layout>
  <md-layout md-gutter v-for="(variable, index) in project.vars" :key="index">
    <proto-name 
      :protoname="variable.name"
      :position="[rest.pIndex, 'vars', index]"
      :deletable="true"
      :last="index == project.vars.length - 1"
    ></proto-name>
    <proto-value 
      :protovalue="variable.value"
      :position="[rest.pIndex, 'vars', index]"
      :type="variable.type"
    ></proto-value>
  </md-layout>
</div>
</template>
<script>
import ProtoName from './ProtoName'
import ProtoValue from './ProtoValue'

export default {
  components: { 'proto-name': ProtoName, 'proto-value': ProtoValue },
  data () {
    return {
    }
  },
  computed: {
    project () {
      return this.$store.getters.curProject
    },
    rest () {
      return this.$store.state.rest
    }
  },
  methods: {
    addVar () {
      this.$store.dispatch('addProto', {
        position: [this.rest.pIndex, 'vars'],
        data: { name: '变量名', value: '变量值', type: 1 }
      })
    }
  }
}
</script>
<style>

</style>
