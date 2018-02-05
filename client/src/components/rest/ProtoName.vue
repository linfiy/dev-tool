<template>
<div class="md-layout proto-bound" :class="last && 'add-offset'">
  <div
    class="proto-name-box"
    @mouseover="displayEditor = true"
    @mouseout="displayEditor = false">
    <md-input-container md-inline v-if="editing">
      <md-input v-model="pName" :shadow="protoName"></md-input>
      <i class="md-icon md-theme-default material-icons" @click="changeName">done</i>
    </md-input-container>
    <!-- <input v-if="editing" v-model="pName" :shadow="protoName" @blur="changeName"> -->
    <span v-else class="md-flex-60" v-text="pName" :shadow="protoName"></span>
    
    <i
      class="md-icon md-primary md-theme-default material-icons proto-edit-icon"
      v-show="displayEditor && !editing" 
      @click="enterEditing">editor</i>
    <i
      class="md-icon md-accent md-theme-default material-icons proto-edit-icon"
      v-show="displayEditor && deletable && !editing" 
      @click="delProto">delete</i>
  </div>
  <md-button class="proto-add" v-if="last" @click="addProto">
    <md-icon>add</md-icon>
  </md-button>
</div>
</template>
<script>
export default {
  props: ['protoname', 'position', 'deletable', 'last'],
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
    },
    addProto () {
      this.$store.dispatch('addProto', {
        position: this.position.slice(0, this.position.length - 1),
        data: { name: 'KEY', value: 'VALUE', type: 1 }
      })
    }
  }
}
</script>
<style>
.proto-bound {
  height: 26px; line-height: 26px; border-bottom: 1px solid #f2f2f2;
  position: relative;
  font-size: 12px;
}

.proto-name-box {
  width: 100%;
}
.proto-edit-icon {
  font-size: 16px;
  cursor: pointer;
  margin: 0 2px;
  /* position: relative; */
  float: right;
}
.proto-add {
  position: absolute;
  top: 30px;
  left: -10px;
}
.add-offset {
  margin-bottom: 40px;
}
</style>
