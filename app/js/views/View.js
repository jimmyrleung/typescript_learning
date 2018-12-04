System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, escape = false) {
                    this._element = $(selector);
                    this._escape = escape;
                }
                ;
                update(model) {
                    console.time("view_update");
                    let template = this.template(model);
                    if (this._escape) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
                    }
                    this._element.html(template);
                    console.timeEnd("view_update");
                }
                ;
            };
            exports_1("View", View);
        }
    };
});
