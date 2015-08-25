onload = function() {
    console.log("onload");
    var webview   = document.getElementById("site-frame");
    var indicator = document.querySelector(".indicator");

    var loadstart = function() {
        indicator.innerText = "loading...";
    };

    var loadstop = function() {
        indicator.innerText = "";
    };
    webview.addEventListener("did-start-loading", loadstart);
    webview.addEventListener("did-stop-loading", loadstop);

    var links = document.getElementsByClassName("foo");
    for (var i=0, len = links.length; i < len; i++) {
      links[i].addEventListener("click", function(e) {
        e.preventDefault();
        webview.src = this.getAttribute('href');
      },
      false);
    }
}
