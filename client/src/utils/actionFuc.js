import { getMutiChairs, getTileImageString, getHun, getChiBrand, changeThree } from './actionSumFun.js'
import * as types from './actionTypes'

var actionDesc = {
  [types.CHI]: action => `吃: 玩家[${getMutiChairs(action[1])}] 用 ${getChiBrand(action[2], action[4])} 吃了 玩家[${getMutiChairs(action[3])}] 打出的${getTileImageString(action[2])}`,
  [types.PENG]: action => `碰: 玩家[${getMutiChairs(action[1])}] 碰了玩家[${getMutiChairs(action[3])}] 打出的${getTileImageString(action[2])}`,
  [types.ZHIGANG]: action => `直杠: 玩家[${getMutiChairs(action[1])}] 杠了 玩家[${getMutiChairs(action[3])}] 打出的${getTileImageString(action[2])}`,
  [types.ANGANG]: action => `暗杠: 玩家[${getMutiChairs(action[1])}] 暗杠了${getTileImageString(action[2])}`,
  [types.ZHUANGANG]: action => `转杠: 玩家[${getMutiChairs(action[1])}] 杠了自己摸的${getTileImageString(action[2])}`,
  [types.HU]: action => {
    var chairs = getMutiChairs(action[1])
    return '点炮胡：玩家[' + chairs + '] 胡了，玩家[' + getMutiChairs(action[3]) + '] ' + getTileImageString(action[2]) + ' 点炮' + (chairs.length > 1 ? ', 一炮多响！' : '')
  },
  [types.ZIMO]: action => `自摸: 玩家[${getMutiChairs(action[1])}] 自摸${getTileImageString(action[2])} 胡了！`,
  [types.DISCARD]: action => `出牌: 玩家[${getMutiChairs(action[1])}] 打出${getTileImageString(action[2])}`,
  [types.DRAW]: action => `摸牌: 玩家[${getMutiChairs(action[1])}] 摸起${getTileImageString(action[2])}`,
  [types.DEALER]: action => `定庄: 玩家 [${getMutiChairs(action[1])}] 成为庄家，🎲🎲 [${Math.floor(action[4] / 10)}, ${action[4] % 10}]`,
  [types.FOLLOWDEALER]: action => '跟庄: 跟庄成功',
  [types.HUAN3]: action => '换三张:' + changeThree(action),
  [types.DINGQUE]: action => '// 没实现 定缺',
  [types.PAOZI]: action => {
    var result = '下炮子/下跑儿: '
    for (var i = 1; i < 5; i++) {
      if (action[i] !== 0) result += '玩家[' + i + '] 下炮:' + action[i] + ', '
    }
    return result
  },
  [types.FANHUN]: action => `翻混儿: 玩家[${getMutiChairs(action[1])}] 翻出${getTileImageString(action[2])}，确定混儿牌为${getTileImageString(getHun(action[2]))}`,
  [types.DRAW4]: action => {
    var result = '发牌/抓4: '
    for (var i = 1; i < 5; i++) {
      if (action[i] !== 0) result += `玩家[${(i - 1)}] ${getTileImageString(action[i])},`
    }
    return result
  },
  [types.MINGLOU]: action => `明搂: 玩家[${getMutiChairs(action[1])}] 明搂`,
  [types.XIAOSA]: action => `潇洒: 玩家[${getMutiChairs(action[1])}] 潇洒`,
  [types.ZHUANIAO]: action => {
    var niaoNum = 0
    var mutiNames = 0
    for (var i = 2; i < 5; i++) {
      mutiNames = mutiNames * 10000 + action[i]
    }
    var remain = mutiNames
    while (remain > 0) {
      remain % 100 && niaoNum++
      remain = Math.floor(remain / 100)
    }

    return `抓${niaoNum}鸟: ${getTileImageString(mutiNames)}`
  },
  [types.ZA]: action => `砸: 玩家[${getMutiChairs(action[1])}] 碰(砸)了玩家[${getMutiChairs(action[3])}] 打出的${getTileImageString(action[2])}`,
  [types.ZAGANG]: action => `砸杠: 玩家[${getMutiChairs(action[1])}] （砸）杠了 玩家[${getMutiChairs(action[3])}] 打出的${getTileImageString(action[2])}`,
  [types.ZAANGANG]: action => `砸暗杠: 玩家[${getMutiChairs(action[1])}] （砸）暗杠了${getTileImageString(action[2])}`,
  [types.BIAN]: action => `边: 玩家[${getMutiChairs(action[1])}] 用 ${getChiBrand(action[2], action[4])} 吃(边)了 玩家[${getMutiChairs(action[3])}] 打出的${getTileImageString(action[2])}`,
  [types.ZUAN]: action => `钻: 玩家[${getMutiChairs(action[1])}] 用 ${getChiBrand(action[2], action[4])} 吃(钻)了 玩家[${getMutiChairs(action[3])}] 打出的${getTileImageString(action[2])}`,
  [types.KOUCARD]: action => {
    var result = '扣4: '
    for (var i = 1; i < 5; i++) {
      if (action[i] !== 0) result += `玩家[${(i - 1)}] ${getTileImageString(action[i])},`
    }
    return result
  },
  [types.YIKOUXIANG]: action => `一口香: 玩家[${getMutiChairs(action[1])}] 一口香`,
  [types.QIANGGANGHU]: action => `抢杠胡: 玩家[${getMutiChairs(action[1])}] 抢了玩家[${getMutiChairs(action[3])}] 打出的${getTileImageString(action[2])}胡了`,
  [types.TUIDABING]: action => {
    var result = '推大饼: '
    for (var i = 1; i < 5; i++) {
      if (action[i] !== 0) result += `玩家[${(i - 1)}] ${getTileImageString(action[i])},`
    }
    return result
  },
  [types.GUOPAI]: action => `过牌: 玩家[${getMutiChairs(action[1])}] 过牌`
}

export default actionDesc
