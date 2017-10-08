<template>
  <div class="container">
    <md-layout md-gutter>
      <md-layout md-flex="50" md-flex-offset="25">
        <md-whiteframe md-elevation="2" >
          <pre v-html="display"></pre>
        </md-whiteframe>
      </md-layout>
      <md-layout md-flex="50" md-flex-offset="25">
        <md-input-container md-clearable>
          <label>保留文字</label>
          <md-textarea v-model="json"></md-textarea>
        </md-input-container>

        <div>
          <md-button @click="format" class="md-raised md-primary">format!</md-button>
        </div>

      </md-layout>
    </md-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      json: '{"a":11,"b":[12,{"x":3, "xxx": "ss" }]}',
      display: ''
    }
  },
  methods: {
    format () {
      try {
        this.display = (formatJson(this.json))
      } catch (e) {
        alert('JSON 格式不正确')
        console.log(e)
      }
    }
  }
}

var formatJson = function (json, options) {
  console.log(typeof json)
  var reg = null
  var formatted = ''
  var pad = 0
  var PADDING = '  '
  options = options || {}
  options.newlineAfterColonIfBeforeBraceOrBracket = !!options.newlineAfterColonIfBeforeBraceOrBracket
  options.spaceAfterColon = !!options.spaceAfterColon
  if (typeof json !== 'string') {
    json = JSON.stringify(json)
  } else {
    json = JSON.parse(json)
    json = JSON.stringify(json)
  }
  reg = /([{}])/g
  json = json.replace(reg, '\r\n$1\r\n')
  reg = /([[\]])/g
  json = json.replace(reg, '\r\n$1\r\n')
  reg = /(,)/g
  json = json.replace(reg, '$1\r\n')
  reg = /(\r\n\r\n)/g
  json = json.replace(reg, '\r\n')
  reg = /\r\n,/g
  json = json.replace(reg, ',')
  if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
    reg = /:\r\n{/g
    json = json.replace(reg, ':{')
    reg = /:\r\n\[/g
    json = json.replace(reg, ':[')
  }
  if (options.spaceAfterColon) {
    reg = /:/g
    json = json.replace(reg, ':')
  }
  (json.split('\r\n')).forEach(function (node, index) {
    var i = 0
    var indent = 0
    var padding = ''

    if (node.match(/\{$/) || node.match(/\[$/)) {
      indent = 1
    } else if (node.match(/\}/) || node.match(/\]/)) {
      if (pad !== 0) {
        pad -= 1
      }
    } else {
      indent = 0
    }

    for (i = 0; i < pad; i++) {
      padding += PADDING
    }

    formatted += padding + node + '\r\n'
    pad += indent
  }
  )
  return formatted
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

