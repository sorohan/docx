import { XmlComponent } from "file/xml-components";
import { IStructuredDocumentTagContentOptions } from "./sdt-options";

export class StructuredDocumentTagContent extends XmlComponent {
    constructor(options: IStructuredDocumentTagContentOptions) {
        super("w:sdtContent");

        for (const child of options?.children ?? []) {
            this.root.push(child);
        }
    }
}
