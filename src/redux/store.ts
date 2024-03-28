import { configureStore } from "@reduxjs/toolkit";
import conversationSlice from "./features/conversationSlice";



const store = configureStore({
    reducer: {
        conversations: conversationSlice
    },
})

export default store