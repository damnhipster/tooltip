var local; local['tooltip'] = require('./tooltip');

if (typeof window.define === "function" && window.define.amd) {
    define('bower_components/bskyb-tooltip/dist/js/tooltip.requirejs', [], function() {
        'use strict';
        return local['tooltip'];
    });
}