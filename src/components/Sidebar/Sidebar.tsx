import { useSelector } from "react-redux"
import DataInfo from "../../types/dataInfo.type"
import ChatInfoPreview from '../atoms/ChatInfoPreview'
import './sidebar.css'

const sidebar = () => {
    
  const messages = useSelector(
    (state:any)=> state.messages.messages
  )

  return (
    <div className="bg-gradient-to-br from-chatBlue-600 to-chatBlue-700 h-[100vh] w-[25%] fixed py-[1rem] overflow-y-scroll" id="sidebar">
        <ul>
           {
            messages.map((info: DataInfo, index: number)=>{
              return(
                
                <ChatInfoPreview name={info.sender_name} date={info.message_date} message={info.message_text} platform={info.platform} key={index}/>
              ) 
            })
           }
        </ul>
    </div>
  )
}

export default sidebar