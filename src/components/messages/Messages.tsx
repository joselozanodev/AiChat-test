import { useSelector } from "react-redux"
import './messages.css'
import { MessageProps } from "./types"



export const Message = ({ text, isSender }: MessageProps) =>{
  return(
  <div className={`bg-gradient-to-bl inline-flex px-[.6rem] py-[.7rem] rounded-[6px] shadow-sm ${isSender ? "shadow-chatBlue-700 from-chatBlue-500 to-chatBlue-600" : "shadow-chatBlue-700 from-chatBlue-700 to-chatBlue-800"} `}>
  <p className="font-lato font-[400] text-chatBlue-100">{text}</p>
</div>
  )
}

const ChatContainer = () => {

        
  const messages = useSelector(
    (state:any)=> state.messages.messages
  )

  return (
    <>
    <div className="h-[100vh] w-full z-[100] pl-[25%]" id="messages">
      <div className="bg-black h-[100vh] z-[50] bg-opacity-40">
        <Message text="HOLA MUY BUENOS DIAS" isSender={false} />
        <Message text="HOLA MUY BUENOS DIAS" isSender={true} />
      </div>
    </div>
    </>
  )
}

export default ChatContainer