import { openFile } from '.';
import { TreeViewNode } from '../../../types/Files';
import { AppDispatch, RootState } from '../../../types/Store';

describe('openFile thunk:', function () {
    let dispatch: jest.MockedFunction<AppDispatch>;
    let getState: jest.MockedFunction<() => RootState>;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    })

    it('should not open a node if it has children', function () {
        const node: TreeViewNode = { id: '1', name: 'javascript', children: [{ id: '2', extension: '.js', name: 'test.js' }] };

        openFile(node)(dispatch, getState);

        expect(dispatch).not.toHaveBeenCalled();
        expect(getState).not.toHaveBeenCalled();
    });

    it('should open the node if it is not already opened', function () {
        // @ts-ignore
        getState.mockReturnValue({ files: { activeFilesIds: [] }})
        const node = { id: '1', name: 'javascript' };

        openFile(node)(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/addActiveFile', payload: node.id }])
        expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/setEditorActiveFile', payload: node.id }])
    });

    it("should open the node if it's already opened", function () {
        // @ts-ignore
        getState.mockReturnValue({ files: { activeFilesIds: ['1'] }})
        const node = { id: '1', name: 'javascript' };

        openFile(node)(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: node.id }])
    });
});