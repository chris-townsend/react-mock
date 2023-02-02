import "./Sidebar.css"
import { DynamicFeed, ChatBubbleOutline, OndemandVideo, GroupsOutlined, BookmarksOutlined, QuestionAnswerOutlined, WorkOutline, EventOutlined, SchoolOutlined } from "@mui/icons-material"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <DynamicFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <OndemandVideo className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarksOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionAnswerOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="SidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/images/people/person-2.jpg" alt="" />
                        <span className="sidebarFriendName">Ben Skinner</span>
                    </li>
                    <li className="SidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/images/people/person-2.jpg" alt="" />
                        <span className="sidebarFriendName">Ben Skinner</span>
                    </li>
                    <li className="SidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/images/people/person-2.jpg" alt="" />
                        <span className="sidebarFriendName">Ben Skinner</span>
                    </li>
                    <li className="SidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/images/people/person-2.jpg" alt="" />
                        <span className="sidebarFriendName">Ben Skinner</span>
                    </li>
                    <li className="SidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/images/people/person-2.jpg" alt="" />
                        <span className="sidebarFriendName">Ben Skinner</span>
                    </li>
                    <li className="SidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/images/people/person-2.jpg" alt="" />
                        <span className="sidebarFriendName">Ben Skinner</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
