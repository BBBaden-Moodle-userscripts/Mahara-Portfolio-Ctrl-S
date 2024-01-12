// ==UserScript==
// @name         Mahara Portfolio Ctrl+S
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Presses the save button when Ctrl + S is pressed
// @author       PianoNic
// @match        https://portfolio.bbbaden.ch/view/blocks.php*
// @icon         https://github.com/BBBaden-Moodle-userscripts/Mahara-Portfolio-Ctrl-S/blob/main/icon/saveIcon.png?raw=true
//
// @downloadURL https://github.com/BBBaden-Moodle-userscripts/Mahara-Portfolio-Ctrl-S/raw/main/Mahara-Portfolio-Ctrl-S.user.js
// @updateURL   https://github.com/BBBaden-Moodle-userscripts/Mahara-Portfolio-Ctrl-S/raw/main/Mahara-Portfolio-Ctrl-S.user.js
//
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.code === 'KeyS') {
            event.preventDefault();

            var buttons = document.querySelectorAll('button');
            buttons.forEach(function(button) {
                if (button.textContent.trim() === 'Speichern') {
                    button.click();
                }
            });
        }
    });
})();
