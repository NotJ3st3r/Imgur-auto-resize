// ==UserScript==
// @name         Imgur auto resize
// @namespace    https://greasyfork.org/en/scripts/434744-imgur-auto-resize
// @version      1.1
// @description  Automatically resizes imgur videos to fit the screen height
// @icon         https://imgur.com/favicon.ico
// @author       NotJ3st3r
// @license      MIT
// @match        https://i.imgur.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    addGlobalStyle('body { overflow: hidden !important; }');
    var video = document.getElementsByTagName('video');
    video[0].style.height = "100vh";
    video[0].style.width = "auto";
})();

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
