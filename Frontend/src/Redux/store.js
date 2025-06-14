import { configureStore, createReducer } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
// import {authApi} from '../Redux/features/Users/usersAuth'
// import userReducer from "../Redux/features/Users/authSlice"
// import { productApi } from './features/Products/ProductSlice'
import cartReducer from '../Redux/features/Products/Cart'
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({ 
  cart: cartReducer,
  // notes: NotesReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);






// export const store = configureStore({
//   reducer: {
    // Add the generated reducer as a specific top-level slice
    // [authApi.reducerPath]: authApi.reducer,
    // [productApi.reducerPath]: productApi.reducer,
    // user:userReducer,
  //   cart:cartReducer,
  // },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authApi.middleware,),
// })

