import { configureStore } from '@reduxjs/toolkit';

const reducerFn = (state, action) => {};

const store = configureStore({ reducer: reducerFn });

export default store;
