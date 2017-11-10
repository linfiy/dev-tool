<template>
  <div class="rest-common" v-show="project">
    <div>url: {{ project.url }}</div>
    <div v-for="(variable, index) in project.vars" :key="index">
      <proto-name 
        :protoname="variable.name"
        :position="[rest.pIndex, 'vars', index]"
        :deletable="true"
      ></proto-name>
      <proto-value 
        :protovalue="variable.value"
        :position="[rest.pIndex, 'vars', index]"
        :type="variable.type"
      ></proto-value>
    </div>
    <div @click="addVar">add</div>
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
