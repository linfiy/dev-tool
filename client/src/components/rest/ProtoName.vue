<template>
  <p
    class="rest-proto-name"
    @mouseover="displayEditor = true"
    @mouseout="displayEditor = false"
    >
      <input v-if="editing" v-model="pName" :shadow="protoName" @blur="changeName">
      <span v-else v-text="pName" :shadow="protoName"></span>
      
      <span v-show="displayEditor && !editing" @click="enterEditing">editor</span>
      <span v-show="displayEditor && deletable && !editing" @click="delProto">delete</span>
    </p>
</template>
<script>
export default {
  props: ['protoname', 'position', 'deletable'],
  data () {
    return {
      displayEditor: false,
      editing: false,
      pName: this.protoname
    }
  },
  computed: {
    protoName () {
      return (this.pName = this.protoname)
    }
  },
  methods: {
    enterEditing () {
      this.editing = true
      this.displayEditor = false
    },
    changeName () {
      this.$store.dispatch('editProto', {
        position: this.position, type: 'name', newName: this.pName
      })
      this.editing = false
      this.displayEditor = false
    },
    delProto () {
      // 修改这个会影响参数对变量的引用
      this.$store.dispatch('delProto', this.position)
    }
  }
}
</script>
<style>

</style>
