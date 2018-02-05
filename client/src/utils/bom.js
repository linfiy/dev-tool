export function copyToClipBoard (str) {
  // bom
  return new Promise((resolve, reject) => {
    if (!document.queryCommandSupported || !document.queryCommandSupported('copy')) {
      reject('不支持复制功能')
    } else {
      const input = document.createElement('p')
      input.innerHTML = str
      input.style['-webkit-user-select'] = 'text'
      input.style.opacity = 0
      input.style.position = 'fixed'
      input.style.zIndex = -1
      document.body.appendChild(input)
      const range = document.createRange()
      range.selectNode(input)
      window.getSelection().empty()
      window.getSelection().addRange(range)
      document.execCommand('copy')
      document.body.removeChild(input)
      resolve()
    }
  })
}
