<template>
  <p
    class="rest-proto-value"
    @mouseover="displayEditor = true"
    @mouseout="displayEditor = false"
    >
    <input v-if="editing" v-model="pValue" @blur="changeValue">
    <span v-else v-text="pValue"></span>
    
    <span v-show="displayEditor && !editing" @click="enterEditing">editor</span>
    </p>
</template>
<script>
export default {
  props: ['protovalue', 'position', 'type'],
  data () {
    return {
      displayEditor: false,
      editing: false,
      pValue: this.protovalue
    }
  },
  computed: {
    protoValue () {
      return (this.pValue = this.protovalue)
    }
  },
  methods: {
    enterEditing () {
      this.editing = true
      this.displayEditor = false
    },
    changeValue () {
      this.$store.dispatch('editProto', {
        position: this.position, type: 'value', newName: this.pName
      })
      this.editing = false
      this.displayEditor = false
    }
  }
}
</script>
<style>

</style>
