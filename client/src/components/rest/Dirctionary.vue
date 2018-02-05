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
  <md-button>
    添加
  </md-button>
  <input type="text" v-model="jsondata">
  <md-button @click="importJSON">
    导入
  </md-button>
  <md-button @click="exportJSON">
    导出
  </md-button>
</div>
</template>
<script>
import { copyToClipBoard } from '../../utils/bom'
export default {
  data () {
    return {
      jsondata: ''
    }
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
    },

    exportJSON () {
      copyToClipBoard(JSON.stringify(this.state.origin))
      .then(() => window.alert('已复制到剪切板'))
      .catch((e) => window.alert(e))
    },
    importJSON () {
      console.log(this.jsondata)
      this.$store.dispatch('initialize', JSON.parse(this.jsondata).projects)
    }
  }
}
</script>
<style>
.rest-dic {
  position: fixed;
  width: 270px;
  top: 48px;
  left: 0;
  bottom: 0;
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
