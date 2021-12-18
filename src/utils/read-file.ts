import { SystemFile, UserFile } from "../types/Files";
import { v4 as uuidv4 } from 'uuid';

/**
 * Helper function to read system file
 *
 * @param file
 */
export const readFile = (file: SystemFile): Promise<UserFile> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            const { name = '', webkitRelativePath = '' } = file;
            const id = uuidv4();
            const code = typeof reader.result === "string" ? reader.result : '';
            const splittedName = name?.split('.');
            const extension = Array.isArray(splittedName) && splittedName.length
                ? splittedName[splittedName.length - 1]
                : '';

            resolve({
                id,
                name,
                code,
                extension,
                relativePath: webkitRelativePath
            })
        }

        reader.onerror = err => reject(err);
    })
};