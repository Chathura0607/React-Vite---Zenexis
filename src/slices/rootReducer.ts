import {combineReducers} from "redux";
import productReducer from "./productSlice.ts";
import contactReducer from "./contactSlice.ts";
import cartReducer from "./cartSlice.ts";

combineReducers({
    products:productReducer,
    cart:cartReducer,
    contacts:contactReducer
});

export const rootReducer = combineReducers({products:productReducer,cart:cartReducer,contacts:contactReducer});

export type RootState = ReturnType<typeof rootReducer>;