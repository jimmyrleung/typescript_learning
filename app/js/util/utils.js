System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function log(...items) {
        items.forEach((i) => i.log());
    }
    exports_1("log", log);
    return {
        setters: [],
        execute: function () {
        }
    };
});
