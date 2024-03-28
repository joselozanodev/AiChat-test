import DataInfo from "./dataInfo.type";

export type ConversationState = {
    conversations: {}
}

export type Conversation = {
    conversation: {
        lastMessage: string;
        lastMessageId: number;
        messages: DataInfo[]
    }
}