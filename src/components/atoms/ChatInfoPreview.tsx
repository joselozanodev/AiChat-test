import { setCurrentConversation } from "../../redux/features/conversationSlice";
import { MessagePreviewProps } from "./types";
import { useDispatch } from "react-redux";


const ChatInfoPreview = ({
  name,
  platform,
  date,
  message,
  key,
  id,
}: MessagePreviewProps) => {
  const splitDate = date.split("T");

  const timeWithSeconds = splitDate[1].split("Z")[0];

  const time = timeWithSeconds.split(":").splice(0, 2).join(":");

  const dispatch = useDispatch()

  return (
    <>
      {name !== "bot" && (
        <li key={key} className="flex justify-center cursor-pointer"
          onClick={()=>{ dispatch(setCurrentConversation(id)) }}
        >
          <section className="font-lato text-chatBlue-50 bg-chatBlue-500 hover:bg-chatBlue-400 transition-all mb-[1rem] w-[90%] p-[1rem] flex items-center rounded-[5px]">
            <div className="w-[85%]">
              <h3 className="text-slate-200 font-[600] text-[.8rem]">
                {platform}
              </h3>
              <h2 className="font-[700] text-[1.2rem] text-white">{name}</h2>
              <p className="text-ellipsis text-nowrap overflow-hidden w-[70%] text-[.9rem] font-[300] text-slate-100">
                {message}
              </p>
            </div>
            <p>{time}</p>
          </section>
        </li>
      )}
    </>
  );
};

export default ChatInfoPreview;
