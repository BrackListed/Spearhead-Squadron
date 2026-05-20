import { configureStore } from "@reduxjs/toolkit";
import squadronReducer from "./SquadronSlice"
export type RootState = ReturnType<typeof Store.getState>

export const Store = configureStore({
  reducer: {
    squadronCharacters: squadronReducer //takes the entire squadronslice
  }
})