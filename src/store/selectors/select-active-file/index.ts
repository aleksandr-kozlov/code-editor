import { createSelector } from 'reselect';
import { UserFile } from '../../../types/Files';
import { RootState } from '../../../types/Store';
import { FilesState } from '../../slices/files';

interface UserFilesMap { [key: string]: UserFile };

const selectActiveFiles = (files: FilesState) => {
    const { userFiles, activeFilesIds } = files;
    const userFilesMap = userFiles.reduce((result, activeFile) => {
        result[activeFile.id] = activeFile;
        return result;
    }, {} as UserFilesMap);

    return activeFilesIds.map(fileId => userFilesMap[fileId]);
}

/**
 * Active files selector
 *
 * @returns {UserFile[]}
 */
export default createSelector((state: Pick<RootState, 'files'>) => state.files, selectActiveFiles);