import { Followers, Following } from "../../components/follow/follow"
import Navbar from "../../components/navbar/Navbar"
import "../../css/user.css"
import useProfile from "../../components/hooks/useProfile"
const Profile = () => {
  const { dataUser } = useProfile()

  return (
    <div className="profile">
      <div className="home_leftBar">
        <Navbar />
      </div>
      <div className="user" key={dataUser?.id}>
        <div className="user_img">
          <img src={dataUser?.profilePictureUrl} alt="" />
        </div>
        <div className="user_desc flex flex-col gap-5">
          <p>{dataUser?.name}</p>
          <p>{dataUser?.bio}</p>
          <p>{dataUser?.email}</p>
          <p>{dataUser?.phoneNumber}</p>
          <p>{dataUser?.website}</p>
        </div>
        <div className="user_follow">
          <label htmlFor="followers">
            <p>{dataUser?.totalFollowers}</p>
            <p>Follower</p>
          </label>
          <Followers />
          <label htmlFor="following">
            <p>{dataUser?.totalFollowing}</p>
            <p>Following</p>
          </label>
          <Following />
        </div>
      </div>
    </div>
  )
}

export default Profile
