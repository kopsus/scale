import DetailUserPost from "../../components/detailUserPost/DetailUserpPost"
import Navbar from "../../components/navbar/Navbar"
import RightBar from "../../components/rightBar/RightBar"
import "../../css/user.css"

const UserFollowingPost = () => {
  return (
    <div className="home">
      <div className="home_leftBar">
        <Navbar />
      </div>
      <div className="home_main">
        <DetailUserPost />
      </div>
      <div className="home_rightBar">
        <RightBar />
      </div>
    </div>
  )
}

export default UserFollowingPost
