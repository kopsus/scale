import Navbar from "../../components/navbar/Navbar"
import "../../css/user.css"

const UserFollowers = () => {
  return (
    <div className="profile">
      <div className="home_leftBar">
        <Navbar />
      </div>
      <div className="user">
        <div className="user_img">
          <img
            src="https://cdn.dribbble.com/userupload/10019423/file/original-898b3577e624cd3724b6a08066236640.png"
            alt=""
          />
        </div>
        <div className="user_desc">
          <p>asu</p>
          <p>Email</p>
        </div>
      </div>
    </div>
  )
}

export default UserFollowers
