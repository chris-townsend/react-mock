import "./Share.css"
import { PermMedia, Label, RoomOutlined, EmojiEmotionsOutlined } from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImage" src="/assets/images/people/person-1.jpg" alt="" />
                <input placeholder="What's on your mind Jerry?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="grey" />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="turquoise" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <RoomOutlined htmlColor="green" />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsOutlined htmlColor="gold" />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
