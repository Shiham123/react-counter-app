import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    customValue(state, action) {
      state.counter += action.payload;
    },
  },
});

const actions = counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });

export { actions, store };
