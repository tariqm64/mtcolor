import { MtModel } from "./MtModel";
import { Color } from "./../classes/Color"

export class IndexModel extends MtModel{
    public colorBoxes: Array<ColorBox>;
    constructor() {
        super();
    }

    public init() {
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
};

class ColorBox {
    public colorName: string;
    public colorHex: string;
    public shades: Array<string>;
    public tints: Array<string>;
    constructor(colorName: string, colorHex: string){
        this.colorName = colorName;
        this.colorHex = colorHex;
        if (colorHex.toLowerCase() != "000000")
            this.buildShades();
        if (colorHex.toLowerCase() != "ffffff")
            this.buildTints();
    }

    private buildShades():void {
        this.shades = [];
        for (var i = .1; i <= .9; i += .1) {
            this.shades.push(Color.fromHexString(this.colorHex).shade(i).getHexString());
        }
    }
    private buildTints(): void {
        this.tints = [];
        for (var i = .1; i <= .9; i += .1) {
            this.tints.push(Color.fromHexString(this.colorHex).tint(i).getHexString());
        }
    }
}