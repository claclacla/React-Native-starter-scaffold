import { createSlice } from '@reduxjs/toolkit';

import { LocalStorageAuthentication } from '../entities/LocalStorageAuthentication';

const authentication: LocalStorageAuthentication = {
    key: "",
    isLogged: false
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: authentication,
    reducers: {
        setLocalStorageKey(state, action) {
            state.key = action.payload;
            state.isLogged = true;
        },
        unsetLocalStorageKey(state) {
            state.key = "";
            state.isLogged = false;
        }
    }
})

export const { setLocalStorageKey, unsetLocalStorageKey } = authenticationSlice.actions
export default authenticationSlice.reducer