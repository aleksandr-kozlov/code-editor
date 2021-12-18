import {closeFile, getNewActiveFileId } from ".";
import { AppDispatch, RootState } from "../../../types/Store";
import { FilesState } from "../../slices/files";

describe('getNewActiveFileId func:', function () {
    it('should return the file located on the left', function () {
        const initialActiveFilesIds = ['1', '2', '3', '4'];
        const fileToBeRemoved = '4';

        expect(getNewActiveFileId(initialActiveFilesIds, fileToBeRemoved)).toEqual('3');
    });

    it('should return the file located on the right', function () {
        const initialActiveFilesIds = ['1', '2', '3', '4'];
        const fileToBeRemoved = '1';

        expect(getNewActiveFileId(initialActiveFilesIds, fileToBeRemoved)).toEqual('2');
    });

    it('should return null', function () {
        const initialActiveFilesIds = ['2'];
        const fileToBeRemoved = '2';

        expect(getNewActiveFileId(initialActiveFilesIds, fileToBeRemoved)).toEqual(null);
    });
});

describe('closeFile thunk: ', function () {
    let dispatch: jest.MockedFunction<AppDispatch>;
    let getState: jest.MockedFunction<() => RootState>;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    })

    it('should close the only active file', function () {
        const initialfilesState: FilesState = {
            activeFilesIds: ['1'],
            editorActiveFileId: '1',
            userFiles: [ { id: '1', name: 'test.js', relativePath: 'src/test.js', code: 'console.log(1234)', extension: '.js' } ]
        }
        const fileIdToBeClosed = '1';
        // @ts-ignore
        getState.mockReturnValue({ files: initialfilesState});

        closeFile(fileIdToBeClosed)(dispatch, getState);

        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: null }]);
        expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/removeActiveFile', payload: fileIdToBeClosed }]);
    });

    it('should close file without active file switching', function () {
        const initialfilesState: FilesState = {
            activeFilesIds: ['1', '2'],
            editorActiveFileId: '1',
            userFiles: [
                { id: '1', name: 'test.js', relativePath: 'src/test.js', code: 'console.log(1234)', extension: '.js' },
                { id: '2', name: 'test2.js', relativePath: 'src/test2.js', code: 'console.log(1234)', extension: '.js' },
            ]
        }
        const fileIdToBeClosed = '2';
        // @ts-ignore
        getState.mockReturnValue({ files: initialfilesState});

        closeFile(fileIdToBeClosed)(dispatch, getState);

        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/removeActiveFile', payload: fileIdToBeClosed }]);
    });

    it('should remove active file and switch to another', function () {
        const initialfilesState: FilesState = {
            activeFilesIds: ['1', '2', '3'],
            editorActiveFileId: '2',
            userFiles: [
                { id: '1', name: 'test.js', relativePath: 'src/test.js', code: 'console.log(1234)', extension: '.js' },
                { id: '2', name: 'test2.js', relativePath: 'src/test2.js', code: 'console.log(1234)', extension: '.js' },
                { id: '3', name: 'test3.js', relativePath: 'src/test3.js', code: 'console.log(1234)', extension: '.js' },
            ]
        }
        const fileIdToBeClosed = '2';
        // @ts-ignore
        getState.mockReturnValue({ files: initialfilesState});

        closeFile(fileIdToBeClosed)(dispatch, getState);

        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: '3' }]);
        expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/removeActiveFile', payload: fileIdToBeClosed }]);
    });
});