import DataInfo from "./dataInfo.type";

export type Conversation = {
    conversation: {
        lastMessage: string;
        lastMessageId: number;
        messages: DataInfo[]
    },
    id: string
}