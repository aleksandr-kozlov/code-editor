import { readFiles } from '.';
import { readFile } from "../../../utils/read-file";
import { AppDispatch, RootState } from '../../../types/Store';
import { createMockFileList } from '../../../utils/tests/mock-file';

jest.mock("../../../utils/read-file");

describe('readFiles thunk: ', function () {
    let dispatch: jest.MockedFunction<AppDispatch>;
    let getState: jest.MockedFunction<() => RootState>;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    })

    it('should reads two files', async function () {
        const userFiles = [
            {id: '1', name: 'test.js', relativePath: 'src/test.js', code: 'console.log(1234)', extension: '.js'},
            {id: '2', name: 'test2.js', relativePath: 'src/test2.js', code: 'console.log(1234)', extension: '.js'},
        ];
        (readFile as jest.Mock).mockReturnValueOnce(userFiles[0]);
        (readFile as jest.Mock).mockReturnValueOnce(userFiles[1]);
        const list = createMockFileList([
            {
                body: 'test',
                mimeType: 'text/plain',
                name: 'test.txt'
            },
            {
                body: 'test',
                mimeType: 'text/plain',
                name: 'test.txt'
            }
        ])

        await readFiles(list)(dispatch, getState, null);

        // @ts-ignore createAsyncThunk mechanism
        const [[{ type: pendingType }], [{ type: actionType, payload }], [{ type: fulfilledType }]] = dispatch.mock.calls;
        expect(dispatch).toBeCalledTimes(3);
        expect(pendingType).toEqual('files/readFiles/pending');
        expect({ type: actionType, payload }).toEqual({ type: 'files/setFiles', payload: userFiles });
        expect(fulfilledType).toEqual('files/readFiles/fulfilled');
    });
});