// setting up namespace for 
var Dotes = Dotes || {};

Dotes.app = (function() {

    var app = {};
    var DEBUG = 1;

    app.H = {
        art:  { name: 'art',  text: 'Aba'  },
        alch: { name: 'alch', text: 'Alch' },
        aa:   { name: 'aa',   text: 'Aa'   },
        am:   { name: 'am',   text: 'Am'   }
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

    /* row of counters, create a div with <a> */
    app.createRow = function (items) {
        var frag      = document.createDocumentFragment();
        var div       = document.createElement("div");
        div.className = 'wrap_row5';

        items.forEach(function(item) {
            var a       = document.createElement("a");
            var text    = document.createTextNode(item.text);
            a.appendChild(text);
            a.className = 'slot';
            a.setAttribute('href', '#');
            div.appendChild(a);
        });

        frag.appendChild(div);

        return frag;
    };

    /* show dialog when '+' is clicked */
    app.showDialog = function (pickerNode) {
        var frag    = document.createDocumentFragment();
        var div     = document.createElement("div");
        var h4      = document.createElement("h4");
        var text    = document.createTextNode("Dialog Test");

        div.appendChild(text);
        h4.appendChild(text);
        div.appendChild(h4);
        div.className = 'dialog';

        var items = app.createDialogItems(pickerNode);

        for (var i=0, len=items.length; i<len; i++) {
            div.appendChild(items[i]);
        }

        frag.appendChild(div);

        pickerNode.parentNode.appendChild(frag);
    };

    /* create the item menu inside dialog */
    app.createDialogItems = function (pickerNode) {
        var items   = [];
        var names   = [
            app.H.art,
            app.H.alch,
            app.H.am,
            app.H.aa
        ];
        var rowParent = pickerNode.parentNode;
        app.debug(rowParent);
        names.forEach(function(name) {
            var a       = document.createElement("a");
            var text    = document.createTextNode(name.text);
            a.className = name.name;
            a.appendChild(text);
            a.setAttribute('href', '#');
            a.addEventListener('click', function() { 
                pickerNode.className = "slot " + this.className;
                // load profile counters
                // load item counters

                // close the parentDialog
                app.removeDialogs();

                // remove previously loaded counter rows
                rowParent.removeChild(rowParent.lastChild);
                /*while(rowParent.childNodes.length > 1) {
                    app.debug('removing childNode...');
                    rowParent.removeChild(rowParent.lastChild);        
                }*/

                // load dbuff counters
                rowParent.appendChild(app.createRow([{text: "Aa"}]));
            });
            items.push(a);
        });

        return items;
    };


    /* before we show a dialog, remove all those displayed */
    app.removeDialogs = function() {
        var dialogs = document.getElementsByClassName('dialog');
        for (var i = 0, len = dialogs.length; i < len; i++) {
            dialogs[i].parentNode.removeChild(dialogs[i]);
        }
    };

    /* main */
    app.onDOMContentLoaded = function() {
        var pickers = document.getElementsByClassName('picker');
        var dialog  = document.getElementById('dialog');

        for (var i=0, len = pickers.length; i<len; i++) {
            pickers[i].addEventListener("click", function() {
                app.removeDialogs();
                app.showDialog(this);
            }, false);
        }
    };

    document.addEventListener('DOMContentLoaded', app.onDOMContentLoaded, false);
    
    return app;

})();
