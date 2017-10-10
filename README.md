linfiy 开发工具

## 现有功能

- 麻将组牌
- 扑克组牌
- 录像回放：显示/修改数据
- JSON格式化

- `*`压缩字体文件：暂只支持 ttf 格式

**Note**:加 `*` 的功能需要服务器环境，可按下方方法启动 live-server。如果不需要启动服务器环境，可直接用浏览器打开 `public/tool/index.html` 使用即可

---

## 运行 live-server

### Windows

安装

1. 前往 <https://nodejs.org/> 下载最新的 nodejs
2. 运行本目录 windowsRun.bat
3. 弹出的 powershell 中分别输入(粘贴)下面三行

```shell
npm config set registry https://registry.npm.taobao.org
npm i
npm start
```

运行

1. 运行 windowsRun.bat
2. 弹出的 powershell 中输入 `npm start`

### Mac

终端的配置

1. 打开: 系统偏好设置 -> 键盘 -> 快捷键 -> 服务
2. 勾选: 新建位于文件夹位置的终端窗口

安装

1. 前往 <https://nodejs.org/> 下载最新的 nodejs
2. 右键点击 clone 下来的项目文件夹，选择 `服务` -> `新建位于文件夹位置的终端窗口`
3. 弹出的终端中分别输入(粘贴)
  
```shell
cd 目录名
npm config set registry https://registry.npm.taobao.org
npm i
npm start
```

运行

1. 右键点击 clone 下来的项目文件夹，选择 `服务` -> `新建位于文件夹位置的终端窗口`
2. 弹出的终端窗口中输入 `cd 目录名`
3. `npm start`


### Configure

live-server 的配置在 server/config/live-server.config.js
配置参考链接 [live-server github](https://github.com/tapio/live-server)
