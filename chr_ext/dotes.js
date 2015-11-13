// setting up namespace for
var Dotes = Dotes || {};

Dotes.app = (function() {

    var app = {};
    var DEBUG = 1;

    app.H = {
        art:  { name: 'art',  text: 'Abaddon' },
        alch: { name: 'alch', text: 'Alchemist' },
        aa:   { name: 'aa',   text: 'Ancient Apparition' },
        am:   { name: 'am',   text: 'Anti-mage' },
        ax:   { name: 'ax',   text: 'Axe' },
        bs:   { name: 'bs',   text: 'Bloodseeker' },
        bm:   { name: 'bm',   text: 'Beast Master' },
        br:   { name: 'br',   text: 'Broodmother' },
        bw:   { name: 'bw',   text: 'Brewmaster' },
        bb:   { name: 'bb',   text: 'Bristleback' },
        bh:   { name: 'bh',   text: 'Bounty Hunter' },
        ba:   { name: 'ba',   text: 'Bane' },
        bt:   { name: 'bt',   text: 'Bat Rider' },
        cw:   { name: 'cw',   text: 'Centaur Warrunner' },
        ck:   { name: 'ck',   text: 'Chaos Knight' },
        chen: { name: 'chen', text: 'Chen' },
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
        np:   { name: 'np',   text: 'Furion' },
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
        naga: { name: 'naga', text: 'Naga' },
        necro:{ name: 'necro',text: 'Necro' },
        sf:   { name: 'sf',   text: 'Never' },
        ns:   { name: 'ns',   text: 'Night' },
        nyx:  { name: 'nyx',  text: 'Nyx' },
        od:   { name: 'od',   text: 'Obsid' },
        ogre: { name: 'ogre', text: 'Ogre' },
        omni: { name: 'omni', text: 'Omni' },
        ora:  { name: 'ora',  text: 'Ora' },
        pa:   { name: 'pa',   text: 'Mortred' },
        pl:   { name: 'pl',   text: 'PL' },
        phx:  { name: 'phx',  text: 'Phx' },
        puck: { name: 'puck', text: 'Puck' },
        pudge:{ name: 'pudge',text: 'Pudge' },
        pugna:{ name: 'pugna',text: 'Pugna' },
        qop:  { name: 'qop',  text: 'Queen' },
        razor:{ name: 'razor',text: 'Razor' },
        riki: { name: 'riki', text: 'Riki' },
        rub:  { name: 'rub',  text: 'Rubick' },
        sk:   { name: 'sk',   text: 'SandK' },
        sd:   { name: 'sd',   text: 'Shadow' },
        sham: { name: 'sham', text: 'Sham' },
        sil:  { name: 'sil',  text: 'Sil' },
        sky:  { name: 'sky',  text: 'Skywra' },
        sl:   { name: 'sl',   text: 'Slardar' },
        slark:{ name: 'slark',text: 'Slark' },
        snip: { name: 'snip', text: 'Sniper' },
        spec: { name: 'spec', text: 'Spectre' },
        bara: { name: 'bara', text: 'Bara' },
        storm:{ name: 'storm',text: 'Storm' },
        sven: { name: 'sven', text: 'Sven' },
        tech: { name: 'tech', text: 'Tech' },
        ta:   { name: 'ta',   text: 'Templar' },
        tb:   { name: 'tb',   text: 'Terror' },
        tide: { name: 'tide', text: 'Tide' },
        timb: { name: 'timb', text: 'Timber' },
        tink: { name: 'tink', text: 'Tinker' },
        tiny: { name: 'tiny', text: 'Tiny' },
        tree: { name: 'tree', text: 'Treant' },
        troll:{ name: 'troll',text: 'Troll' },
        tusk: { name: 'tusk', text: 'Tusk' },
        undy: { name: 'undy', text: 'Undying' },
        ursa: { name: 'ursa', text: 'Ursa' },
        veng: { name: 'veng', text: 'Venge' },
        veno: { name: 'veno', text: 'Veno' },
        viper:{ name: 'viper',text: 'Viper' },
        vis:  { name: 'vis',  text: 'Visage' },
        war:  { name: 'war',  text: 'Warlock' },
        weave:{ name: 'weave',text: 'Weaver' },
        wind: { name: 'wind', text: 'Wind' },
        wint: { name: 'wint', text: 'Winter' },
        wisp: { name: 'wisp', text: 'Wisp' },
        wd:   { name: 'wd',   text: 'Witch' },
        wk:   { name: 'wk',   text: 'Wraith' },
        zeus: { name: 'zeus', text: 'Zeus' },
    };

    app.I = {
        abys:  { name: 'iabys',  text: 'Abys' },
        aegis: { name: 'iaegis', text: 'Aegis' },
        drum:  { name: 'idrum',  text: 'Drum' },
        arc:   { name: 'iarc',   text: 'Arcane' },
        arm:   { name: 'iarm',   text: 'Armlet' },
        ac:    { name: 'iac',    text: 'Assault' },
        bash:  { name: 'ibash',  text: 'Basher' },
        belt:  { name: 'ibelt',  text: 'Belt' },
        bf:    { name: 'ibf',    text: 'Battlefury' },
        bkb:   { name: 'ibkb',   text: 'BKBar' },
        bm:    { name: 'ibm',    text: 'Blademail' },
        alac:  { name: 'ialac',  text: 'BOfAlacrity' },
        boa:   { name: 'iboa',   text: 'BOfAttack' },
        blood: { name: 'iblood', text: 'Bloodstone' },
        boots: { name: 'iboots', text: 'Boots' },
        boe:   { name: 'iboe',   text: 'BandOfElven' },
        bott:  { name: 'ibott',  text: 'Bottle' },
        brace: { name: 'ibrace', text: 'Bracer' },
        brnch: { name: 'ibrnch', text: 'Branch' },
        broad: { name: 'ibroad', text: 'Broadsword' }
    };

    app.picks = [];

    app.draft = {};
    app.draft[app.H.art.name]  = { dbuff: [app.H.np, app.H.sd, app.H.od, app.H.am, app.H.undy], prof: [app.H.alch], items: [app.I.abys, app.I.aegis, app.I.drum, app.I.broad, app.I.brnch] };
    app.draft[app.H.alch.name] = { dbuff: [app.H.naix, app.H.chen, app.H.wisp, app.H.cz, app.H.mp],  prof: [app.H.art],  items: [app.I.drum, app.I.belt, app.I.bm, app.I.drum] };
    app.draft[app.H.aa.name]   = { dbuff: [app.H.bh], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.am.name]   = { dbuff: [app.H.alch, app.H.art], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ax.name]   = { dbuff: [app.H.bs, app.H.aa], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.bs.name]   = { dbuff: [app.H.bb], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.bm.name]   = { dbuff: [app.H.bs], prof: [app.H.bs], items: [app.I.drum] };
    app.draft[app.H.br.name]   = { dbuff: [app.H.bs], prof: [app.H.bm], items: [app.I.drum] };
    app.draft[app.H.bw.name]   = { dbuff: [app.H.am], prof: [app.H.bm], items: [app.I.drum] };
    app.draft[app.H.bb.name]   = { dbuff: [app.H.aa], prof: [app.H.br], items: [app.I.drum] };
    app.draft[app.H.bh.name]   = { dbuff: [app.H.bs], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ba.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.bt.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.cw.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ck.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.chen.name] = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.cz.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.cl.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.cm.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ds.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.dz.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.dp.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.di.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.dm.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.dk.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.dr.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ea.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.es.name]   = { dbuff: [app.H.cm], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.et.name]   = { dbuff: [app.H.dr], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.em.name]   = { dbuff: [app.H.ds], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ec.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.eg.name]   = { dbuff: [app.H.ec], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.fv.name]   = { dbuff: [app.H.ec], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.np.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.gyro.name] = { dbuff: [app.H.jugg], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.husk.name] = { dbuff: [app.H.ec], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.invo.name] = { dbuff: [app.H.ec], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.jak.name]  = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.jugg.name] = { dbuff: [app.H.ec], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.kotl.name] = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ku.name]   = { dbuff: [app.H.luna], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.lc.name]   = { dbuff: [app.H.jugg], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.lesh.name] = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.lich.name] = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.lina.name] = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.lion.name] = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.luna.name] = { dbuff: [app.H.husk], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ld.name]   = { dbuff: [app.H.ly], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ly.name]   = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.mag.name]  = { dbuff: [app.H.alch], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.med.name]  = { dbuff: [app.H.am, app.H.br, app.H.kotl], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.mp.name]   = { dbuff: [app.H.em, app.H.es, app.H.lich], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.potm.name] = { dbuff: [app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.morp.name] = { dbuff: [app.H.bm, app.H.np], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.naga.name] = { dbuff: [app.H.lesh, app.H.em], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.necro.name]= { dbuff: [app.H.aa, app.H.pugna], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.sf.name]   = { dbuff: [app.H.tink, app.H.wisp], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ns.name]   = { dbuff: [app.H.mp, app.H.razor], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.nyx.name]  = { dbuff: [app.H.vis, app.H.dk], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.od.name]   = { dbuff: [app.H.nyx, app.H.pugna], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ogre.name] = { dbuff: [app.H.tide, app.H.mp, app.H.pl], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.omni.name] = { dbuff: [app.H.razor, app.H.doom, app.H.lina], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ora.name]  = { dbuff: [app.H.np, app.H.am], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.pa.name]   = { dbuff: [app.H.tink, app.H.mp], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.pl.name]   = { dbuff: [app.H.em, app.H.es, app.H.timb], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.phx.name]  = { dbuff: [app.H.husk, app.H.jugg], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.puck.name] = { dbuff: [app.H.husk, app.H.spec], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.pudge.name]= { dbuff: [app.H.wisp, app.H.ld], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.qop.name]  = { dbuff: [app.H.ea, app.H.pugna], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.razor.name]= { dbuff: [app.H.slark, app.H.necro], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.riki.name] = { dbuff: [app.H.br, app.H.bh, app.H.bs], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.rub.name]  = { dbuff: [app.H.ec], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.sk.name]   = { dbuff: [app.H.zeus, app.H.phx, app.H.sil], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.sd.name]   = { dbuff: [app.H.ly, app.H.ec], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.sham.name] = { dbuff: [app.H.spec, app.H.snip, app.H.gyro], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.sil.name]  = { dbuff: [app.H.br, app.H.wisp, app.H.ld], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.sky.name]  = { dbuff: [app.H.husk, app.H.ck], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.sl.name]   = { dbuff: [app.H.tide, app.H.ea, app.H.tink], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.slark.name]= { dbuff: [app.H.am, app.H.timb, app.H.puck], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.snip.name] = { dbuff: [app.H.pa, app.H.slark, app.H.ld], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.spec.name] = { dbuff: [app.H.undy, app.H.alch, app.H.wisp], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.bara.name] = { dbuff: [app.H.mp, app.H.ec, app.H.ck], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.storm.name]= { dbuff: [app.H.am, app.H.sil, app.H.chen], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.sven.name] = { dbuff: [app.H.snip, app.H.wind, app.H.medu], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.tech.name] = { dbuff: [app.H.wk, app.H.np, app.H.ta], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ta.name]   = { dbuff: [app.H.pl, app.H.ds], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.tb.name]   = { dbuff: [app.H.timb, app.H.sk, app.H.lesh], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.tide.name] = { dbuff: [app.H.dp, app.H.snip, app.H.dr], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.timb.name] = { dbuff: [app.H.pugna, app.H.naix, app.H.jugg], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.tink.name] = { dbuff: [app.H.naga, app.H.pudge, app.H.nyx], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.tiny.name] = { dbuff: [app.H.naix, app.H.bt, app.H.vis], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.tree.name] = { dbuff: [app.H.pl, app.H.ds, app.H.ursa], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.troll.name]= { dbuff: [app.H.cm, app.H.wind, app.H.ax], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.tusk.name] = { dbuff: [app.H.ta, app.H.wisp, app.H.puck], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.undy.name] = { dbuff: [app.H.gyro, app.H.em, app.H.tech], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.ursa.name] = { dbuff: [app.H.pl, app.H.br], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.veng.name] = { dbuff: [app.H.pl, app.H.ck], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.veno.name] = { dbuff: [app.H.husk, app.H.np, app.H.tb], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.viper.name]= { dbuff: [app.H.mp, app.H.pl, app.H.ck], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.vis.name]  = { dbuff: [app.H.pl, app.H.np, app.H.naga], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.war.name]  = { dbuff: [app.H.br, app.H.np, app.H.dr], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.weave.name]= { dbuff: [app.H.fv, app.H.tech, app.H.riki], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.wind.name] = { dbuff: [app.H.tink, app.H.ea, app.H.morp], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.wint.name] = { dbuff: [app.H.timb, app.H.ea, app.H.tb], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.wisp.name] = { dbuff: [app.H.bm, app.H.np, app.H.lesh], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.wd.name]   = { dbuff: [app.H.br, app.H.np, app.H.slark], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.wk.name]   = { dbuff: [app.H.pl, app.H.am, app.H.invo], prof: [app.H.alch], items: [app.I.drum] };
    app.draft[app.H.zeus.name] = { dbuff: [app.H.husk, app.H.naix, app.H.am], prof: [app.H.alch], items: [app.I.drum] };

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
    app.createRow = function (items, cssClass, commonClass) {
        var frag      = document.createDocumentFragment();
        var div       = document.createElement("div");
        div.className = cssClass;

        items.forEach(function(item) {
            var a       = document.createElement("a");
            var text    = document.createTextNode("");
            a.appendChild(text);
            a.className = 'slot ' + item.name + ' ' + commonClass;
            a.setAttribute('href', '#');
            a.setAttribute('title', item.text);
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
            app.H.chen,
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
            app.H.naga,
            app.H.necro,
            app.H.sf,
            app.H.ns,
            app.H.nyx,
            app.H.od,
            app.H.ogre,
            app.H.omni,
            app.H.ora,
            app.H.pa,
            app.H.pl,
            app.H.phx,
            app.H.puck,
            app.H.pudge,
            app.H.pugna,
            app.H.qop,
            app.H.razor,
            app.H.riki,
            app.H.rub,
            app.H.sk,
            app.H.sd,
            app.H.sham,
            app.H.sil,
            app.H.sky,
            app.H.sl,
            app.H.slark,
            app.H.snip,
            app.H.spec,
            app.H.bara,
            app.H.storm,
            app.H.sven,
            app.H.tech,
            app.H.ta,
            app.H.tb,
            app.H.tide,
            app.H.timb,
            app.H.tink,
            app.H.tiny,
            app.H.tree,
            app.H.troll,
            app.H.tusk,
            app.H.undy,
            app.H.ursa,
            app.H.veng,
            app.H.veno,
            app.H.viper,
            app.H.vis,
            app.H.war,
            app.H.weave,
            app.H.wind,
            app.H.wint,
            app.H.wisp,
            app.H.wd,
            app.H.wk,
            app.H.zeus
        ];
        /* rowParent --> <div class="row">
                            <div class="wrap_row">
                                <a>pickerNode</a>
        */
        var rowParent = pickerNode.parentNode.parentNode;
        names.forEach(function(name) {
            var a       = document.createElement("a");
            var text    = document.createTextNode(" ");
            a.className = name.name + ' hero';
            a.appendChild(text);
            a.setAttribute('href', '#');
            a.setAttribute('title', name.text);
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
                rowParent.appendChild(app.createRow(app.draft[name.name].dbuff, 'wrap_row5', 'hero'));
                rowParent.appendChild(app.createRow(app.draft[name.name].items, 'wrap_row5_b', 'item'));
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
