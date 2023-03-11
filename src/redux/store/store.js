import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slice/TodoSlice";

const store = configureStore({
    reducer: {
        todoSlice: todoSlice.reducer

    }
})
export default store;