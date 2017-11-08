<template>
  <div class="rest-common">
    <div>url: {{ url }}</div>
    <div v-for="(variable, index) in variables" :key="index">
      <span v-text="variable.name"></span>
      <!-- 需要非常特殊的处理！！！！ 根据不同type -->
      <span v-text="variable.value"></span>
    </div>
  </div>
</template>
<script>
// test
import testJson from './testJSON'
import { getProject } from './rest-util'

// test end
export default {
  data () {
    return {
      pro: 1
    }
  },
  computed: {
    variables () {
      return getProject(testJson, this.$route.params.project).common
    },
    url () {
      return getProject(testJson, this.$route.params.project).url
    }
  }
}

</script>
<style>

</style>
