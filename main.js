"use strict";

var gMapApiLoaded = false;

function gMapApiLoadedFunction() {
    gMapApiLoaded = true;
}

var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
showdown.extension("emojifier", function() {
    return [{
        type: "lang",
        regex: /:([\w+-]*):/g,
        replace: "<img alt=\":$1:\" title=\":$1:\" class=\"emoji\" src=\"https://github.global.ssl.fastly.net/images/icons/emoji/$1.png?v5\">"
    }]
});
var fromMarkdown = new showdown.Converter({
    "extensions": ["emojifier"],
    "noHeaderId": true,
    "headerLevelStart": 2,
    "tables": true
});

// localStorage.setItem("debugEnabled", true); // to enable debugging permanently
var DEBUG_ENABLED = localStorage.getItem("debugEnabled") || false;

function consolelog() {
    if (DEBUG_ENABLED)
        console.log.apply(null, arguments);
}
$(document).ready(function() {
    $("#nav_container").load("nav.html"); // load navigation bar / side menu
    // nav will load start page
    $("body").css("background-image", "url(images/background.jpg)");
});
