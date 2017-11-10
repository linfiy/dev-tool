export default [{
  name: '协议模板',
  url: 'http://aqaaa.www.ccc',
  vars: [
    { name: '版本号', value: '3.0.2', type: 1 },
    { name: 'uid', value: [0, 'data', 'rid'], type: 2 }
  ],
  quests: [{
    name: 'get_conf',
    parameter: [[
      // 一级参数
      { name: 'randy_key', type: 11, value: '' },
      { name: 'c_version', type: 12, value: 0 },
      { name: 'parameter', type: 13, value: 1 }
    ], [
      // 多级参数
      { name: 'mod', type: 11, value: 'Business' },
      { name: 'act', type: 11, value: 'get_conf' },
      { name: 'platform', type: 11, value: 'gfplay' },
      { name: 'parameter', type: 13, value: 2 }
    ], [
      // 多级参数
      { name: 'mod', type: 11, value: 'Business' },
      { name: 'act', type: 11, value: 'get_conf' },
      { name: 'platform', type: 11, value: 'gfplay' }
    ]]
  }, {
    name: 'get_rule',
    parameter: [[
      // 一级参数
      { name: 'randy_key', type: 11, value: 's' },
      { name: 'c_version', type: 12, value: 1 },
      { name: 'parameter', type: 13, value: 1 }
    ], [
      // 多级参数
      { name: 'mod', type: 11, value: 'Business' },
      { name: 'act', type: 11, value: 'get_rule' },
      { name: 'platform', type: 11, value: 'gfplay' }
    ]]
  }]
}, {
  name: '沧州协议测试',
  url: 'http://aqaaa.www.ccc',
  vars: [
    { name: '版本号', value: '3.0.2', type: 1 },
    { name: 'uid', value: [0, 'data', 'rid'], type: 2 }
  ],
  quests: [{
    name: 'get_conf',
    parameter: [[
      // 一级参数
      { name: 'randy_key', type: 11, value: '' },
      { name: 'c_version', type: 12, value: 0 },
      { name: 'parameter', type: 13, value: 1 }
    ], [
      // 多级参数
      { name: 'mod', type: 11, value: 'Business' },
      { name: 'act', type: 11, value: 'get_conf' },
      { name: 'platform', type: 11, value: 'gfplay' },
      { name: 'parameter', type: 13, value: 2 }
    ], [
      // 多级参数
      { name: 'mod', type: 11, value: 'Business' },
      { name: 'act', type: 11, value: 'get_conf' },
      { name: 'platform', type: 11, value: 'gfplay' }
    ]]
  }]
}]
