<template>
<div>
  <div style="width: 200px; position: absolute; top: 120px; left: 0; border-right: 1px solid ">
    <md-list>
      <md-list-item>
        <md-button v-on:click="routerGo('getConf')">
          get_conf
          <md-tooltip md-direction="top">conf</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button v-on:click="routerGo('getRule')">
          get_rule
          <md-tooltip md-direction="top">规则</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button v-on:click="routerGo('getFilterWord')">
          get_filter_word
          <md-tooltip md-direction="top">filter</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button v-on:click="routerGo('login')">
          login
          <md-tooltip md-direction="top">register & login</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button v-on:click="routerGo('loginCheck')">
          login_check
          <md-tooltip md-direction="top">Login status check</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button v-on:click="routerGo('getRule')">
          logout
          <md-tooltip md-direction="top">退出</md-tooltip>
        </md-button>
      </md-list-item>
      
      <md-list-item>
        <md-button v-on:click="routerGo('getRule')">
          get_user
          <md-tooltip md-direction="top">Get user info</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button>
          open_room
          <md-tooltip md-direction="top">用户开房</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button>
          join_room
          <md-tooltip md-direction="top">用户加入房间</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button v-on:click="routerGo('getConf')">
          real_name_reg
          <md-tooltip md-direction="top">实名制登记</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button v-on:click="routerGo('getRule')">
          get_game_log
          <md-tooltip md-direction="top">用户战绩查看</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button>
          get_game_log_save
          <md-tooltip md-direction="top">收藏战绩/取消收藏</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button>
          share_currency
          <md-tooltip md-direction="top">分享奖励钻</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button>
          bind_agent_id
          <md-tooltip md-direction="top">绑定推广员</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button>
          get_room_user
          <md-tooltip md-direction="top">获取房间里面的一个玩家信息</md-tooltip>
        </md-button>
      </md-list-item>
      
      <md-list-item>
        <md-button>
          agent_info
          <md-tooltip md-direction="top">获取代理信息</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button>
          wx_get_out_trade_no
          <md-tooltip md-direction="top">微信支付</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button>
          remote_call_back
          <md-tooltip md-direction="top">微信支付回调</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button>
          set_log
          <md-tooltip md-direction="top">收集bug</md-tooltip>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-button>
          get_table_log
          <md-tooltip md-direction="top">用户每桌战绩查看</md-tooltip>
        </md-button>
      </md-list-item>

    </md-list>
  </div>
  <div style="padding-left: 220px;">
    <md-layout md-gutter>
      <md-layout md-flex="40">
        <md-input-container>
          <label>请求地址URL</label>
          <md-input v-model="url"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>
    <md-layout md-gutter>
      <md-layout md-flex="40">
        <md-input-container>
          <label>randkey</label>
          <md-input v-model="randkey" disabled></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>
    <md-layout md-gutter>
      <md-layout md-flex="40">
        <md-input-container>
          <label>c_version</label>
          <md-input v-model="c_version"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>  
  </div>
</div>
</template>
<script>
import router from '../router'
export default {
  data () {
    return {
      url: 'test.linfiy.com',
      randkey: '空',
      c_version: '3.0.2'
    }
  },
  methods: {
    routerGo (search) {
      router.push({ path: `/agreement/${search}` })
    }
  }
}
</script>