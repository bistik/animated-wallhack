// setting up namespace for
var Dotes = Dotes || {};

Dotes.app = (function() {

    var app = {};
    var DEBUG = 1;

    app.H = {
        art:  { name: 'art',  text: 'Aba' },
        alch: { name: 'alch', text: 'Alc' },
        aa:   { name: 'aa',   text: 'Anc' },
        am:   { name: 'am',   text: 'Ant' },
        ax:   { name: 'ax',   text: 'Axe' },
        bs:   { name: 'bs',   text: 'Blo' },
        bm:   { name: 'bm',   text: 'Bea' },
        br:   { name: 'br',   text: 'Bro' },
        bw:   { name: 'bw',   text: 'Bre' },
        bb:   { name: 'bb',   text: 'Bri' },
        bh:   { name: 'bh',   text: 'Bou' },
        ba:   { name: 'ba',   text: 'Ban' },
        bt:   { name: 'bt',   text: 'Bat' },
        cw:   { name: 'cw',   text: 'Cen' },
        ck:   { name: 'ck',   text: 'Cha' },
        ch:   { name: 'ch',   text: 'Che' },
        cz:   { name: 'cz',   text: 'Cli' },
        cl:   { name: 'cl',   text: 'Clo' },
        cm:   { name: 'cm',   text: 'Cry' },
        ds:   { name: 'ds',   text: 'Dar' },
        dz:   { name: 'dz',   text: 'Daz' },
        dp:   { name: 'dp',   text: 'Dea' },
        di:   { name: 'di',   text: 'Dis' },
        dm:   { name: 'dm',   text: 'Doo' },
        dk:   { name: 'dk',   text: 'Dra' },
        dr:   { name: 'dr',   text: 'Dro' },
        ea:   { name: 'ea',   text: 'ES' },
        es:   { name: 'es',   text: 'ES' },
        et:   { name: 'et',   text: 'ET' },
        em:   { name: 'em',   text: 'Emb' },
        ec:   { name: 'ec',   text: 'Enc' },
        eg:   { name: 'eg',   text: 'Eni' },
        fv:   { name: 'fv',   text: 'Void' },
        np:   { name: 'np',   text: 'Fur' },
        gyro: { name: 'gyro', text: 'Gyro' },
        husk: { name: 'husk', text: 'Husk' },
        invo: { name: 'invo', text: 'Invo' },
        jak:  { name: 'jak',  text: 'Jak' },
        jugg: { name: 'jugg', text: 'Jug' },
        kotl: { name: 'kotl', text: 'Kee' },
        ku:   { name: 'ku',   text: 'Kun' },
        lc:   { name: 'lc',   text: 'Legion' },
        lesh: { name: 'lesh', text: 'Leshrac' },
        lich: { name: 'lich', text: 'Lich' },
        naix: { name: 'naix', text: 'Naix' },
        lina: { name: 'lina', text: 'Lina' },
        lion: { name: 'lion', text: 'Lion' },
        ld:   { name: 'ld',   text: 'Lone D' },
        luna: { name: 'luna', text: 'Luna' },
        ly:   { name: 'ly',   text: 'Lycan' },
        mag:  { name: 'mag',  text: 'Magnus' },
        med:  { name: 'med',  text: 'Medusa' },
        mp:   { name: 'mp',   text: 'Meepo' },
        potm: { name: 'potm', text: 'Mirana' },
        morp: { name: 'morp', text: 'Morph' },
    };

    app.I = {
        ta: { name: 'ta', text: 'Ta' },
        cl: { name: 'cl', text: 'Cl' },
    };

    app.picks = [];

    app.draft = {};
    app.draft[app.H.art.name]  = { dbuff: [app.H.alch], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.alch.name] = { dbuff: [app.H.art, app.H.aa],  prof: [app.H.art],  items: [app.H.ta] };
    app.draft[app.H.aa.name]   = { dbuff: [app.H.bh], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.am.name]   = { dbuff: [app.H.alch, app.H.art], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.ax.name]   = { dbuff: [app.H.bs, app.H.aa], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.bs.name]   = { dbuff: [app.H.bb], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.bm.name]   = { dbuff: [app.H.bs], prof: [app.H.bs], items: [app.H.ta] };
    app.draft[app.H.br.name]   = { dbuff: [app.H.bs], prof: [app.H.bm], items: [app.H.ta] };
    app.draft[app.H.bw.name]   = { dbuff: [app.H.am], prof: [app.H.bm], items: [app.H.ta] };
    app.draft[app.H.bb.name]   = { dbuff: [app.H.aa], prof: [app.H.br], items: [app.H.ta] };
    app.draft[app.H.bh.name]   = { dbuff: [app.H.bs], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.ba.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.bt.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.cw.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.ck.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.ch.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.cz.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.cl.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.cm.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.ds.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.dz.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.dp.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.di.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.dm.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.dk.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.dr.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.ea.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.es.name]   = { dbuff: [app.H.cm], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.et.name]   = { dbuff: [app.H.dr], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.em.name]   = { dbuff: [app.H.ds], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.ec.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.eg.name]   = { dbuff: [app.H.ec], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.fv.name]   = { dbuff: [app.H.ec], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.np.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.gyro.name] = { dbuff: [app.H.jugg], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.husk.name] = { dbuff: [app.H.ec], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.invo.name] = { dbuff: [app.H.ec], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.jak.name]  = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.jugg.name] = { dbuff: [app.H.ec], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.kotl.name] = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.ku.name]   = { dbuff: [app.H.luna], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.lc.name]   = { dbuff: [app.H.jugg], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.lesh.name] = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.lich.name] = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.lina.name] = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.lion.name] = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.luna.name] = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.ld.name]   = { dbuff: [app.H.ly], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.ly.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.mag.name]  = { dbuff: [app.H.alch], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.med.name]  = { dbuff: [app.H.am, app.H.br, app.H.kotl], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.mp.name]   = { dbuff: [app.H.em, app.H.es, app.H.lich], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.potm.name] = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.H.ta] };
    app.draft[app.H.morp.name] = { dbuff: [app.H.bm, app.H.np], prof: [app.H.alch], items: [app.H.ta] };

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
            app.H.cw,
            app.H.ck,
            app.H.ch,
            app.H.cz,
            app.H.cl,
            app.H.cm,
            app.H.ds,
            app.H.dz,
            app.H.dp,
            app.H.di,
            app.H.dm,
            app.H.dk,
            app.H.dr,
            app.H.ea,
            app.H.es,
            app.H.et,
            app.H.em,
            app.H.ec,
            app.H.eg,
            app.H.fv,
            app.H.np,
            app.H.gyro,
            app.H.husk,
            app.H.invo,
            app.H.jak,
            app.H.jugg,
            app.H.kotl,
            app.H.ku,
            app.H.lc,
            app.H.lesh,
            app.H.lich,
            app.H.lina,
            app.H.lion,
            app.H.ld,
            app.H.luna,
            app.H.ly,
            app.H.mag,
            app.H.med,
            app.H.mp,
            app.H.potm,
            app.H.morp,
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
                //save the pick
                app.picks[pickerNode.index - 1] = name
                app.debug('picker index (' + pickerNode.index + ') ' + app.picks[pickerNode.index -1].name)

                // reset the pickerNode and add text of the 'pick'
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

    app.forceLoadCounter = function() {
        var pickers = document.getElementsByClassName('picker');
        for (var i=0, len = pickers.length; i<len; i++) {
        }
    };

    /* main */
    app.onDOMContentLoaded = function() {
        var pickers = document.getElementsByClassName('picker');
        var dialog  = document.getElementById('dialog');

        for (var i=0, len = pickers.length; i<len; i++) {
            pickers[i].index = i + 1;
            pickers[i].addEventListener("click", function() {
                app.removeDialogs();
                app.showDialog(this);
            }, false);
        }
    };

    document.addEventListener('DOMContentLoaded', app.onDOMContentLoaded, false);

    return app;

})();
