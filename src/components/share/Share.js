import "./Share.css"
import { PermMedia } from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImage" src="/assets/images/people/person-1.jpg" alt="" />
                <input placeholder="What's in your mind Jerry?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOptions">
                        <PermMedia />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
