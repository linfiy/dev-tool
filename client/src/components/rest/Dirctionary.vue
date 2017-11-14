<template>
<div class="rest-dic">
  <md-list>
    <md-list-item 
      v-for="(project, index) in state.origin" 
      :key="index"
      @click="setCurrent(index)">
      <span v-text="project.name"></span>
      
      <md-button class="md-icon-button md-list-action">
        <md-icon class="md-primary">delete</md-icon>
      </md-button>
    </md-list-item>
  </md-list>
</div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    state () {
      return this.$store.state.rest
    }
  },
  methods: {
    setCurrent (index) {
      this.$store.dispatch('setCurrentProject', { pIndex: index, qIndex: 0 })
    },
    addProject () {
      // write store
    },
    editProjectName () {
    }
  }
}
</script>
<style>
.rest-dic {
  width: 270px;
}
/* 
.rest-dic h2 {
  padding-left: 30px;
  font-size: 20px;
  font-weight: 900;
}

.rest-dic ul {
  padding-left: 0;
}
.rest-dic li {
  margin-top: 0 !important; 
  padding: 10px 0 10px 40px;
  font-size: 16px;
  user-select: none;
  cursor: pointer;
}
.rest-dic li.select-item {
  color: #cd164e;
}
.rest-dic li:hover {
  background-color: #eeeeee;
}

h2.select-item {
  background: #cd164e;
  color: white;
} */
</style>
