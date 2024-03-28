import { useSelector } from "react-redux"
import './messages.css'
import { MessageProps } from "./types"
import DataInfo from "../../types/dataInfo.type"



export const Message = ({ text, isSender }: MessageProps) =>{
  return(
  <div className={`bg-gradient-to-bl inline-flex px-[.6rem] py-[.7rem] rounded-[6px] shadow-sm ${isSender ? "shadow-chatBlue-700 from-chatBlue-700 to-chatBlue-800 self-start max-w-[60%]" : "shadow-chatBlue-700 from-chatBlue-500 to-chatBlue-600 self-end max-w-[60%]"} `}>
  <p className="font-lato font-[400] text-chatBlue-100">{text}</p>
</div>
  )
}

const ChatContainer = () => {

  const conversationsArray: any = []
  
  const conversations = useSelector((state: any)=> state.conversations.conversations )

   const conversationEntries = Object.entries(conversations)

   conversationEntries.map(conversation => conversationsArray.push({conversation: conversation[1], id: conversation[0]}))
        
  const conversationId = useSelector((state:any)=> state.conversations?.activeConversation)

  const conversationMessages = conversationsArray.find((conversation: any)=>  conversation?.id === conversationId)?.conversation?.messages

  return (
    <>
    <div className="h-[100vh] w-full z-[100] pl-[25%]" id="messages">
      <div className="bg-black h-[100vh] z-[50] bg-opacity-40 flex flex-col items-center justify-center gap-[3rem] px-[25%] pt-[15%] pb-[3%] overflow-y-scroll" id="messagesContainer">
        {
         conversationMessages?.map((message: DataInfo, index: number)=>{
          return(
            <Message text={message.message_text} isSender={message.sender_name !== 'bot' ? true : false} key={index} />
          )
         })
        }

      </div>
    </div>
    </>
  )
}

export default ChatContainer