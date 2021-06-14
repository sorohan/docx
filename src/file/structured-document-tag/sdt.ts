// http://officeopenxml.com/WPtableOfContents.php
// http://www.datypic.com/sc/ooxml/e-w_sdt-1.html
import { XmlComponent } from "file/xml-components";
import { StructuredDocumentTagContent } from "./sdt-content";
import { IStructuredDataTypeOptions } from "./sdt-options";
import { StructuredDocumentTagProperties } from "./sdt-properties";

export class StructuredDocumentTag extends XmlComponent {
    private readonly content: StructuredDocumentTagContent;

    constructor(options: IStructuredDataTypeOptions = {}) {
        super("w:sdt");
        this.root.push(new StructuredDocumentTagProperties(options));

        this.content = new StructuredDocumentTagContent({
            children: options?.children ?? [],
        });
        this.root.push(this.content);
    }
}
