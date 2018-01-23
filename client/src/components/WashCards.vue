<template> 
<div> 
  <md-layout md-gutter> 
      <md-layout md-flex="33"> 
        <md-input-container> 
          <label for="requestUrl">测试版地址</label> 
          <md-select name="requestUrl" id="requestUrl" v-model="requestUrl"> 
            <md-option v-for="info in urls" :key="info.name" :value="info.url">{{ info.name }}</md-option> 
          </md-select> 
        </md-input-container> 
      </md-layout> 
      <md-layout md-flex="33"> 
        <md-input-container> 
          <label for="requestVersion">版本号</label> 
          <md-select name="requestVersion" id="requestVersion" v-model="requestVersion"> 
            <md-option v-for="version in versions" :key="version" :value="version">{{ version }}</md-option> 
          </md-select> 
        </md-input-container> 
      </md-layout> 
      <md-layout md-flex="33"> 
        <md-input-container> 
          <label>房间号</label> 
          <md-input v-model="rid"></md-input> 
        </md-input-container> 
      </md-layout> 
    </md-layout> 
 
    <md-button class="md-raised md-primary" @click="wash">洗牌</md-button> 
</div> 
</template> 
<script>
import request from '../utils/request'
export default {
  props: ['cards'],
  data () {
    return {
      rid: '',
      requestUrl: '',
      requestVersion: '',
      urls: [
        { name: '沧州', url: 'http://test.linfiy.com/mahjong/game_s_http_cangzhou/index.php' },
        { name: '保定newnew', url: 'http://test.linfiy.com/mahjong/game_s_http_baoding_newnew/index.php' },
        { name: '佳木斯', url: 'http://test.linfiy.com/mahjong/game_s_http_jiamusi_new/index.php' }
      ],
      versions: [
        '3.1.1', '3.1.2', '3.1.3', '3.1.4', '3.1.5', '3.1.6',
        '3.0.1', '3.0.2', '3.0.3', '3.0.4', '3.0.5', '3.0.6', '3.0.7', '3.0.8', '3.0.9'
      ]
    }
  },
  methods: {
    wash () {
      if (this.requestUrl === '' || this.requestVersion === '') {
        alert('请选择洗牌地址和版本号')
        return
      }

      if (this.rid === '') {
        alert('请输入正确房间号')
        return
      }

      const cardArrayString = Array.isArray(this.cards) ? JSON.stringify(this.cards) : this.cards

      if (cardArrayString <= 2) {
        alert('洗牌数组为空')
        return
      }

      request.get(this.requestUrl, { c_version: this.requestVersion }, {
        mod: 'Business',
        platform: 'gfplay',
        act: 'make_card',
        rid: parseInt(this.rid),
        all_card: cardArrayString
      })
    }
  }
}
</script> 
<style> 
 
</style> 