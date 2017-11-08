export default [{
  id: 1,
  project: '沧州协议测试',
  url: 'http://aqaaa.www.ccc',
  common: [
    { id: 1, name: '版本号', value: '3.0.2', type: 1 },
    { id: 2, name: 'uid', value: ['data', 'rid'], type: 2 }
  ],
  protocols: [{
    id: 1,
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
    id: 2,
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
  id: 2,
  project: '协议测试模板',
  url: 'http://aqaaa.www.ccc',
  common: [
    { id: 1, name: '版本号', value: '3.0.2', type: 1 },
    { id: 2, name: 'uid', value: ['data', 'rid'], type: 2 }
  ],
  protocols: [{
    id: 1,
    name: 'get_3',
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
    id: 2,
    name: 'get_5',
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
}]
