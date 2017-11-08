<template>
  <div class="parameter">
    <div v-for="p in params" :key="p.name">
      <span v-text="p.name"></span>
      <parameter v-if="p.type === 13" :index="p.value"></parameter>
      <span 
        v-else-if="p.type === 12" 
        v-text="variables[p.value] && variables[p.value].name"></span>
      <span v-else-if="p.type === 11" v-text="p.value"></span>
    </div>
  </div>
</template>
<script>
// 递归组件

// test
import testJson from './testJSON'
// test end

import { getProtocol, getProject } from './rest-util'

export default {
  name: 'parameter',
  props: ['index'],
  data () {
    return {
      variables: getProject(testJson, this.$route.params.project).common
    }
  },
  methods: {
    getVarName (id) {
      return this.variables.filter(v => v.id === id)[0].name
    }
  },
  computed: {
    params () {
      return getProtocol(testJson, this.$route.params.protocol, this.$route.params.project)
      .parameter[this.index]
    }
  }
}

</script>
<style>
.parameter {
  padding-left: 20px;
}
</style>
