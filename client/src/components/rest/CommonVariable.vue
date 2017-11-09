<template>
  <div class="rest-common" v-show="project">
    <div>url: {{ project.url }}</div>
    <div v-for="(variable, index) in project.vars" :key="index">
      <span v-text="variable.name"></span>
      <span v-text="variable.value"></span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    project () {
      return this.$store.getters.curProject
    }
  }
}
</script>
<style>

</style>
