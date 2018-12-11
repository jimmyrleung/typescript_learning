System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Throttle(ms = 500) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                if (event)
                    event.preventDefault();
                clearInterval(timer);
                timer = setTimeout(() => originalMethod.apply(this, args), ms);
            };
            return descriptor;
        };
    }
    exports_1("Throttle", Throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
