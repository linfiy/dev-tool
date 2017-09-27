<template>
  <div class="container">
    <md-layout md-gutter>
      <md-layout md-flex="50" md-flex-offset="25">
        <div>
          <b>注意：</b>如需使用此功能需要开启内置服务器，可在项目主页看到开启方法
        </div>
        <md-input-container 
          :class="uploadFile || 'md-input-invalid'">
          <md-file
            required
            @selected="checkFileSuffix"
            placeholder="选择字体文件"></md-file>
            <span class="md-error">不能为空</span>
        </md-input-container>
        <md-input-container 
          md-clearable
          :class="filterText || 'md-input-invalid'">
          <label>过滤文字</label>
          <md-textarea 
            required
            v-model="filterText"></md-textarea>
          <span class="md-error">不能为空</span>
        </md-input-container>
        <md-layout>
          <md-radio 
            v-model="filterType" 
            name="filter-radio" 
            md-value="1"
            class="md-primary">保留文字</md-radio>
          <md-radio 
            v-model="filterType" 
            name="filter-radio" 
            md-value="0">删除文字</md-radio>
        </md-layout>
        <div>
          <md-button
            :disabled="filterText === '' || uploadFile === null"
            @click="zip"
            class="md-raised md-primary">Zip!</md-button>
        </div>
        
      </md-layout>
    </md-layout>
  </div>
</template>
<script>
import http from '../utils/http'

export default {
  data () {
    return {
      uploadFile: null,
      filterText: '',
      filterType: 1
    }
  },
  methods: {
    checkFileSuffix (fileList) {
      var file = fileList[0]
      var suffix = file.name.match(/(?=.)\w+$/)
      if (!/ttf/.test(suffix)) {
        alert('支持的字体文件格式为 ttf')
        return
      }
      this.uploadFile = file
    },
    zip () {
      var params = {
        type: parseInt(this.filterType),
        filterText: this.filterText,
        fontFile: this.uploadFile
      }
      http.post(location.origin + '/zipfont', params)
      .then(() => console.log('上传成功正在下载'))
      .catch(e => console.log('上传失败请重新尝试' + e))
    }
  }
}
</script>
<style>

</style>

