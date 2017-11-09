<template>
<div>
  <md-tabs @change="onChange" v-show="quests">
    <md-tab 
      v-for="(quest, index) in quests"
      :key="index" 
      :id="quest.name" 
      :md-label="quest.name">
      <parameter :index="0"></parameter>
    </md-tab>
  </md-tabs>
</div>
</template>
<script>
import Parameter from './Parameter'
export default {
  components: { Parameter },
  data () {
    return {}
  },
  methods: {
    onChange (qIndex) {
      console.log(qIndex)
      this.$store.dispatch('setCurrentQuest', qIndex)
    }
  },
  computed: {
    quests () {
      var currentProject = this.$store.getters.curProject
      return currentProject ? currentProject.quests : null
    }
  }
}
</script>
<style>

</style>

