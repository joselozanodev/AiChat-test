import { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from "axios";
import { useDispatch } from "react-redux";
import Messages from "./components/messages/Messages";
import { createConversationArray, saveMessage } from "./redux/features/conversationSlice";
import DataInfo from "./types/dataInfo.type";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await axios("http://www.app.readychatai.com/data");

      if (data) {
        data.map((message: DataInfo) => {
          dispatch(saveMessage(message));
        });
      }

      dispatch(createConversationArray())
    };
    fetchMessages();
  }, []);

  return (
    <main className="flex">
      <aside className="z-10">
        <Sidebar />
      </aside>

      <section className="w-full">
        <Messages />
      </section>
    </main>
  );
}

export default App;
