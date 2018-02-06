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
      jsonstr: '{   "app": "Aska",   "user": "wby",   "version": 1,   "projects": [{     "name": "沧州加入房间",     "url": { "value": "http://test.linfiy.com/mahjong/game_s_http_cangzhou/index.php" },     "vars": [       { "name": "客户端唯一ID", "value": "wby", "type": 1 },       { "name": "版本号", "value": "3.1.2", "type": 1 },       { "name": "userID", "value": [0, "data", "user", "uid"], "type": 2 },       { "name": "userKey", "value": [0, "data", "user", "key"], "type": 2 },       { "name": "roomID", "value": [1, "data", "rid"], "type": 2 },       { "name": "skt_ridkey", "value": [1, "data", "rid_key"], "type": 2 }     ],     "quests": [{       "name": "游客登录",       "parameter": [[         { "name": "randy_key", "type": 1, "value": "" },         { "name": "c_version", "type": 12, "value": 1 },         { "name": "parameter", "type": 13, "value": 1 }       ], [         { "name": "mod", "type": 1, "value": "Business" },         { "name": "act", "type": 1, "value": "login" },         { "name": "platform", "type": 1, "value": "gfplay_h5" },         { "name": "access_token", "type": 1, "value": "foo" },         { "name": "type", "type": 1, "value": 1 },         { "name": "openid", "type": 12, "value": 0 }       ]]     }, {       "name": "创建房间",       "parameter": [[         { "name": "randy_key", "type": 1, "value": "" },         { "name": "c_version", "type": 12, "value": 1 },         { "name": "parameter", "type": 13, "value": 1 }       ], [         { "name": "mod", "type": 1, "value": "Business" },         { "name": "act", "type": 1, "value": "open_room" },         { "name": "platform", "type": 1, "value": "gfplay_h5" },         { "name": "uid", "type": 12, "value": 2 },         { "name": "key", "type": 12, "value": 3 },         { "name": "game_type", "type": 1, "value": 261 },         { "name": "rule", "type": 13, "value": 2 }       ], [         { "name": "is_circle", "type": 1, "value": 4 },         { "name": "set_num", "type": 1, "value": 4 },         { "name": "is_dianpao_bao", "type": 1, "value": 0 },         { "name": "player_count", "type": 1, "value": 2 },         { "name": "pay_type", "type": 1, "value": 0 },         { "name": "min_fan", "type": 1, "value": 0 },         { "name": "top_fan", "type": 1, "value": 255 },         { "name": "is_feng", "type": 1, "value": 1 },         { "name": "game_type", "type": 13, "value": 3 }       ], [         { "name": "rulename", "type": 1, "value": 261 },         { "name": "display", "type": 1, "value": "沧州麻将" },         { "name": "title", "type": 1, "value": "沧州麻将 4圈(5钻) " },         { "name": "content", "type": 1, "value": "2人 发胡 付费方式:房主" }       ]]     }, {       "name": "工会信息？",       "parameter": [[         { "name": "randy_key", "type": 1, "value": "" },         { "name": "c_version", "type": 12, "value": 1 },         { "name": "parameter", "type": 13, "value": 1 }       ], [         { "name": "mod", "type": 1, "value": "Business" },         { "name": "act", "type": 1, "value": "login" },         { "name": "platform", "type": 1, "value": "gfplay_h5" },         { "name": "type", "type": 1, "value": 1 },         { "name": "openid", "type": 1, "value": 1 }       ]]     }, {       "name": "加入房间",       "parameter": [[         { "name": "randy_key", "type": 1, "value": "" },         { "name": "c_version", "type": 12, "value": 0 },         { "name": "parameter", "type": 13, "value": 1 }       ], [         { "name": "mod", "type": 1, "value": "Business" },         { "name": "act", "type": 1, "value": "join_room" },         { "name": "platform", "type": 1, "value": "gfplay_h5" },         { "name": "uid", "type": 12, "value": 2 },         { "name": "key", "type": 12, "value": 3 },         { "name": "rid", "type": 12, "value": 4 }       ]]     }]   }, {     "name": "录像回放",     "url": { "value": "http://test.linfiy.com/mahjong/game_s_http_cangzhou/index.php" },     "vars": [       { "name": "版本号", "value": "3.1.2", "type": 1 },       { "name": "游客标识", "value": "wby0", "type": 1 },       { "name": "userID", "value": [0, "data", "user", "uid"], "type": 2 },       { "name": "userKey", "value": [0, "data", "user", "key"], "type": 2 }     ],     "quests": [{       "name": "游客登录",       "parameter": [[         { "name": "randy_key", "type": 1, "value": "" },         { "name": "c_version", "type": 12, "value": 0 },         { "name": "parameter", "type": 13, "value": 1 }       ], [         { "name": "mod", "type": 1, "value": "Business" },         { "name": "act", "type": 1, "value": "login" },         { "name": "platform", "type": 1, "value": "gfplay_h5" },         { "name": "access_token", "type": 1, "value": "foo" },         { "name": "type", "type": 1, "value": 1 },         { "name": "openid", "type": 12, "value": 1 }       ]]     }, {       "name": "获取录像",       "parameter": [[         { "name": "randy_key", "type": 1, "value": "" },         { "name": "c_version", "type": 12, "value": 0 },         { "name": "parameter", "type": 13, "value": 1 }       ], [         { "name": "mod", "type": 1, "value": "Business" },         { "name": "act", "type": 1, "value": "get_game_log" },         { "name": "platform", "type": 1, "value": "gfplay_h5" },         { "name": "log_num", "type": 1, "value": "" },         { "name": "page", "type": 1, "value": 1 },         { "name": "uid", "type": 12, "value": 2 },         { "name": "key", "type": 12, "value": 3 }       ]]     }]   }] }',
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

