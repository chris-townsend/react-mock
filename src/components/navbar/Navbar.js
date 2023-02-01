import { Search, PersonPinCircleRounded, Chat, CircleNotifications } from "@mui/icons-material"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Search for friends, posts and more" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarLinks">
          <div className="topbarIconItem">
            <PersonPinCircleRounded />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarLinks">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <div className="topbarLinks">
          <div className="topbarIconItem">
            <CircleNotifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      <img src="/assets/images/people/person-1.jpg" alt="" className="topbarImg" />
      </div>

    </div>
  )
}
