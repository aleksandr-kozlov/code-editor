import selectActiveFile from '.';
import { UserFile } from '../../../types/Files';
import { FilesState } from '../../slices/files';

describe('select active file selector', function () {

    it('should return only active files', function () {
        const userFiles: UserFile[] = [
            { id: '1', name: 'test1.js', relativePath: 'src/test1.js', code: 'console.log("test")', extension: '.js' },
            { id: '2', name: 'test2.js', relativePath: 'src/test2.js', code: 'console.log("test")', extension: '.js' },
            { id: '3', name: 'test3.js', relativePath: 'src/test3.js', code: 'console.log("test")', extension: '.js' },
        ];
        const activeFilesIds = ['1', '3'];

        const state = {
            files: {
                userFiles,
                activeFilesIds,
                editorActiveFileId: null,
            },
        };

        const expectedResult: UserFile[]  = [
            { id: '1', name: 'test1.js', relativePath: 'src/test1.js', code: 'console.log("test")', extension: '.js' },
            { id: '3', name: 'test3.js', relativePath: 'src/test3.js', code: 'console.log("test")', extension: '.js' },
        ];

        expect(selectActiveFile(state)).toEqual(expectedResult);
    });
});