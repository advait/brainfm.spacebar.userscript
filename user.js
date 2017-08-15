// ==UserScript==
// @name         Brain.fm (play/pause spacebar)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Press spacebar to play/pause brain.fm
// @author       advait
// @match        https://www.brain.fm/app*
// @grant
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    document.body.onkeyup = function(e) {
        // space=32, k=107
        if (e.keyCode == 32 || e.keyCode == 107) {
            var ps = document.getElementById('player_circle');
            if (ps) {
                ps.click();
            }
        }
    };
})();
