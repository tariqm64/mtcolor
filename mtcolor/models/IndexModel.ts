import { MtModel } from "./MtModel";
import { ColorBox } from "../classes/ColorBox";

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
