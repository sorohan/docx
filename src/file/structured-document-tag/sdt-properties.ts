// http://www.datypic.com/sc/ooxml/e-w_sdtPr-1.html
import { XmlComponent } from "file/xml-components";
import { SdtAlias } from "./alias";
import { IStructuredDocumentTagPropertiesOptions } from "./sdt-options";
import { SdtTag } from "./tag";

export class StructuredDocumentTagProperties extends XmlComponent {
    constructor(options: IStructuredDocumentTagPropertiesOptions) {
        super("w:sdtPr");
        if (options.alias) {
            this.root.push(new SdtAlias(options.alias));
        }
        if (options.tag) {
            this.root.push(new SdtTag(options.tag));
        }
    }
}
