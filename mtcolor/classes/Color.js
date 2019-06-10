"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    static fromHexString(hexColor) {
        let c = parseInt(hexColor, 16);
        let r = c >> 16;
        let g = (c & 0x00ff00) >> 8;
        let b = c & 0x0000ff;
        return new Color(r, g, b);
    }
    shade(percent) {
        let r = this.r;
        let g = this.g;
        let b = this.b;
        r -= r * percent;
        g -= g * percent;
        b -= b * percent;
        return new Color(r, g, b);
    }
    tint(percent) {
        let r = this.r;
        let g = this.g;
        let b = this.b;
        r += (255 - r) * percent;
        g += (255 - g) * percent;
        b += (255 - b) * percent;
        return new Color(r, g, b);
    }
    getHexString() {
        let r = Math.floor(this.r);
        let g = Math.floor(this.g);
        let b = Math.floor(this.b);
        let c = (r << 16) | (g << 8) | b;
        let hexString = c.toString(16);
        while (hexString.length < 6) {
            hexString = "0" + hexString;
        }
        return hexString;
    }
}
exports.Color = Color;
//# sourceMappingURL=Color.js.map