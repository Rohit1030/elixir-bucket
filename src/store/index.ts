import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { layoutStateSlice } from "./layoutStateSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    layoutState: layoutStateSlice.reducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;