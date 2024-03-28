import { ConversationState } from "../redux/features/conversationSlice";


export type State = {
    conversations: ConversationState;
    messages: {}
}