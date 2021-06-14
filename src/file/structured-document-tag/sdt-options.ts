import { Paragraph } from "file/paragraph";
import { Table } from "file/table";

export interface IStructuredDataTypeOptions {
    readonly alias?: string;
    readonly tag?: string;
    readonly children?: (Paragraph | Table)[];
}

export interface IStructuredDocumentTagPropertiesOptions {
    readonly alias?: string;
    readonly tag?: string;
}

export interface IStructuredDocumentTagContentOptions {
    readonly children?: (Paragraph | Table)[];
}
