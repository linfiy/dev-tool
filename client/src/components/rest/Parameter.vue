<template>
<div class="parameter" :class="index != 0 && 'param-tab'">
  <md-layout md-gutter v-for="(p, paramIndex) in quest.parameter[index]" :key="p.name">
    <proto-name 
      :protoname="p.name"
      :position="[rest.pIndex, 'quests', rest.qIndex, 'parameter', index, paramIndex]"
      :deletable="true"
      :last="paramIndex == quest.parameter[index].length - 1"
    ></proto-name>
    <!-- 多级参数 -->
    <parameter v-if="p.type === 13" :index="p.value"></parameter>
    <!-- common variable -->
    <variable-value 
      v-else-if="p.type === 12"
      :protovalue="p.value"
      :position="[rest.pIndex, 'quests', rest.qIndex, 'parameter', index, paramIndex]"
      :type="1"
      ></variable-value>
    <span 
      v-else-if="p.type === 12" 
      v-text="variables[p.value] && variables[p.value].name"></span>
    <!-- 普通参数 -->
    <proto-value 
      v-else-if="p.type === 1"
      :protovalue="p.value"
      :position="[rest.pIndex, 'quests', rest.qIndex, 'parameter', index, paramIndex]"
      :type="1"
      ></proto-value>
  </md-layout>
</div>
  
</template>
<script>
import ProtoName from './ProtoName'
import ProtoValue from './ProtoValue'
import VariableValue from './VariableValue'
// 递归组件 需要指定 name
export default {
  name: 'parameter',
  props: ['index'],
  components: {
    'proto-name': ProtoName,
    'proto-value': ProtoValue,
    'variable-value': VariableValue
  },
  data () {
    return {
    }
  },
  computed: {
    rest () {
      return this.$store.state.rest
    },
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
.param-tab {
  flex: 1;
}
/* .parameter {
  
} */
</style>
