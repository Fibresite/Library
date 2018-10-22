(function() {

    // HTML Import Status
    function HTMLImportStatus() {
        return 'import' in document.createElement('link');
    } if (HTMLImportStatus()) {
    } else {

        // Incompatibility Found
        alert("Browser requires cross-origin HTML import support.");

    }

    // Client's Browser
    var clientBrowser = navigator.userAgent;
    if (navigator.userAgent.indexOf("Chromium") > -1) {
        clientBrowser = "Chromium";
    } else if (navigator.userAgent.indexOf("Chrome") > -1) {
        clientBrowser = "Google Chrome";
    } else if (navigator.userAgent.indexOf("Safari") > -1) {
        clientBrowser = "Apple Safari";
    } else if (navigator.userAgent.indexOf("Opera") > -1) {
        clientBrowser = "Opera";
    } else if (navigator.userAgent.indexOf("OPR") > -1) {
        clientBrowser = "Opera";
    } else if (navigator.userAgent.indexOf("Firefox") > -1) {
        clientBrowser = "Mozilla Firefox";
    } else if (navigator.userAgent.indexOf("MSIE") > -1 ||
               navigator.userAgent.indexOf("Trident") > -1 ) {
        clientBrowser = "Microsoft Internet Explorer";
    } else if (navigator.userAgent.indexOf("Edge") > -1) {
        clientBrowser = "Microsoft Edge";
    } else {
        clientBrowser = "Unknown";
    }

    // Client's Rendering Engine
    var renderEngine = navigator.userAgent;
    if (navigator.userAgent.indexOf("Gecko") > -1) {
        renderEngine = "Gecko";
    } else if (navigator.userAgent.indexOf("WebKit") > -1) {
        renderEngine = "Apple WebKit";
    } else if (navigator.userAgent.indexOf("Presto") > -1) {
        renderEngine = "Opera Presto";
    } else if (navigator.userAgent.indexOf("Trident") > -1) {
        renderEngine = "Trident";
    } else if (navigator.userAgent.indexOf("Blink") > -1) {
        renderEngine = "Chromium Blink";
    } else {
        renderEngine = "Unknown";
    }

    // Client's Screen Resolution
    var screenWidth = screen.width;
    var screenHeight = screen.hidth;

    // Curent Window Size
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Client's Operating System
    if (navigator.appVersion.indexOf("Win")!=-1) {
        var operatingSystem = "Windows";
    } else if (navigator.appVersion.indexOf("Mac")!=-1) {
        var operatingSystem = "Macintosh";
    } else if (navigator.appVersion.indexOf("UNIX")!=-1) {
        var operatingSystem = "UNIX";
    } else if (navigator.appVersion.indexOf("Linux")!=-1 ||
               navigator.appVersion.indexOf("X11")!=-1 ) {
        var operatingSystem = "Linux";
    } else if (navigator.appVersion.indexOf("Android")!=-1) {
        var operatingSystem = "Android";
    } else if (navigator.appVersion.indexOf("iOS")!=-1 ||
               navigator.appVersion.indexOf("iPhone")!=-1 ||
               navigator.appVersion.indexOf("iPad")!=-1 ||
               navigator.appVersion.indexOf("iPod")!=-1 ) {
        var operatingSystem = "iOS";
    } else {
        var operatingSystem = "Unknown";
    }

})();