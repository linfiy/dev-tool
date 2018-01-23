<template>
<div>
  <div style="width: 240px; position: absolute; top: 120px; left: 0; border-right: 1px solid ">
    <md-list>
      <md-list-item v-for="(value, key) in agreementList" :key="key">
        <md-button v-on:click="routerGo(key)"
                   v-bind:class="{ true: 'md-warn', false: '' }[key === $route.params.search]">
          {{ value.act }}
          <md-tooltip md-direction="top">{{ value.des }}</md-tooltip>
        </md-button>
      </md-list-item>
    </md-list>
  </div>

  <div style="padding-left: 260px;">
    <md-layout md-gutter>
      <md-layout md-flex="60">
        <md-input-container>
          <label>请求地址URL</label>
          <md-input v-model="url"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>
    <md-layout md-gutter>
      <md-layout md-flex="50">
        <md-input-container>
          <label>randkey</label>
          <md-input v-model="randkey" disabled></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>
    <md-layout md-gutter>
      <md-layout md-flex="50">
        <md-input-container>
          <label>c_version</label>
          <md-input v-model="c_version"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>

    <p style="color: red; font-size: 26px;">parameter: </p>

    <md-layout md-gutter v-for="(list, index) in parameterList" :key="index">
      <md-layout md-flex="50">
        <md-input-container>
          <label>{{ list.name }}{{ list.label }}</label>
          <md-input v-model="list.value" 
                    v-bind:disabled="list.disabled"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>

    <button v-on:click="setAgreement(parameterList)">发送</button>
  </div>
  

