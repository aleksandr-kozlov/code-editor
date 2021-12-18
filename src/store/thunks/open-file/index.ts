import { TreeViewNode } from "../../../types/Files";
import { AppDispatch, RootState } from "../../../types/Store";
import { addActiveFile, setEditorActiveFile } from "../../slices/files";

/**
 * Open file thunk
 *
 * @param node
 */
export const openFile = (node: TreeViewNode) => (dispatch: AppDispatch, getState: () => RootState) => {
    const { id, children } = node;

    if (Array.isArray(children)) {
        return;
    }

    const { files: { activeFilesIds } } = getState();

    if (!activeFilesIds.includes(id)) {
        dispatch(addActiveFile(id));
    }

    dispatch(setEditorActiveFile(id));
}