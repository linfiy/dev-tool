<template>
<div 
  class="md-layout md-flex-70 proto-bound"
  @mouseover="displayEditor = true"
  @mouseout="displayEditor = false">

  <md-input-container md-inline v-if="editing">
    <md-input v-model="pValue" :shadow="protoValue"></md-input>
    <i class="md-icon md-theme-default material-icons" @click="changeValue">done</i>
  </md-input-container>
  <span v-else class="md-flex-90" v-text="pValue" :shadow="protoValue" ></span>
  
  <i
    class="md-icon md-primary md-theme-default material-icons proto-edit-icon"
    v-show="displayEditor && !editing" 
    @click="enterEditing">editor</i>
</div>
</template>
<script>
import { transToDisplay, transToValue } from './rest-util'
export default {
  props: ['protovalue', 'position', 'type'],
  data () {
    return {
      displayEditor: false,
      editing: false,
      pValue: transToDisplay(this.protovalue)
    }
  },
  computed: {
    protoValue () {
      return (this.pValue = transToDisplay(this.protovalue))
    }
  },
  methods: {
    enterEditing () {
      this.editing = true
      this.displayEditor = false
    },
    changeValue () {
      this.$store.dispatch('editProto', {
        position: this.position, type: 'value', newName: transToValue(this.pValue)
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
