import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definir la estructura de un mensaje
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

// Definir la estructura de una conversación
interface Conversation {
  messages: Message[];
  lastMessage: string;
  lastMessageId: number | null;
}

// Definir el estado inicial con una firma de índice
interface ConversationState {
  conversations: { [key: string]: Conversation };
  activeConversation: string
}

const initialState: ConversationState = {
  conversations: {},
  activeConversation: ""
}

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    saveMessage: (state, action: PayloadAction<Message>) => {
      const { received_number, sender_number, id, message_text } = action.payload;
      // Crear una clave única para la conversación
      let conversationKey = `${received_number}-${sender_number}`;

      // Buscar la conversación existente que coincida con ambos números
      const existingConversationKey = Object.keys(state.conversations).find(key =>
        state.conversations[key].messages.some(message =>
          (message.received_number === received_number && message.sender_number === sender_number) ||
          (message.received_number === sender_number && message.sender_number === received_number)
        )
      );

      conversationKey = existingConversationKey || conversationKey;

      // Si la conversación no existe, inicializarla
      if (!state.conversations[conversationKey]) {
        state.conversations[conversationKey] = {
          messages: [],
          lastMessage: '',
          lastMessageId: null
        };
      }

      // Verificar si el mensaje ya existe para evitar duplicados
      const existingMessageIndex = state.conversations[conversationKey].messages.findIndex(message => message.id === id);
      if (existingMessageIndex === -1) {
        // Agregar el mensaje al array de la conversación si no existe
        state.conversations[conversationKey].messages.push(action.payload);
        // Actualizar el último mensaje y su ID
        state.conversations[conversationKey].lastMessage = message_text;
        state.conversations[conversationKey].lastMessageId = id;
      }
    },
    // Agregar más reducers según sea necesario
  }
})

export const { saveMessage } = conversationSlice.actions;
export default conversationSlice.reducer;
