<template>
  <div class="parameter">
    <div v-for="p in quest.parameter[index]" :key="p.name">
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
// 递归组件 需要指定 name
export default {
  name: 'parameter',
  props: ['index'],
  data () {
    return {
    }
  },
  computed: {
    quest () {
      return this.$store.getters.curQuest
    },
    variables () {
      return this.$store.getters.curProject.vars
    }
  }
}

</script>
<style>
.parameter {
  padding-left: 20px;
}
</style>
