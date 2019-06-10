export class MtModel{
    public title: string;

    public init() { };

    public toJSON(): string {
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
    public getRenderedModel(): object {
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
    public build():void {

    }
}