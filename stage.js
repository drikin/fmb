(function() {
  var $ = require('jquery');
  var gui = require('nw.gui');
  gui.App.createShortcut(process.env.APPDATA + "\\Microsoft\\Windows\\Start Menu\\Programs\\node-webkit.lnk");

  // Get the current window
  var win = gui.Window.get();
  win.on('new-win-policy', function(frame, url, policy) {
    policy.ignore();
    gui.Shell.openExternal(url);
    //policy.forceNewWindow();
  });

  // FIXME: very hacky way to forcefully update font-family
  win.on('document-end', function() {
    var i = frames[0];
    var d = i.document;

    i.onload = function() {
        console.log('loaded');
        $(d.head).contents().append("<style>body {font-family:'Noto Sans CJK JP', helvetica, arial,'lucida grande', 'Hiragino Kaku Gothic ProN', '游ゴシック', YuGothic, Meiryo, sans-serif !important;}</style>");

        // ready to show
        var root = document.getElementById("main");
        root.setAttribute("class", "visible");
    }
  });

  // Need to set the menu using shortcuts on osx
  // https://github.com/nwjs/nw.js/wiki/Menu#menucreatemacbuiltinappname
  var nativeMenuBar = new gui.Menu({type: "menubar"});
  if (nativeMenuBar && nativeMenuBar.createMacBuiltin) {
    nativeMenuBar.createMacBuiltin(gui.App.manifest.name);
    win.menu = nativeMenuBar;
  }
}).apply(this);
