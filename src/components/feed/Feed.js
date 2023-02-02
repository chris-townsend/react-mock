import Post from "../posts/Post"
import Share from "../share/Share"
import "./Feed.css"

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post />

            </div>
        </div>
    )
}
