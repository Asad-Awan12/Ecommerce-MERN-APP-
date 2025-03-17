import { configureStore, createReducer } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import {authApi} from '../Redux/features/Users/usersAuth'
import userReducer from "../Redux/features/Users/authSlice"
import { productApi } from './features/Products/ProductSlice'
import cartReducer from '../Redux/features/Products/Cart'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    user:userReducer,
    cart:cartReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,productApi.middleware),
})

