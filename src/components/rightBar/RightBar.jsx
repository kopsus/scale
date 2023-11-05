import "./rightBar.css"
import useFollow from "../hooks/useFollow"

const RightBar = () => {
  const { userFollowing, handleUserFollowing } = useFollow()

  return (
    <div className="following">
      <div className="rightBar">
        <div className="rightBar_content mb-10">
          <p>Following</p>
        </div>
        {userFollowing.map((item) => (
          <div
            onClick={() => handleUserFollowing(`${item.id}`)}
            className="rightBar_user"
            key={item.id}
          >
            <div className="rightBar_user_img">
              <img src={item.profilePictureUrl} alt="" />
            </div>
            <div className="rightBar_user_desc">
              <p>{item.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightBar
