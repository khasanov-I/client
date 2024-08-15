import { Context, createWrapper } from "next-redux-wrapper";
import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const makeStore = (context: Context) => configureStore({
    reducer: rootReducer
});

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});