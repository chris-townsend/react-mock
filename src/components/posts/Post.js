import "./Post.css"
import { MoreVertOutlined } from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImage" alt="" src="/assets/images/people/person-1.jpg" />
                    <span className="postUserName">Ben Skinner</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight"></div>
                <MoreVertOutlined />
            </div>
            <div className="postCenter">
              <span className="postText">Hey, this is my first post!</span>
              <img className="postImg" src="/assets/images/posts/post-1.jpg" alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/images/posts/like-button.png" alt="" />
                <img className="likeIcon" src="/assets/images/posts/heart-button.png" alt="" />
                <span className="postLikeCounter">42 people liked this</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>

              </div>
            </div>
        </div>
        
    </div>
  )
}
