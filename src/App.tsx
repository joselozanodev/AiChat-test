import { useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getAllMessages } from './redux/features/messagesSlice'

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

      <aside className='w-full'>
        <Sidebar />
      </aside>

      <section >

      </section>

    </main>
  )
}

export default App
