<template>
<div 
  class="md-layout md-flex-70 proto-bound"
  @mouseover="displayEditor = true"
  @mouseout="displayEditor = false">

  <md-input-container md-inline v-if="editing">
    <md-select v-model="pValueName" name="pValue" id="pValue">
      <md-option 
        :key="index"
        v-for="(variable, index) in project.vars"
        :value="variable.name" v-text="variable.name"></md-option>
    </md-select>
    <i class="md-icon md-theme-default material-icons" @click="changeValue">done</i>
  </md-input-container>
  <span v-else class="md-flex-90" v-text="pValueName" :shadow="protoValue" ></span>
  
  <i
    class="md-icon md-primary md-theme-default material-icons proto-edit-icon"
    v-show="displayEditor && !editing" 
    @click="enterEditing">editor</i>
</div>
</template>
<script>
export default {
  props: ['protovalue', 'position', 'type'],
  data () {
    return {
      displayEditor: false,
      editing: false,
      pValueName: this.$store.getters.curProject.vars[this.protovalue].name
    }
  },
  computed: {
    project () {
      return this.$store.getters.curProject
    },
    protoValue () {
      return (this.pValueName = this.project.vars[this.protovalue].name)
    }
  },
  methods: {
    enterEditing () {
      this.editing = true
      this.displayEditor = false
    },
    changeValue () {
      this.$store.dispatch('editProto', {
        position: this.position, type: 'value', newName: this.pValue
      })
      this.editing = false
      this.displayEditor = false
    }
  }
}
</script>
<style>
.md-input-container {
  min-height: 30px; padding: 0; margin: 0;
}
</style>
