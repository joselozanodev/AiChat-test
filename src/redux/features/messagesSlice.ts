import { createSlice } from "@reduxjs/toolkit";
import { MessageState } from "../../types";
import { Action } from '../../types/messageState.type';

const initialState: MessageState = {
    messages: [],
    messagesAux: []
}

const messagesSlice = createSlice({
    name: "messages",
    initialState: initialState,
    reducers: {

        getAllMessages: (state: MessageState, action: Action)=>{
            state.messages = action.payload
            state.messagesAux = action.payload
        }

    }
})


export const { getAllMessages } = messagesSlice.actions
export default messagesSlice.reducer