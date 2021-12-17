import {
    initialState,
    setFiles,
    addActiveFile,
    removeActiveFile,
    setEditorActiveFile,
    updateFileCode,
    filesReducer
} from '.'

describe('files reducer:', function () {
    it('should set user files when an action is setFiles', function () {
        const userFiles = [{ id: '1', name: 'index.js', relativePath: 'src/index', code: 'console.log("test")', extension: '.js' }];

        const expectedState = {
            ...initialState,
            userFiles,
            activeFilesIds: [],
        };

        expect(filesReducer(initialState, setFiles(userFiles))).toEqual(expectedState);
    });

    it('should add a new file when action is addActiveFile', function () {
        const fileId = '1';

        const expectedState = {
            ...initialState,
            activeFilesIds: [fileId]
        }

        expect(filesReducer(initialState, addActiveFile(fileId))).toEqual(expectedState);
    });

    it('should remove a file when action is removeActiveFile', function () {
        const fileId = '1';

        const modifiedInitialState = {
            ...initialState,
            activeFilesIds: [fileId]
        }

        const expectedState = {
            ...initialState,
            activeFilesIds: []
        }

        expect(filesReducer(modifiedInitialState, removeActiveFile(fileId))).toEqual(expectedState);
    });

    it('should set editor active file id when action is setEditorActiveFile', function () {
        const fileId = '1';

        const expectedState = {
            ...initialState,
            editorActiveFileId: fileId
        }

        expect(filesReducer(initialState, setEditorActiveFile(fileId))).toEqual(expectedState);
    });
});