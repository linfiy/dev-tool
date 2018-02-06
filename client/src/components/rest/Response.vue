<template>
<div class="rest-response">
  Response
  header
  <!-- {{ this.res }} -->
  status: {{ xhr.status }}
  {{ getHeader(xhr) }}
  <hr>
  <json :str="xhr.responseText"></json>
</div>
</template>
<script>
import JSONDisplay from '../JSONDisplay/JSONDisplay'

export default {
  props: ['xhr'],
  components: { json: JSONDisplay },
  methods: {
    getHeader (xhr) {
      console.log(xhr)
      return xhr
    }
  }
}
// var formatJson = function (json, options) {
//   console.log(typeof json)
//   var reg = null
//   var formatted = ''
//   var pad = 0
//   var PADDING = '  '
//   options = options || {}
//   options.newlineAfterColonIfBeforeBraceOrBracket = !!options.newlineAfterColonIfBeforeBraceOrBracket
//   options.spaceAfterColon = !!options.spaceAfterColon
//   if (typeof json !== 'string') {
//     json = JSON.stringify(json)
//   } else {
//     json = JSON.parse(json)
//     json = JSON.stringify(json)
//   }
//   reg = /([{}])/g
//   json = json.replace(reg, '\r\n$1\r\n')
//   reg = /([[\]])/g
//   json = json.replace(reg, '\r\n$1\r\n')
//   reg = /(,)/g
//   json = json.replace(reg, '$1\r\n')
//   reg = /(\r\n\r\n)/g
//   json = json.replace(reg, '\r\n')
//   reg = /\r\n,/g
//   json = json.replace(reg, ',')
//   if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
//     reg = /:\r\n{/g
//     json = json.replace(reg, ':{')
//     reg = /:\r\n\[/g
//     json = json.replace(reg, ':[')
//   }
//   if (options.spaceAfterColon) {
//     reg = /:/g
//     json = json.replace(reg, ':')
//   }
//   (json.split('\r\n')).forEach(function (node, index) {
//     var i = 0
//     var indent = 0
//     var padding = ''

//     if (node.match(/\{$/) || node.match(/\[$/)) {
//       indent = 1
//     } else if (node.match(/\}/) || node.match(/\]/)) {
//       if (pad !== 0) {
//         pad -= 1
//       }
//     } else {
//       indent = 0
//     }

//     for (i = 0; i < pad; i++) {
//       padding += PADDING
//     }

//     formatted += padding + node + '\r\n'
//     pad += indent
//   }
//   )
//   return formatted
// }
</script>
<style>
.rest-response {
  height: 100%;
  overflow: scroll;
}

</style>
