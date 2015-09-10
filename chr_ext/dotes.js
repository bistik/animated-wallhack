// setting up namespace for 
var Dotes = Dotes || {};

Dotes.app = (function() {

    var app = {};
    var DEBUG = 1;

    app.H = {
        art:  { name: 'art',  text: 'Aba'  },
        alch: { name: 'alch', text: 'Alch' }
    };
    app.I = {
        tan: { name: 'tan', text: 'Tan' },
        cla: { name: 'cla', text: 'Cla' },
    };

    app.draft = {
        h : [
            { h: app.H.art,  dbuff: [app.H.alch], prof: [app.H.alch], items: [app.H.tan] },    
            { h: app.H.alch, dbuff: [app.H.art],  prof: [app.H.art],  items: [app.H.tan] },    
        ],
    };

    app.debug = function(message) {
        if (DEBUG) console.log(message);
    };

    /* show dialog when '+' is clicked */
    app.showDialog = function (parentNode) {
        var frag    = document.createDocumentFragment();
        var div     = document.createElement("div");
        var h4      = document.createElement("h4");
        var text    = document.createTextNode("Dialog Test");

        div.appendChild(text);
        h4.appendChild(text);
        div.appendChild(h4);
        div.className = 'dialog';

        var items = app.createDialogItems();

        for (var i=0, len=items.length; i<len; i++) {
            div.appendChild(items[i]);
        }

        frag.appendChild(div);

        parentNode.appendChild(frag);
    };

    /* create the item menu inside dialog */
    app.createDialogItems = function () {
        var items   = [];
        var names   = [
            app.H.art,
            app.H.alch
        ];
        names.forEach(function(name) {
            var a       = document.createElement("a");
            var text    = document.createTextNode(name.text);
            a.className = name.name;
            a.appendChild(text);
            items.push(a);
        });

        return items;
    };

    /* before we show a dialog, remove all those displayed */
    app.removeDialogs = function() {
        var dialogs = document.getElementsByClassName('dialog');
        for (var i = 0, len = dialogs.length; i < len; i++) {
            app.debug('removing dialog...');
            dialogs[i].parentNode.removeChild(dialogs[i]);
        }
    };

    app.onDOMContentLoaded = function() {
        var pickers = document.getElementsByClassName('picker');
        var dialog  = document.getElementById('dialog');

        app.debug(pickers.length);

        for (var i=0, len = pickers.length; i<len; i++) {
            pickers[i].addEventListener("click", function() {
                app.removeDialogs();
                app.showDialog(this.parentNode);
            }, false);
        }
    };

    document.addEventListener('DOMContentLoaded', app.onDOMContentLoaded, false);
    
    return app;

})();
