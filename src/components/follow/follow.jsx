import "./follow.css"
import useFollow from "../hooks/useFollow"

export const Followers = () => {
  const { userFollowers, handleUserFollowing } = useFollow()

  return (
    <>
      <input type="checkbox" id="followers" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {/* close modal */}
          <div className="modal-action">
            <label
              htmlFor="followers"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
          <h3 className="font-bold text-lg text-center mb-4">Followers</h3>
          <input
            type="search"
            placeholder="Search here"
            className="input-sm input input-bordered w-full"
          />
          <div className=" h-80 overflow-y-scroll">
            {userFollowers.map((item) => (
              <div
                onClick={() => handleUserFollowing(`${item.id}`)}
                className="user_follower"
                key={item.id}
              >
                <div className="user_follow_img">
                  <img src={item.profilePictureUrl} alt="" />
                </div>
                <div className="user_follow_desc">
                  <p>{item.username}</p>
                  <p>{item.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const Following = () => {
  const { userFollowing, handleUserFollowing } = useFollow()

  return (
    <>
      <input type="checkbox" id="following" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <label
              htmlFor="following"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
          <h3 className="font-bold text-lg text-center mb-4">Following</h3>
          <input
            type="search"
            placeholder="Search here"
            className="input-sm input input-bordered w-full"
          />
          <div className=" h-80 overflow-y-scroll">
            {userFollowing.map((item) => (
              <div
                onClick={() => handleUserFollowing(`${item.id}`)}
                className="user_following"
                key={item.id}
              >
                <div className="user_follow_img">
                  <img src={item.profilePictureUrl} alt="" />
                </div>
                <div className="user_follow_desc">
                  <p>{item.username}</p>
                  <p>{item.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
