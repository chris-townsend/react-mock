import "./Post.css"

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
            </div>
            <div className="postCenter"></div>
            <div className="postBottom"></div>
        </div>
        
    </div>
  )
}
