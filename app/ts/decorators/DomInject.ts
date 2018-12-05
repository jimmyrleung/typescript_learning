export function DomInject(selector: string) {

    // Decorators must return another function
    return function (target: any, propertyKey: string) {
        let element: JQuery;

        // Getter Function that returns the element
        const getter = function () {
            if (!element) {
                // It'll cache the element
                element = $(selector);
            }

            return element;
        }
        
        // It'll set our 'getter' to the decorator that we are defining
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    }
}