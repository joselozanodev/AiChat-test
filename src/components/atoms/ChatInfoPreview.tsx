import { MessagePreviewProps } from "./types";
const ChatInfoPreview = ({
  name,
  platform,
  date,
  message,
  key,
}: MessagePreviewProps) => {
  const splitDate = date.split("T");

  const timeWithSeconds = splitDate[1].split("Z")[0];

  const time = timeWithSeconds.split(":").splice(0, 2).join(":");

  return (
    <>
      {name !== "bot" && (
        <li key={key} className="flex justify-center">
          <section className="font-lato text-chatBlue-50 bg-chatBlue-500 mb-[1rem] w-[90%] p-[1rem] flex items-center rounded-[5px]">
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
