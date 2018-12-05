export function ExecutionTimeBenchmark() {

    // Decorators must return another function
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        // The method being decorated
        const originalMethod = descriptor.value;

        // Overriding the original method
        // ...args: Rest operator to preserve the original parameters
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now();
            const originalMethodReturn = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`Execution time benchmark for '${propertyKey}': ${(t2 - t1) / 1000}s`);
            return originalMethodReturn;
        }

        // Return the override
        return descriptor;
    }
}