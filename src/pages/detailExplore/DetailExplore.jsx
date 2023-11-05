import DetailPost from "../../components/detailPost/DetailPost"
import Navbar from "../../components/navbar/Navbar"
import RightBar from "../../components/rightBar/RightBar"

const DetailExplore = () => {
  return (
    <div className="home">
      <div className="home_leftBar">
        <Navbar />
      </div>
      <div className="home_main">
        <DetailPost />
      </div>
      <div className="home_rightBar">
        <RightBar />
      </div>
    </div>
  )
}

export default DetailExplore
