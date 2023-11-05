import { Link } from "react-router-dom"
import "../../css/post.css"
import useExplore from "../hooks/useExplore"
import { AiFillLike, AiFillDislike } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"

const ExplorePost = () => {
  const {
    data,
    handlePost,
    handleLikePost,
    handleUnlikePost,
    handleComment,
    comment,
    setComment,
  } = useExplore()

  return (
    <>
      {data.map((item) => (
        <div className="FollowingPost" key={item.id}>
          <div className="post w-full bg-base-100 shadow-xl">
            <Link to={`${item.userId}`} className="FollowingPost_user">
              <div className="FollowingPost_user_img">
                <img src={item?.user?.profilePictureUrl} alt="" />
              </div>
              <p>{item?.user?.username}</p>
            </Link>

            <figure>
              <div onClick={() => handlePost(`${item.id}`)}>
                <img src={item.imageUrl} alt="Shoes" />
              </div>
            </figure>
            <div className="caption">
              <p>{item.caption}</p>
            </div>
            <div className="flex items-center justify-end gap-5 mb-2 mr-10">
              <div className="flex items-center gap-5">
                <label
                  onClick={() => handleLikePost(item.id)}
                  className="flex items-center gap-2"
                >
                  <AiFillLike size={"2rem"} style={{ cursor: "pointer" }} />
                </label>
                <p> {item.totalLikes}Like</p>
                <label
                  onClick={() => handleUnlikePost(item.id)}
                  className="flex items-center gap-2"
                >
                  <AiFillDislike size={"2rem"} style={{ cursor: "pointer" }} />
                </label>
              </div>
              <label htmlFor="comment">
                <BiCommentDetail size={"2rem"} style={{ cursor: "pointer" }} />
              </label>

              <input type="checkbox" id="comment" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <p>Comment di sini</p>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered w-full mt-2"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <div className="modal-action">
                    <label htmlFor="comment" className="btn">
                      Close!
                    </label>
                    <label
                      onClick={() => handleComment(`${item.id}`)}
                      htmlFor="comment"
                      className="btn bg-primary text-white hover:bg-primary-focus"
                    >
                      Edit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ExplorePost
