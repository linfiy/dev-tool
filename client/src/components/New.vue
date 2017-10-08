<template>
<div style="position: relative;">
 <div class="main-sidebar-links" style="width: 240px; border-right: 1px solid #e5e5e5;">
  <ul class="md-list md-dense md-theme-default">
    <li class="md-list-item md-list-item-expand" v-for="list in json">
      <div class="md-list-item-container md-button">
        <span>{{ list.project }}</span>
        <button>修改</button>
        <i aria-hidden="true" class="md-icon md-list-expand-indicator md-theme-default material-icons">keyboard_arrow_down</i>
      </div>
      <div v-for="subList in list.agreement" class="md-list-item-container">
        <span>{{ subList.name }}</span>
        <button>编辑</button>
      </div>
    </li>
  </ul>
  <md-button class="md-raised md-primary">创建</md-button>
 </div>
 <div style="position: absolute; left: 250px; top: 10px;">
  <create :add="add"></create>
 </div>
 
</div> 
</template>
<script>
import { setParams } from '../utils/setParams.js'
import http from '../utils/http'
import Create from './Create'
export default {
  components: { Create },
  data () {
    return {
      path: 'http://test.linfiy.com/mahjong/game_s_http_cangzhou/index.php',
      // json: []
      json: [
        {
          id: 1,
          project: '沧州协议测试',
          common: [
            { id: 1, name: '房间号', value: 11111, type: 1 },
            { id: 3, name: 'uid', value: 11111, type: 1 },
            { id: 2, name: '版本号', value: '3.0.2', type: 1 }
          ],
          agreement: [
            {
              id: 1,
              name: 'get_conf',
              canshu: [
                [
                  {
                    name: 'randy_key',
                    type: 11,
                    value: ''
                  },
                  {
                    name: 'c_version',
                    type: 11,
                    value: '3.0.2'
                  }
                ],
                [
                  {
                    name: 'mod',
                    type: 11,
                    value: 'Business'
                  },
                  {
                    name: 'act',
                    type: 12,
                    value: 'get_conf'
                  },
                  {
                    name: 'platform',
                    type: 11,
                    value: 'gfplay'
                  }
                ]
              ]
            },
            {
              id: 2,
              name: 'get_rule',
              canshu: [
                [
                  {
                    name: 'randy_key',
                    type: 11,
                    value: ''
                  },
                  {
                    name: 'c_version',
                    type: 11,
                    value: '3.0.2'
                  }
                ],
                [
                  {
                    name: 'mod',
                    type: 11,
                    value: 'Business'
                  },
                  {
                    name: 'act',
                    type: 12,
                    value: 'get_rule'
                  },
                  {
                    name: 'platform',
                    type: 11,
                    value: 'gfplay'
                  }
                ]
              ]
            }
          ]
        },
        {
          id: 2,
          project: '保定协议测试',
          common: [
            { id: 1, name: '房间号', value: 11111, type: 1 },
            { id: 3, name: 'uid', value: 11111, type: 1 },
            { id: 2, name: '版本号', value: '3.0.2', type: 1 }
          ],
          agreement: [
            {
              id: 1,
              name: 'get_conf',
              canshu: [
                [
                  {
                    name: 'randy_key',
                    type: 11,
                    value: ''
                  },
                  {
                    name: 'c_version',
                    type: 11,
                    value: '3.0.2'
                  }
                ],
                [
                  {
                    name: 'mod',
                    type: 11,
                    value: 'Business'
                  },
                  {
                    name: 'act',
                    type: 12,
                    value: 'get_conf'
                  },
                  {
                    name: 'platform',
                    type: 11,
                    value: 'gfplay'
                  }
                ]
              ]
            }
          ]
        },
        {
          id: 3,
          project: '天津协议测试',
          common: [
            { id: 1, name: '房间号', value: 11111, type: 1 },
            { id: 3, name: 'uid', value: 11111, type: 1 },
            { id: 2, name: '版本号', value: '3.0.2', type: 1 }
          ],
          agreement: [
            {
              id: 1,
              name: 'get_conf',
              canshu: [
                [
                  {
                    name: 'randy_key',
                    type: 11,
                    value: ''
                  },
                  {
                    name: 'c_version',
                    type: 11,
                    value: '3.0.2'
                  }
                ],
                [
                  {
                    name: 'mod',
                    type: 11,
                    value: 'Business'
                  },
                  {
                    name: 'act',
                    type: 12,
                    value: 'get_conf'
                  },
                  {
                    name: 'platform',
                    type: 11,
                    value: 'gfplay'
                  }
                ]
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    add (argument) {
      let id = this.json.length
      this.json.push({
        id: id,
        project: argument.templateName,
        common: [
          { id: 1, name: '房间号', value: 11111, type: 1 },
          { id: 3, name: 'uid', value: 11111, type: 1 },
          { id: 2, name: '版本号', value: '3.0.2', type: 1 }
        ]
      })
    },
    getConf () {
      let canshu = this.json[0].agreement[0].canshu
      console.log('12123', canshu)
      let rootParams = {}
      let parameter = {}
      for (let i = 0; i < canshu[0].length; i++) {
        rootParams[canshu[0][i].name] = canshu[0][i].value
      }
      for (let i = 0; i < canshu[1].length; i++) {
        parameter[canshu[1][i].name] = canshu[1][i].value
      }
      let params = setParams(rootParams, parameter)
      http.get(this.path, params)
      .then((res) => {
        alert(JSON.stringify(res))
      })
      .catch((error) => {
        alert('error:' + JSON.stringify(error))
      })
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      if (localStorage.json) {
        this.json = JSON.parse(localStorage.json)
      }
    })
  }
}
</script>
