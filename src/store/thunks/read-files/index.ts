import { createAsyncThunk } from "@reduxjs/toolkit";
import { readFile } from "../../../utils/read-file";
import { setFiles } from "../../slices/files";

/**
 * Read files thunk
 */
export const readFiles = createAsyncThunk('files/readFiles', async (files: FileList, { dispatch }) => {
    const userFiles = await Promise.all(Array.from(files).map(file => readFile(file)));

    dispatch(setFiles(userFiles));
});