</div>
</template>
<script>
import router from '../router'
import request from '../utils/request.js'
export default {
  data () {
    return {
      agreementList: {
        getConf: {
          act: 'get_conf',
          des: 'conf',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'get_conf', disabled: true }
          ]
        },
        getRule: {
          act: 'get_rule',
          des: '规则',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'get_rule', disabled: true }
          ]
        },
        getFilter: {
          act: 'get_filter_word',
          des: '敏感词',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'get_filter_word', disabled: true }
          ]
        },
        login: {
          act: 'login',
          des: '微信0/游客1登录',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'login', disabled: true },
            { name: 'type', value: 0, disabled: false, label: '：微信登录0/游客登录1' },
            { name: 'access_token', value: '', disabled: false },
            { name: 'openid', value: '', disabled: false }
          ]
        },
        loginCheck: {
          act: 'login_check',
          des: 'Login status check',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'login_check', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' },
            { name: 'key', value: '', disabled: false, label: '：超级key' }
          ]
        },
        logout: {
          act: 'logout',
          des: '退出',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'logout', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' },
            { name: 'key', value: '', disabled: false, label: '：登录用的key' }
          ]
        },
        getUser: {
          act: 'get_user',
          des: 'Get user info',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'get_user', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' }
          ]
        },
        openRoom: {
          act: 'open_room',
          des: '用户开房',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'open_room', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' },
            { name: 'key', value: '', disabled: false, label: '：登录用的key' },
            { name: 'type', value: '', disabled: false, label: '：开房类型' },
            { name: 'game_type', value: '', disabled: false, label: '：游戏类型' },
            { name: 'rule', value: '', disabled: false, label: '开房规则' }
          ]
        },
        joinRoom: {
          act: 'join_room',
          des: '用户加入房间',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'join_room', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' },
            { name: 'key', value: '', disabled: false, label: '：登录用的key' },
            { name: 'rid', value: '', disabled: false, label: '：房间号' }
          ]
        },
        realName: {
          act: 'real_name_reg',
          des: '实名制登记',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'real_name_reg', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' },
            { name: 'key', value: '', disabled: false, label: '：登录用的key' },
            { name: 'real_name_reg', value: '', disabled: false, label: '：123131231233123123132|大名' }
          ]
        },
        getGameLog: {
          act: 'get_game_log',
          des: '用户战绩查看',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'get_game_log', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' },
            { name: 'key', value: '', disabled: false, label: '：登录用的key' },
            { name: 'log_num', value: '', disabled: false, label: '：记录码' },
            { name: 'page', value: 1, disabled: false, label: '：页数' }
          ]
        },
        getGameLogSave: {
          act: 'get_game_log_save',
          des: '收藏战绩/取消收藏',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'get_game_log_save', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' },
            { name: 'key', value: '', disabled: false, label: '：登录用的key' },
            { name: 'log_num', value: '', disabled: false, label: '：记录码' },
            { name: 'save_type', value: 1, disabled: false, label: '：1收藏/2取消收藏' }
          ]
        },
        shareCurrency: {
          act: 'share_currency',
          des: '分享奖励钻',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'share_currency', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' },
            { name: 'key', value: '', disabled: false, label: '：登录用的key' }
          ]
        },
        bindAgent: {
          act: 'bind_agent_id',
          des: '绑定推广员',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'bind_agent_id', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' },
            { name: 'key', value: '', disabled: false, label: '：登录用的key' },
            { name: 'agent_id', value: '', disabled: false, label: '：推广员ID' }
          ]
        },
        getRoomUser: {
          act: 'get_room_user',
          des: '获取房间里面的一个玩家信息',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'get_room_user', disabled: true },
            { name: 'room', value: '', disabled: false, label: '：房间号' }
          ]
        },
        agentInfo: {
          act: 'agent_info',
          des: '获取代理信息',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'agent_info', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' },
            { name: 'key', value: '', disabled: false, label: '：登录用的key' },
            { name: 'agent_id', value: '', disabled: false, label: '：推广员ID' }
          ]
        },
        WxPay: {
          act: 'wx_get_out_trade_no',
          des: '微信支付',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'wx_get_out_trade_no', disabled: true },
            { name: 'aid', value: '', disabled: false, label: '：玩家账号' },
            { name: 'amount', value: '', disabled: false, label: '：充值钻数' }
          ]
        },
        payCallBack: {
          act: 'remote_call_back',
          des: '微信支付回调',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'remote_call_back', disabled: true },
            { name: 'out_trade_no', value: '', disabled: false, label: '：订单号' },
            { name: 'total_fee', value: '', disabled: false, label: '：支付金额' },
            { name: 'call_back_param', value: '', disabled: false, label: '：回调参数' }
          ]
        },
        setLog: {
          act: 'set_log',
          des: '收集bug',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'set_log', disabled: true },
            { name: 'log', value: '', disabled: false, label: '：bug string' }
          ]
        },
        getTableLog: {
          act: 'get_table_log',
          des: '用户每桌战绩查看',
          parameter: [
            { name: 'mod', value: 'Business', disabled: true },
            { name: 'platform', value: 'gfplay', disabled: false },
            { name: 'act', value: 'get_table_log', disabled: true },
            { name: 'uid', value: '', disabled: false, label: '：账号' },
            { name: 'key', value: '', disabled: false, label: '：登录用的key' },
            { name: 'page', value: '', disabled: false, label: '：页数' }
          ]
        }
      },
      url: 'http://test.linfiy.com/mahjong/game_s_http_cangzhou/index.php',
      randkey: '空',
      c_version: '3.0.5',
      rootParams: {
        randkey: '',
        c_version: '3.0.5'
      }
    }
  },
  computed: {
    parameterList () {
      return this.agreementList[this.$route.params.search].parameter
    }
  },
  methods: {
    routerGo (search) {
      router.push({ path: `/agreement/${search}` })
    },
    setAgreement (arr) {
      var parameter = {}
      for (let i = 0; i < arr.length; i++) {
        parameter[arr[i].name] = arr[i].value
      }
      console.log(this.url, this.rootParams, parameter)
      request.get(this.url, this.rootParams, parameter)
      .then((res) => {
        alert(JSON.stringify(res))
      })
      .catch((error) => {
        alert('错了吧！傻了吧：' + JSON.stringify(error))
      })
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      console.log('123', this.$route.params.search)
    })
  }
}
</script>