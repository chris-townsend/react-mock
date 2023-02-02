import Feed from "../../components/feed/Feed"
import Navbar from "../../components/navbar/Navbar"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./Home.css"


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />

      </div>

    </>
  )
}
