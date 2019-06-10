"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MtModel_1 = require("./MtModel");
const Color_1 = require("./../classes/Color");
class IndexModel extends MtModel_1.MtModel {
    constructor() {
        super();
    }
    init() {
        this.colorBoxes = [];
        this.colorBoxes.push(new ColorBox("Black", "000000"));
        this.colorBoxes.push(new ColorBox("White", "ffffff"));
        this.colorBoxes.push(new ColorBox("Red", "ff0000"));
        this.colorBoxes.push(new ColorBox("Green", "00ff00"));
        this.colorBoxes.push(new ColorBox("Blue", "0000ff"));
        this.colorBoxes.push(new ColorBox("Yellow", "ffff00"));
        this.colorBoxes.push(new ColorBox("Orange", "FFA500"));
        this.colorBoxes.push(new ColorBox("Purple", "800080"));
        this.colorBoxes.push(new ColorBox("Brown", "A52A2A"));
    }
}
exports.IndexModel = IndexModel;
;
class ColorBox {
    constructor(colorName, colorHex) {
        this.colorName = colorName;
        this.colorHex = colorHex;
        if (colorHex.toLowerCase() != "000000")
            this.buildShades();
        if (colorHex.toLowerCase() != "ffffff")
            this.buildTints();
    }
    buildShades() {
        this.shades = [];
        for (var i = .1; i <= .9; i += .1) {
            this.shades.push(Color_1.Color.fromHexString(this.colorHex).shade(i).getHexString());
        }
    }
    buildTints() {
        this.tints = [];
        for (var i = .1; i <= .9; i += .1) {
            this.tints.push(Color_1.Color.fromHexString(this.colorHex).tint(i).getHexString());
        }
    }
}
//# sourceMappingURL=IndexModel.js.map