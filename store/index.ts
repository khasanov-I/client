import {Context, createWrapper } from "next-redux-wrapper";
import {reducer } from "./reducers";
import { configureStore} from "@reduxjs/toolkit";

const makeStore = (context: Context) => configureStore({
    reducer: reducer
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// export an assembled wrapper
export const wrapper = createWrapper<AppStore>(makeStore, {debug: true});