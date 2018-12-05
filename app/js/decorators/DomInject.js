System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function DomInject(selector) {
        return function (target, propertyKey) {
            let element;
            const getter = function () {
                if (!element) {
                    element = $(selector);
                }
                return element;
            };
            Object.defineProperty(target, propertyKey, {
                get: getter
            });
        };
    }
    exports_1("DomInject", DomInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
