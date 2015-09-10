(function() {

    var DEBUG = 1;

    /* show dialog when '+' is clicked */
    function showDialog(parentNode) {
        var div     = document.createElement("div");
        var divText = document.createTextNode("Dialog");

        div.appendChild(divText);
        div.setAttribute('class', 'dialog');

        div.style.position         = 'absolute';
        div.style.backgroundImage  = 'sample_sprite.png';
        div.style.backgroundRepeat = 'no-repeat';
        div.style.marginLeft       = '50px';
        div.style.marginTop        = '-38px';
        div.style.width            = '300px';
        div.style.display          = 'inline-block';
        div.style.zIndex           = '6';

        parentNode.appendChild(div);
    }

    /* before we show a dialog, remove all those displayed */
    function removeDialogs() {
        var dialogs = document.getElementsByClassName('dialog');
        for (var i = 0, len = dialogs.length; i < len; i++) {
            if (DEBUG) console.log('removing dialog...');    
            dialogs[i].parentNode.removeChild(dialogs[i]);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var pickers = document.getElementsByClassName('picker');
        var dialog  = document.getElementById('dialog');
        //dialog.style.display = 'none';

        console.log(pickers.length);
        for (var i=0, len = pickers.length; i<len; i++) {
            pickers[i].addEventListener("click", function() {
                removeDialogs();
                showDialog(this.parentNode);
            }, false);
        }
    }, false);


})();
