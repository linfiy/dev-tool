export function getTile (tileName) {
  var tileArr = []
  var re = tileName

  while (re !== 0) {
    tileArr.push(re % 100)
    re = Math.floor(re / 100)
  }

  return tileArr
}

export function getHun (fanhun, offset) {
  // if (offset != null)
  var number = fanhun % 16
  if (number === 9) {
    return 1 + Math.floor(fanhun / 16) * 16
  } else if (fanhun === 52) {
    return 49
  } else if (fanhun === 55) {
    return 53
  } else {
    return fanhun + 1
  }
}

export function getTileImageString (mutiTileName) {
  var result = ''
  var store = []
  var remain = mutiTileName

  while (remain !== 0) {
    store.push(remain % 100)
    remain = Math.floor(remain / 100)
  }

  for (var len = store.length, i = 0; i < len; i++) {
    result += '<span class="tile"><img src="static/images/mahjong/' + store.pop() + '.png"></span>'
  }

  return result
}

export function getMutiChairs (mutiChair) {
  var temp = []
  for (var i = 0; i < 4; i++) {
    var pow2 = Math.pow(2, i)
    if ((mutiChair & pow2) === pow2) temp.push(i)
  }
  return temp
}

export function getChiBrand (brand, type) {
  var result1 = ''
  var result2 = ''
  if (type === 1) {
    result1 = '<span class="tile"><img src="static/images/mahjong/' + (brand + 1) + '.png"></span>'
    result2 = '<span class="tile"><img src="static/images/mahjong/' + (brand + 2) + '.png"></span>'
  } else if (type === 2) {
    result1 = '<span class="tile"><img src="static/images/mahjong/' + (brand - 1) + '.png"></span>'
    result2 = '<span class="tile"><img src="static/images/mahjong/' + (brand + 1) + '.png"></span>'
  } else if (type === 3) {
    result1 = '<span class="tile"><img src="static/images/mahjong/' + (brand - 2) + '.png"></span>'
    result2 = '<span class="tile"><img src="static/images/mahjong/' + (brand - 1) + '.png"></span>'
  }
  return result1 + result2
}

export function changeThree (action) {
  var str = ''
  for (var i = 1; i < action.length; i++) {
    if (action[i].toString().length === 3) {
      action[i] = '0' + action[i]
    }
    for (var j = 1; j < action[i].toString().length; j++) {
      str += '<span class="tile"><img src="static/images/mahjong/' + (parseInt(action[i].toString()[0]) * 16 + parseInt(action[i].toString()[j])) + '.png"></span>'
    }
  }
  return str
}
