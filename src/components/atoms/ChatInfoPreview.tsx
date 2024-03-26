import { MessagePreviewProps } from "./types"
const ChatInfoPreview = ({name, platform, date, message, key}: MessagePreviewProps) => {

    return (
    <li key={key}>
        <section>
            <h3>{platform}</h3>
            <h2>{name}</h2>
            <p>{message}</p>
            <p>{date}</p>
        </section>
    </li>
  )
}

export default ChatInfoPreview