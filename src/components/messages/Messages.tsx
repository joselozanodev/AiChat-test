import { useSelector } from "react-redux"
import './messages.css'
import { MessageProps } from "./types"
import DataInfo from "../../types/dataInfo.type"



export const Message = ({ text, isSender }: MessageProps) =>{
  return(
  <div className={`bg-gradient-to-bl inline-flex px-[.6rem] py-[.7rem] rounded-[6px] shadow-sm ${isSender ? "shadow-chatBlue-700 from-chatBlue-500 to-chatBlue-600 self-end" : "shadow-chatBlue-700 from-chatBlue-700 to-chatBlue-800 self-start"} `}>
  <p className="font-lato font-[400] text-chatBlue-100">{text}</p>
</div>
  )
}

const ChatContainer = () => {

        
  const messages = useSelector(
    (state:any)=> state.messages?.messages
  )

  return (
    <>
    <div className="h-[100vh] w-full z-[100] pl-[25%]" id="messages">
      <div className="bg-black h-[100vh] z-[50] bg-opacity-40 flex flex-col items-center justify-center gap-[3rem] px-[25%] pt-[15%] pb-[3%] overflow-y-scroll" id="messagesContainer">
        {
          messages?.map((message: DataInfo, index: number)=>{
            return(
              <Message text={message?.message_text} key={index} isSender={ message?.sender_name === 'bot' ? true : false }/>
            )
          })
        }

      </div>
    </div>
    </>
  )
}

export default ChatContainer