import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CounterT = {
  count: number;
};
const initialState: CounterT = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementByFive: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload; //action ta mainly parameter er vitor er data niya ase ja payload name thake
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { decrement, increment, incrementByFive } = counterSlice.actions;
export default counterSlice.reducer;

// action.payload e --- useDispatch() theka reducer er slice kora sate call kore oitar param e pathano hoy er state er data thake

// is short action.payload = reducer e pathano parameter
