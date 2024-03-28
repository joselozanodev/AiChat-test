import { useSelector } from "react-redux"
import ChatInfoPreview from '../atoms/ChatInfoPreview'
import './sidebar.css'
import { Conversation } from "../../types";
import Searchbar from "../atoms/Searchbar";
const sidebar = () => {

      const conversations = useSelector(
        (state:any)=> state.conversations
      )

      

  return (
    <div className="bg-gradient-to-br from-chatBlue-600 to-chatBlue-700 h-[100vh] w-[25%] fixed  overflow-y-scroll flex flex-col justify-center gap-[1rem] md:pt-[40%] lg:pt-[30%] xl:pt-[25%] 2xl:pt-[2%]" id="sidebar">
      <nav className="w-full inline-flex">
        <Searchbar />
      </nav>
        <ul>
           {
               conversations.isLoaded && conversations.conversationArrayAux.map((conversation: Conversation, index: number)=>{
                  const userName = conversation?.conversation?.messages?.find(message => message.sender_name !== 'bot')?.sender_name || 'Usuario desconocido';
                  return(<ChatInfoPreview name={userName} date={conversation.conversation?.messages[0]?.message_date} key={index} message={conversation.conversation?.lastMessage} platform={conversation.conversation?.messages[0]?.platform} id={conversation?.id} />)
                })
           }
        </ul>
    </div>
  )
}

export default sidebar