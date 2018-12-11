export function Throttle(ms: number = 500) {

    // Decorators must return another function
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        // The method being decorated
        const originalMethod = descriptor.value;

        // Our timer
        let timer = 0;

        // Overriding the original method
        // ...args: Rest operator to preserve the original parameters
        descriptor.value = function (...args: any[]) {
            // event prevent default when decorating event methods with our Throttle Decorator
            if (event) event.preventDefault();

            // void
            clearInterval(timer);
            timer = setTimeout(() => originalMethod.apply(this, args), ms);
        }

        // Return the override
        return descriptor;
    }
}