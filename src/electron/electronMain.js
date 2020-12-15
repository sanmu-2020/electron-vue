import { ipcMain } from 'electron'
const inintMain = () => {
  ipcMain.on('isReady',(e, params) => {
    console.log('主线程', params)
    e.sender.send('isReadyReply', 'isReadyReply');
  })
}

export default inintMain