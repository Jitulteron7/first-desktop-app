const {app,BrowserWindow}=require("electron");
const path = require("path");
const url=require("url");
let win;

const createWindow=()=>{
    win=new BrowserWindow(
        {
            height:800,
            width:1200,
            frame:false,
            title:"QOD",
            icon:__dirname+"./QOD.png"
            
        });
        /*win.webContents.openDevTools();*/
        win.loadURL(url.format({
            pathname:path.join(__dirname,"index.html"),
            protocol:"file",
            slashes:true,
            
        }));
    win.on("closed",()=>{
        win=null;
    })
}

app.on("ready",createWindow);

app.on("window-all-started",()=>{
    if(process.platform!=="darwin"){
        app.quit();
    }
});

app.on("activate",()=>{
    if(dinWin==null){
      createWindow();
    }
});



// in electron
// Windows (also known as win32, for x86, x86_64, and arm64 architectures)
// macOS (also known as darwin) / Mac App Store (also known as mas)* (for x86_64 and arm64 architectures)
// Linux (for x86, x86_64, armv7l, arm64, and mips64el architectures)

// other name
// Windows (32/64 bit)
// macOS (formerly known as OS X)
// Linux (x86/x86_64)