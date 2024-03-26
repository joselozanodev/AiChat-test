import DataInfo from "./dataInfo.type";

export type MessageState = {
    messages: DataInfo[] | [];
    messagesAux: DataInfo[] | [];
}

export type Action = {
    payload: DataInfo[];
    type: string;
}