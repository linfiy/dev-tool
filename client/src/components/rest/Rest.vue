<template>
<div class="rest-container">
  <dictionary></dictionary>
  <div class="rest-content">
    <div style="max-width: 50%; flex: 1">
      <common-variable></common-variable>
      <tabs></tabs>
      <md-button @click="test">Raw</md-button>
      <md-button @click="test">Quest</md-button>
    </div>
    <div style="max-width: 50%; flex: 1">
      <response :xhr="xhr"></response>
    </div>
  </div>
</div> 
</template>
<script>
import Parameter from './Parameter'
import Dictionary from './Dirctionary'
import CommonVariable from './CommonVariable'
import Response from './Response'
import Tabs from './Tabs'
import store from '../../store'
import http from '../../utils/http.js'

// import testJson from './testJSON'
// store.dispatch('initialize', testJson)
export default {
  components: {
    Parameter,
    Dictionary,
    'common-variable': CommonVariable,
    Tabs,
    Response
  },
  store,
  data () {
    return {
      xhr: ''
    }
  },
  computed: {
    state () {
      return this.$store.state.rest
    },
    project () {
      return this.$store.getters.curProject
    },
    quest () {
      return this.$store.getters.curQuest
    },
    questData () {
      return this.$store.getters.curQuestFormatData
    }
  },
  methods: {
    test () {
      const params = JSON.parse(JSON.stringify(this.questData))
      for (let key in params) {
        if (typeof params[key] === 'object' && !Array.isArray(params[key])) {
          console.log(params[key])
          params[key] = JSON.stringify(params[key])
        }
      }
      http.get(this.project.url.value, params, true)
      .then((xhr) => {
        this.xhr = xhr
        try {
          // 更新公用变量的值
          const resObject = JSON.parse(xhr.response)
          this.project.vars.map((variable, i) => {
            console.log(variable)
            if (variable.type !== 2 || variable.value[0] !== this.state.qIndex) return
            const uri = variable.value.slice(1)

            console.log('uri' + i, JSON.stringify(uri))
            let cur = resObject
            while (uri.length > 0) {
              cur = cur[uri.shift()]
            }

            this.$store.dispatch('saveVar', { index: i, val: cur })
            // this.state.cacheVars[i] = cur
          })
        } finally {
        }
      })
      // console.log(this.questData)
    }
  },
  mounted () {
  }
}
</script>

<style>
.rest-container {
  font-size: 16px;
}

.rest-content {
  position: fixed;
  left: 270px;
  top: 48px;
  right: 0;
  bottom: 0;
  overflow: scroll;
  display: flex;
}
</style>

