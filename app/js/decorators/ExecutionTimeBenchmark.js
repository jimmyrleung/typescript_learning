System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ExecutionTimeBenchmark() {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                const t1 = performance.now();
                const originalMethodReturn = originalMethod.apply(this, args);
                const t2 = performance.now();
                console.log(`Execution time benchmark for '${propertyKey}': ${(t2 - t1) / 1000}s`);
                return originalMethodReturn;
            };
            return descriptor;
        };
    }
    exports_1("ExecutionTimeBenchmark", ExecutionTimeBenchmark);
    return {
        setters: [],
        execute: function () {
        }
    };
});
