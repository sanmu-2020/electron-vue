import { Menu, Tray } from 'electron'
import path from 'path'
const setMenuConfig = (win) => {
  const template = [
    // { role: 'editMenu' }
    {
      label:'文件',
      submenu:[{
        label:'新建文件',
        //监听事件
        click:function(){
          // 主进程处理渲染进程广播数据，并反馈给渲染进程
          win.webContents.send('new-file',{newFile:'isnew'})
          console.log("ctrl+n")
        },
        //绑定快捷键
        accelerator :'ctrl+n'
      },
      {
        label:'新建窗口'
      }]
    },
  ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  setTrayMenu(win)
}
function setTrayMenu (win) {
  let trayMenuTemplate = [{//系统托盘图标目录
    label:'退出',
    click: function () {
      // console.log(win)
      win.hide()
    }
  }]
  const icon = path.join(__dirname, '../src/assets/logo.png')
  const appTray = new Tray(icon);
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)
  // 设置托盘悬浮提示
  appTray.setToolTip('云音乐')
  // 设置托盘菜单
  appTray.setContextMenu(contextMenu)
  appTray.on('click', () => {
    // 显示主程序
    if (win.isMinimized()) {
      win.restore()
    }else {
      win.minimize()
    }
    // 关闭托盘显示
    // appTray.destroy();
});
}
export default setMenuConfig