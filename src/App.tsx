import { useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getAllMessages } from './redux/features/messagesSlice'
import Messages from './components/messages/Messages'

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    const fetchMessages = async () =>{
      const {data} = await axios('http://www.app.readychatai.com/data')

      dispatch(getAllMessages(data))
    }
    fetchMessages()
  },[])


  return (
    <main className='flex'>

      <aside className='z-10'>
        <Sidebar />
      </aside>

      <section className='w-full'>
        <Messages />
      </section>

    </main>
  )
}

export default App
