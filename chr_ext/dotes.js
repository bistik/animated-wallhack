// setting up namespace for 
var Dotes = Dotes || {};

Dotes.app = (function() {

    var app = {};
    var DEBUG = 1;

    app.H = {
        art:  { name: 'art',  text: 'Aba' },
        alch: { name: 'alch', text: 'Alch' },
        aa:   { name: 'aa',   text: 'Aa' },
        am:   { name: 'am',   text: 'Am' },
        ax:   { name: 'ax',   text: 'Ax' },
        bs:   { name: 'bs',   text: 'Bl' },
        bm:   { name: 'bm',   text: 'Be' },
        br:   { name: 'br',   text: 'Br' },
        bw:   { name: 'bw',   text: 'Bw' },
        bb:   { name: 'bb',   text: 'Bb' },
        bh:   { name: 'bh',   text: 'Bo' },
        ba:   { name: 'ba',   text: 'Ba' },
        bt:   { name: 'bt',   text: 'Ba' },
        cl:   { name: 'cl',   text: 'Cl' },
    };

    app.I = {
        tan: { name: 'tan', text: 'Tan' },
        cla: { name: 'cla', text: 'Cla' },
    };

    app.draft = {};
    app.draft[app.H.art.name]  = { dbuff: [app.H.alch], prof: [app.H.alch], items: [app.H.tan] };
    app.draft[app.H.alch.name] = { dbuff: [app.H.art, app.H.aa],  prof: [app.H.art],  items: [app.H.tan] };
    app.draft[app.H.aa.name]   = { dbuff: [app.H.bh], prof: [app.H.alch], items: [app.H.tan] };
    app.draft[app.H.am.name]   = { dbuff: [app.H.alch, app.H.art], prof: [app.H.alch], items: [app.H.tan] };
    app.draft[app.H.ax.name]   = { dbuff: [app.H.bs, app.H.aa], prof: [app.H.alch], items: [app.H.tan] };
    app.draft[app.H.bs.name]   = { dbuff: [app.H.bb], prof: [app.H.alch], items: [app.H.tan] };
    app.draft[app.H.bm.name]   = { dbuff: [app.H.bs], prof: [app.H.bs], items: [app.H.tan] };
    app.draft[app.H.br.name]   = { dbuff: [app.H.bs], prof: [app.H.bm], items: [app.H.tan] };
    app.draft[app.H.bw.name]   = { dbuff: [app.H.am], prof: [app.H.bm], items: [app.H.tan] };
    app.draft[app.H.bb.name]   = { dbuff: [app.H.aa], prof: [app.H.br], items: [app.H.tan] };
    app.draft[app.H.bh.name]   = { dbuff: [app.H.bs], prof: [app.H.alch], items: [app.H.tan] };
    app.draft[app.H.ba.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.tan] };
    app.draft[app.H.bt.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.tan] };
    app.draft[app.H.cl.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.tan] };

    app.debug = function(message) {
        if (DEBUG) console.log(message);
    };

    /* row for slot picker */
    app.createPicker = function() {
        var frag      = document.createDocumentFragment();
        var div       = document.createElement("div");
        div.className = 'wrap_row5';

        var a       = document.createElement("a");
        var text    = document.createTextNode('Choose');
        a.appendChild(text);
        a.className = 'slot picker';
        a.setAttribute('href', '#');

        a.addEventListener("click", function() {
            app.removeDialogs();
            app.showDialog(this);
        }, false);

        div.appendChild(a);
        frag.appendChild(div);

        return frag;
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
            a.className = 'slot ' + item.name;
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
            app.H.aa,
            app.H.ax,
            app.H.bs,
            app.H.bm,
            app.H.br,
            app.H.bb,
            app.H.bw,
            app.H.bh,
            app.H.ba,
            app.H.bt,
            app.H.cl
        ];
        /* rowParent --> <div class="row">
                            <div class="wrap_row">
                                <a>pickerNode</a>
        */
        var rowParent = pickerNode.parentNode.parentNode;
        names.forEach(function(name) {
            var a       = document.createElement("a");
            var text    = document.createTextNode(name.text);
            a.className = name.name;
            a.appendChild(text);
            a.setAttribute('href', '#');
            a.addEventListener('click', function() { 
                pickerNode.className = "slot " + this.className;
                pickerNode.removeChild(pickerNode.firstChild);
                pickerNode.appendChild(text);
                // load profile counters
                // load item counters

                // close the pick Dialog
                app.removeDialogs();

                // remove previously loaded counter rows
                if(rowParent.getElementsByClassName("wrap_row5").length > 1) {
                    var deleteRow = rowParent.getElementsByClassName("wrap_row5")[1];
                    deleteRow.parentNode.removeChild(deleteRow);
                }

                // load counters
                rowParent.appendChild(app.createRow(app.draft[name.name].dbuff));
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
