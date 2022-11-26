import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

export interface AuthState {
    username: string;
    firstName: string;
    lastName: string;
}

const token = window.localStorage.getItem('token');
let initialState = null;
if (token) {
    const { user } = jwtDecode<{ user: AuthState }>(token);
    initialState = user;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            const { user } = jwtDecode<{ user: AuthState }>(action.payload);
            state = { ...user }
            window.localStorage.setItem('token', action.payload);
            return state;
        }
    }
})

export const { login } = authSlice.actions;
export default authSlice.reducer;