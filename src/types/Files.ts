/**
 * User file type
 */
export type UserFile = {
    id: string;
    name: string;
    relativePath: string;
    code: string;
    extension: string;
};

/**
 * System file Type
 */
export type SystemFile = Partial<File> & Blob & { webkitRelativePath?: string };

/**
 * Files sidebar structure type
 */
export interface TreeViewNode {
    id: string;
    name: string;
    children?: TreeViewNode[];
    extension?: string;
}