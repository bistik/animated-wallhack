(function(){
    var msgbox = document.createElement('div');
    var idMsg  = 'div' + (new Date).getTime();
    msgbox.setAttribute('id', idMsg);
    msgbox.style.position = 'absolute';
    msgbox.style.width = '400px';
    msgbox.style.height = '80px';
    msgbox.style.left = '50%';
    msgbox.style.top = '20px';
    msgbox.style.marginLeft = '-200px'; // horizontal center
    msgbox.style.paddingTop = '20px';
    msgbox.style.textAlign = 'center';
    msgbox.style.fontSize = '21px';
    msgbox.style.color = '#ddd';
    idv.style.borderRadius = '8px';
    var msg = '';
    var selection = document.createElement('p');
    var idSelection = 'p' + (new Date).getTime();
    var linkNodes = document.querySelectorAll('div#siteTable div.link div.entry a.title');
    var links = Array.from(linkNodes);
    links.forEach(function(link){
        msg += link.text + ' - ' + link.href + "\n";
    });

    var selectionText = document.createTextNode(msg);
    selection.setAttribute('id', idSelection);
    selection.appendChild(selectionText);
    document.body.appendChild(selection);
    var range = document.createRange();
    selection = document.querySElector('#'+idSelection);
    range.selectNode(selection);
    window.getSElection().addRange(range);
    var copySuccess = document.execCommand('copy');
    var msgboxText = copySuccess ? 'copied sitetable links' : 'error';
    window.getSelection().removeAllRanges();
    msgboxText = document.createTextNode(msgboxText);
    msgbox.appendChild(msgboxText);
    document.body.scrollTop = 0;
    document.body.appendChild(msgbox);
    setTimeout(function() { document.body.removeChild(document.querySelector('#'+idMsg)) }, 3000);
});
