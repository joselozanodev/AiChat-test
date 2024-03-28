import { useSelector } from "react-redux"
import ChatInfoPreview from '../atoms/ChatInfoPreview'
import './sidebar.css'
import { Conversation } from "../../types";

const sidebar = () => {
    
  const conversations = useSelector(
    (state:any)=> state.conversations.conversations
  )

   const conversationsArray: any = []

   const conversationEntries = Object.entries(conversations)

   conversationEntries.map(conversation => conversationsArray.push({conversation: conversation[1], id: conversation[0]}))

    console.log(conversationsArray)

  return (
    <div className="bg-gradient-to-br from-chatBlue-600 to-chatBlue-700 h-[100vh] w-[25%] fixed py-[1rem] overflow-y-scroll" id="sidebar">
        <ul>
           {

                conversationsArray.map((conversation: Conversation, index: number)=>{
                  const userName = conversation.conversation.messages.find(message => message.sender_name !== 'bot')?.sender_name || 'Usuario desconocido';
                  return(<ChatInfoPreview name={userName} date={conversation.conversation?.messages[0]?.message_date} key={index} message={conversation.conversation.lastMessage} platform={conversation.conversation.messages[0].platform} id={conversation.id} />)
                })
              
           }
        </ul>
    </div>
  )
}

export default sidebar