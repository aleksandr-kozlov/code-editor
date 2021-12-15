import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from "../types/Store";

/**
 * Typed use dispatch hook
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed use selector hook
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;