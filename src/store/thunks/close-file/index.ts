import { AppDispatch, RootState } from "../../../types/Store";
import {removeActiveFile, setEditorActiveFile } from "../../slices/files";

export const getNewActiveFileId = (activeFilesIds: string[], fileIdToClose: string) => {
    const fileToBeRemovedIndex = activeFilesIds.indexOf(fileIdToClose);

    return activeFilesIds[fileToBeRemovedIndex + 1]
        || activeFilesIds[fileToBeRemovedIndex - 1]
        || null;
}

export const closeFile = (fileId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const { files: { activeFilesIds, editorActiveFileId } } = getState();

  if (editorActiveFileId === fileId) {
      const fileToBeActive = getNewActiveFileId(activeFilesIds, fileId);
      dispatch(setEditorActiveFile(fileToBeActive));
  }

  dispatch(removeActiveFile(fileId));
};