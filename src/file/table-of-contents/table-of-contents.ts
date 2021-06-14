// http://officeopenxml.com/WPtableOfContents.php
// http://www.datypic.com/sc/ooxml/e-w_sdt-1.html
import { Paragraph } from "file/paragraph";
import { Run } from "file/paragraph/run";
import { Begin, End, Separate } from "file/paragraph/run/field";
import { StructuredDocumentTag } from "file/structured-document-tag";
import { FieldInstruction } from "./field-instruction";
import { ITableOfContentsOptions } from "./table-of-contents-properties";

export class TableOfContents extends StructuredDocumentTag {
    constructor(alias: string = "Table of Contents", properties?: ITableOfContentsOptions) {
        super({
            alias,
            children: [
                new Paragraph({
                    children: [
                        new Run({
                            children: [new Begin(true), new FieldInstruction(properties), new Separate()],
                        }),
                    ],
                }),
                new Paragraph({
                    children: [
                        new Run({
                            children: [new End()],
                        }),
                    ],
                }),
            ],
        });
    }
}
