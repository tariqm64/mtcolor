"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MtModel {
    init() { }
    ;
    toJSON() {
        let o = {};
        let keys = Object.keys(this);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (k.indexOf("_") == 0)
                k = keys[i].substr(1);
            o[k] = this[k];
        }
        return JSON.stringify(o);
    }
    getRenderedModel() {
        let o = {};
        let keys = Object.keys(this);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (k.indexOf("_") == 0)
                k = keys[i].substr(1);
            o[k] = this[k];
        }
        return o;
    }
    build() {
    }
}
exports.MtModel = MtModel;
//# sourceMappingURL=MtModel.js.map