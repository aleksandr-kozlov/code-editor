import store from '../store';

/**
 * Root state type
 */
export type RootState = ReturnType<typeof store.getState>

/**
 * App dispatch type
 */
export type AppDispatch = typeof store.dispatch;