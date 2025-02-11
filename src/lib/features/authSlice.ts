import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
    user: string | null;
    authStatus: boolean;
};

const initialState: TInitialState = {
    authStatus:false ,
    user : null,
};
const usernameStore = "molagribussiness.limited.warioba";
const passwordStore = "warioba.moses12345";

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {

            const { username, password} = action.payload;
            console.log(username, password)

            if (username === usernameStore && password === passwordStore ) {
                
                const token  = Math.random() * 10000000000000000000;
                localStorage.setItem('tkn', String(token));
                state.authStatus = true;
                state.user = String(token);

            }
            else {
                state.user = null;
                state.authStatus = false;
            }
        },
        setAuthStatus: (state, action) => {
            state.authStatus = action.payload;
        },

        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setAuthStatus, setUser , login} = authSlice.actions;
export default authSlice.reducer;
