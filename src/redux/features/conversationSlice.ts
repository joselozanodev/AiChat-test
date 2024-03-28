import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  bot_sender: number;
  business_id: number;
  id: number;
  message_date: string;
  message_text: string;
  platform: string;
  received_number: number;
  reply_to_id: number | null;
  sender_name: string;
  sender_number: number;
}

interface Conversation {
  messages: Message[];
  lastMessage: string;
  lastMessageId: number | null;
}

export interface ConversationState {
  conversations: { [key: string]: Conversation };
  activeConversation: string;
  conversationArray: Object[];
  conversationArrayAux: Object[];
  isLoaded: boolean
}

const initialState: ConversationState = {
  conversations: {},
  activeConversation: "",
  conversationArray: [],
  conversationArrayAux: [],
  isLoaded: false
}

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    saveMessage: (state, action: PayloadAction<Message>) => {
      const { received_number, sender_number, id, message_text } = action.payload;
      let conversationKey = `${received_number}-${sender_number}`;

      const existingConversationKey = Object.keys(state.conversations).find(key =>
        state.conversations[key].messages.some(message =>
          (message.received_number === received_number && message.sender_number === sender_number) ||
          (message.received_number === sender_number && message.sender_number === received_number)
        )
      );

      conversationKey = existingConversationKey || conversationKey;

      if (!state.conversations[conversationKey]) {
        state.conversations[conversationKey] = {
          messages: [],
          lastMessage: '',
          lastMessageId: null
        };
      }

      const existingMessageIndex = state.conversations[conversationKey].messages.findIndex(message => message.id === id);
      if (existingMessageIndex === -1) {
        state.conversations[conversationKey].messages.push(action.payload);
        state.conversations[conversationKey].lastMessage = message_text;
        state.conversations[conversationKey].lastMessageId = id;
      }
    },
    
    setCurrentConversation: (state: ConversationState, action: PayloadAction<string>)=>{
      
      state.activeConversation = action.payload
    },

    createConversationArray: (state: ConversationState)=>{

      if(state.conversationArray.length === 0){
        const conversationEntries = Object.entries(state.conversations)
  
        conversationEntries.map(conversation => state.conversationArray.push({conversation: conversation[1], id: conversation[0]}))
        conversationEntries.map(conversation => state.conversationArrayAux.push({conversation: conversation[1], id: conversation[0]}))
        state.isLoaded = true
      }

    
    },

    filterConversationsByName: (state: ConversationState, action: PayloadAction<string>)=>{

      state.conversationArrayAux = state.conversationArray.filter((conversation: any) => conversation.conversation.messages.find((m: any)=> m.sender_name.toLowerCase().includes(action.payload.toLowerCase())))

    }

  }
})

export const { saveMessage, setCurrentConversation, createConversationArray, filterConversationsByName} = conversationSlice.actions;
export default conversationSlice.reducer;
