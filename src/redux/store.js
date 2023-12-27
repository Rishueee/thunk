import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk"

import { userReducer } from "../redux/reduce";

export const Store = configureStore({
    reducer:{

        userReducer,
    },
    middleware: 
    
    
    
    (getDefaultMiddleware)=> getDefaultMiddleware().concat(thunk)
})