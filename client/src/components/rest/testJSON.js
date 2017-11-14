export default [{
  name: '协议模板',
  url: { value: 'http://aqaaa.www.ccc' },
  vars: [
    { name: '版本号', value: '3.0.2', type: 1 },
    { name: 'uid', value: [0, 'data', 'rid'], type: 2 }
  ],
  quests: [{
    name: 'get_conf',
    parameter: [[
      // 一级参数
      { name: 'randy_key', type: 1, value: '' },
      { name: 'c_version', type: 12, value: 0 },
      { name: 'parameter', type: 13, value: 1 }
    ], [
      // 多级参数
      { name: 'mod', type: 1, value: 'Business' },
      { name: 'act', type: 1, value: 'get_conf' },
      { name: 'platform', type: 1, value: 'gfplay' },
      { name: 'mod', type: 1, value: 'Business' },
      { name: 'act', type: 1, value: 'get_conf' },
      { name: 'platform', type: 1, value: 'gfplay' },
      { name: 'mod', type: 1, value: 'Business' },
      { name: 'act', type: 1, value: 'get_conf' },
      { name: 'platform', type: 1, value: 'gfplay' }
    ]]
  }, {
    name: 'get_rule',
    parameter: [[
      // 一级参数
      { name: 'randy_key', type: 1, value: 's' },
      { name: 'c_version', type: 12, value: 1 },
      { name: 'parameter', type: 13, value: 1 }
    ]]
  }, {
    name: 'get_rule1',
    parameter: [[
      // 一级参数
      { name: 'randy_key', type: 1, value: 's' },
      { name: 'c_version', type: 12, value: 1 },
      { name: 'parameter', type: 13, value: 1 }
    ]]
  }, {
    name: 'get_rule2',
    parameter: [[
      // 一级参数
      { name: 'randy_key', type: 1, value: 's' },
      { name: 'c_version', type: 12, value: 1 },
      { name: 'parameter', type: 13, value: 1 }
    ]]
  }, {
    name: 'get_rule3',
    parameter: [[
      // 一级参数
      { name: 'randy_key', type: 1, value: 's' },
      { name: 'c_version', type: 12, value: 1 },
      { name: 'parameter', type: 13, value: 1 }
    ]]
  }, {
    name: 'get_rule4',
    parameter: [[
      // 一级参数
      { name: 'randy_key', type: 1, value: 's' },
      { name: 'c_version', type: 12, value: 1 },
      { name: 'parameter', type: 13, value: 1 }
    ]]
  }, {
    name: 'get_rule4',
    parameter: [[
      // 一级参数
      { name: 'randy_key', type: 1, value: 's' },
      { name: 'c_version', type: 12, value: 1 },
      { name: 'parameter', type: 13, value: 1 }
    ]]
  }]
}, {
  name: '协议测试1',
  url: { value: 'http://www.baidu.com' },
  vars: [
    { name: '版本', value: '3.0.1', type: 1 }
  ],
  quests: [{
    name: 'get_conf',
    parameter: [[
      // 一级参数
      { name: 'randy_key', type: 1, value: '' },
      { name: 'c_version', type: 12, value: 0 },
      { name: 'parameter', type: 13, value: 1 }
    ], [
      // 多级参数
      { name: 'mod', type: 1, value: 'Business' },
      { name: 'act', type: 1, value: 'get_conf' },
      { name: 'platform', type: 1, value: 'gfplay' }
    ]]
  }]
}]
