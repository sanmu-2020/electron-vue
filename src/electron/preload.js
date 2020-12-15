// https://www.npmjs.com/package/custom-electron-titlebar
const { Titlebar, Color, RGBA} = require('custom-electron-titlebar')
import path from 'path'
export default function setTitleBarStyle () {
  if (MyTitleBar) {
    MyTitleBar.dispose()
  }
  let MyTitleBar = new Titlebar({
    backgroundColor: Color.fromHex('#03a9f4'),
    closeable: true,
    hideWhenClickingClose: true,
    icon: path.join(__dirname, '../../../../../../public/favicon.ico')
  })
  console.log(path.join(__dirname, '../../../../../public/favicon.ico'))
  // 3. Update Titlebar text
  MyTitleBar.updateIcon('./favicon.ico')
  MyTitleBar.updateItemBGColor(new Color(new RGBA(0, 0, 0, .7)))
  MyTitleBar.updateTitle('云音乐')
  MyTitleBar.setHorizontalAlignment('left')
  MyTitleBar.updateMenuPosition('bottom')
}