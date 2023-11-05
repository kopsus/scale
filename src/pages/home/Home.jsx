import FollowingPost from "../../components/followingPost/followingPost"
import Navbar from "../../components/navbar/Navbar"
import RightBar from "../../components/rightBar/RightBar"

const Home = () => {
  return (
    <div className="home">
      <div className="home_leftBar">
        <Navbar />
      </div>
      <div className="home_main">
        <FollowingPost />
      </div>
      <div className="home_rightBar">
        <RightBar />
      </div>
    </div>
  )
}

export default Home
