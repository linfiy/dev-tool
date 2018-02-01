<template>
  <div class="container">
    <md-layout md-gutter>
      <md-layout md-flex="50" md-flex-offset="25">
        <json :str="jsonstr"></json>
      </md-layout>
      <md-layout md-flex="50" md-flex-offset="25">
        <md-input-container md-clearable>
          <label>保留文字</label>
          <md-textarea v-model="jsonstr"></md-textarea>
        </md-input-container>

        <div>
          <!-- <md-button @click="format" class="md-raised md-primary">format!</md-button> -->
        </div>

      </md-layout>
    </md-layout>
  </div>
</template>
<script>
import JSONDisplay from './JSONDisplay/JSONDisplay'

export default {
  components: { json: JSONDisplay },
  data () {
    return {
      jsonstr: '{"a":11,"b":[12,{"x":3, "xxx": "ss" }]}',
      display: ''
    }
  }
}
</script>
<style>
.md-whiteframe {
  width: 100%;
}

pre {
  margin: 0; overflow-x: scroll;
}
</style>

