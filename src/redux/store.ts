import { configureStore } from "@reduxjs/toolkit";
import messagesSlice from "./features/messagesSlice";
import conversationSlice from "./features/conversationSlice";



const store = configureStore({
    reducer: {
        messages: messagesSlice,
        conversations: conversationSlice
    },
})

export default store