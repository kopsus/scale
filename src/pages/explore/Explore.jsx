import ExplorePost from "../../components/explorePost/ExplorePost"
import Navbar from "../../components/navbar/Navbar"
import RightBar from "../../components/rightBar/RightBar"

const Explore = () => {
  return (
    <div className="home">
      <div className="home_leftBar">
        <Navbar />
      </div>
      <div className="home_main">
        <ExplorePost />
      </div>
      <div className="home_rightBar">
        <RightBar />
      </div>
    </div>
  )
}

export default Explore
