  const electron = require('electron')
  // Module to control application life.
  const app = electron.app
  // Module to create native browser window.
  const BrowserWindow = electron.BrowserWindow

  const postKind = "Bot_Chat"


// setting server
// const express = require('express');
// const bodyParser = require('body-parser');
// const os = require('os');
// const expressApp = express();

// expressApp.use(bodyParser.urlencoded({extended : true}));
// expressApp.use(bodyParser.json());

// const PORT = 8080;

// expressApp.post('/api/client-attack', function(req, res){
//   print("post");
//   const notifi_kind = req.body['kind'];
//   postKind = notifi_kind
//   console.log(notifi_kind);
//   res.end("200 OK")
// });

// expressApp.listen(PORT, function(req, res){

// });

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let mainWindow

  function createWindow () {
    var Screen = require('screen');
    var {width, height} = electron.screen.getPrimaryDisplay().workAreaSize

    if (postKind === "Bot_Chat") {

      // Create the browser window.
      mainWindow = new BrowserWindow({
        left: 0,
        top: 0,
        width: width,
        height: height,
        frame: true,
        show: true,
        resizable: false,
        'always-on-top': true,
        transparent: false
      })
      mainWindow.loadURL(`file://${__dirname}/chat-bot-html/index.html`)
    }else {

      // Create the browser window.
      mainWindow = new BrowserWindow({
        left: 0,
        top: 0,
        width: width,
        height: height,
        frame: false,
        show: true,
        resizable: false,
        'always-on-top': true,
        transparent: true
      })
      mainWindow.loadURL(`file://${__dirname}/index.html`)
    }

    mainWindow.setIgnoreMouseEvents(false);

        // Setting creating Windows position
        mainWindow.setPosition(0,0);

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    })
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow)

  // Quit when all windows are closed.
  app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow()
    }
  })

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.
