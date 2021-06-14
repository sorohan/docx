import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class TagAttributes extends XmlAttributeComponent<{ readonly tag: string }> {
    protected readonly xmlKeys = { tag: "w:val" };
}

export class SdtTag extends XmlComponent {
    constructor(tag: string) {
        super("w:tag");
        this.root.push(new TagAttributes({ tag }));
    }
}
