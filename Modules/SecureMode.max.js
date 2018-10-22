// Secure Mode - Enforce HTTPS
if (location.protocol == "file:") {
} else if (location.protocol != "https:") {
    location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}