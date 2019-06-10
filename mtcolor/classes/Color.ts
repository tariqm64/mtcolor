export class Color {
    private r: number;
    private g: number;
    private b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    public static fromHexString(hexColor: string) {
        let c = parseInt(hexColor, 16);
        let r = c >> 16;
        let g = (c & 0x00ff00) >> 8;
        let b = c & 0x0000ff;
        return new Color(r, g, b);
    }

    public shade(percent: number): Color {
        let r = this.r;
        let g = this.g;
        let b = this.b;

        r -= r * percent;
        g -= g * percent;
        b -= b * percent;

        return new Color(r, g, b);
    }
    public tint(percent: number) {
        let r = this.r;
        let g = this.g;
        let b = this.b;

        r += (255 - r) * percent;
        g += (255 - g) * percent;
        b += (255 - b) * percent;

        return new Color(r, g, b);
    }
    public getHexString(): string {
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