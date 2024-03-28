import { useState } from "react"
import { useDispatch } from 'react-redux';
import { filterConversationsByName } from "../../redux/features/conversationSlice";


const Searchbar = () => {

  const [user, setUser] = useState<string>("")

  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event 

    setUser(target.value)
    dispatch(filterConversationsByName(target.value))

  }


  return (
    <>
      <input type="text" name='sender_name' className="w-[90%] h-[3rem] mx-auto rounded-[5px] px-[1rem] font-lato font-[600] text-[1.1rem] bg-chatBlue-100 placeholder:text-gray-400 text-gray-600 focus:outline-chatBlue-600" placeholder="Search user" value={user} onChange={handleChange} />
    </>
  )
}

export default Searchbar