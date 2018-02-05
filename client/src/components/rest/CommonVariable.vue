<template>
<div v-show="project" style="padding-bottom: 20px">
  <div class="vars-row">
    <div class="vars-key proto-bound">URL</div>
    <div class="vars-value">
      <proto-value 
        :protovalue="project.url.value"
        :position="[rest.pIndex, 'url']"
        :type="1"
      ></proto-value>
    </div>
  </div>
  <div class="vars-row" v-for="(variable, index) in project.vars" :key="index">
    <div class="vars-key">
      <proto-name 
        :protoname="variable.name"
        :position="[rest.pIndex, 'vars', index]"
        :deletable="true"
        :last="index == project.vars.length - 1"
      ></proto-name>
    </div>
    <div class="vars-value">
      <proto-value 
        :protovalue="variable.value"
        :position="[rest.pIndex, 'vars', index]"
        :type="variable.type"
      ></proto-value>
    </div>
  </div>
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
.vars-row {
  display: flex;
}
.vars-value {
  flex: 1;
}

.vars-key {
  width: 130px;
}
</style>
