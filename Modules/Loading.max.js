(function() {

    // Website is Loading
    $webLoaded = false;

    // Website is Rendering
    $webRendered = false;

    // Check if Loaded
    setTimeout(function() {
        if ($webLoaded == false) {

            // Reload Page
            location.reload(true);

        } else {
            delete $webLoaded;
        }
    }, 7500);

    // Check if Rendered
    setTimeout(function() {
        if ($webLoaded == false) {

            // Render Page

        } else {
            delete $webRendered;
        }
    }, 8000);

})();




// Files are Loading
$fileLoaded = 0;

// File Load Procedure
// <script src="" onload="fileSuccess(event)" onerror="fileFailed(event)"></script>
// <link rel="stylesheet" href="" onload="fileSuccess(event)" onerror="fileFailed(event)"/>
// <link rel="import" href="" onload="fileSuccess(event)" onerror="fileFailed(event)"/>

// Resources are Loading
$filePreload = 0;

// File Preload Procedure
// <link rel="preload" href="" as="image" onload="fileFetched(event)"/>

// Page has Loaded
function pageReturn(event) {
    $pageLoaded = true;
}

// Page Return Procedure
// <body onload="pageReturn(event)"></body>

// File has Loaded
function fileSuccess(event) {
    $fileLoaded = ($fileLoaded + 1);
}

// Resource has Loaded
function fileFetched(event) {
    $filePreload = ($filePreload + 1);
}

// File Load Failure
function fileFailed(event) {

    // Imports Directory
    if (event.target.src.toLowerCase().indexOf("imports") >= 0 || event.target.href.toLowerCase().indexOf("imports") >= 0) {
        var directory = "imports";
    }

    // Modules Directory
    if (event.target.src.toLowerCase().indexOf("modules") >= 0 || event.target.href.toLowerCase().indexOf("modules") >= 0) {
        var directory = "modules";
    }

    // Pages Directory
    if (event.target.src.toLowerCase().indexOf("pages") >= 0 || event.target.href.toLowerCase().indexOf("pages") >= 0) {
        var directory = "pages";
    }

    // JavaScript
    if (event.target.src) {

        // String Identification
        var string = event.target.src;
        var source = string.substring(string.lastIndexOf("/") + 1);

        // Reload File
        var imported = document.createElement("script");
        imported.src = "https://fibresite.com/" + directory + "/" + source;
        document.head.appendChild(imported);

        // Mark as Loaded
        fileSuccess(event);

    // Other
    } else if (event.target.href) {

        // String Identification
        var string = event.target.href;
        var source = string.substring(string.lastIndexOf("/") + 1);

        // CSS
        if (event.target.rel.toLowerCase().indexOf("stylesheet") >= 0 ) {

            // Reload File
            var imported = document.createElement("link");
            imported.rel = "stylesheet";
            imported.type = "text/css";
            imported.src = "https://fibresite.com/" + directory + "/" + source;
            document.head.appendChild(imported);

            // Mark as Loaded
            fileSuccess(event);

        // HTML
        } else if (event.target.rel.toLowerCase().indexOf("import") >= 0 ) {

            // Reload File
            var imported = document.createElement("link");
            imported.rel = "import";
            imported.href = "https://fibresite.com/" + directory + "/" + source;
            document.head.appendChild(imported);

            // Mark as Loaded
            fileSuccess(event);

        }

    }

}








(function() {

    // Website is Unready
    $webReady = 0;

    // Group A - Load 1
    document.addEventListener("DOMContentLoaded", function(event) {
        $webReady = ($webReady + 1);
    });

    // Group A - Load 2
    window.addEventListener("load", function() {
        $webReady = ($webReady + 1);
    }, false);

    // Website is Initializing
    $webInitalize = 0;

    // Group B - Load 1
    $(window).on("load", function() {
        $webInitalize = ($webInitalize + 1);
    });

    // Group B - Load 2
    $(window).bind("load", function() {
        $webInitalize = ($webInitalize + 1);
    });

    // Group B - Load 3
    $(document).ready(function() {
        $webInitalize = ($webInitalize + 1);
    });

    // Group B - Load 4
    $.ready.then(function() {
        $webInitalize = ($webInitalize + 1);
    });

    // Group B - Load 5
    $(function() {
        $(function() {
            $webInitalize = ($webInitalize + 1);
        });
    });

    // Website Load Checker
    (function() { var stateInterval = setInterval(function() {

        // Requirement
        if (document.readyState === "complete" && $fileLoaded == 15 && $pageLoaded == true && $webReady == 2 && $webInitalize == 5) {

            // Connectivity Checker
            if (location.protocol != "file:" && navigator.onLine == false && $filePreload != 13) {
                location.reload(true);
            }

            // Execute
            clearInterval(stateInterval);
            $webLoaded = true;
            delete $fileLoaded;
            delete $filePreload;
            delete $pageLoaded;
            delete $webReady;
            delete $webInitalize;
            webPrepare();

        }

    }, 10) })();

})();