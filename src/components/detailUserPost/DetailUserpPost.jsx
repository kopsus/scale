import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import "./detailUserPost.css"
import useExplore from "../hooks/useExplore"
import swal from "sweetalert"

const DetailUserPost = () => {
  const params = useParams()
  const [data, setData] = useState([])
  const { handlePost } = useExplore()

  const keyCurrent = localStorage.getItem("token")
  if (!keyCurrent) {
    console.error("Token tidak ditemukan di localStorage.")
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const configKeyCurrent = {
    apiKey: import.meta.env.VITE_APIKEY,
    Authorization: `Bearer ${keyCurrent}`,
  }
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BASEURL}/api/v1/users-post/${
          params.userId
        }?size=10&page=1`,
        { headers: configKeyCurrent }
      )
      .then((res) => {
        const data = res.data.data.posts
        setData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [configKeyCurrent, params.userId])

  const handleFollow = (userIdFollow) => {
    const payload = {
      userIdFollow: userIdFollow,
    }

    axios
      .post(`${import.meta.env.VITE_BASEURL}/api/v1/follow`, payload, {
        headers: configKeyCurrent,
      })
      .then((res) => {
        swal("Good", `${res.data.message}`, "success")
      })
      .catch((err) => swal("Good", `${err.response.data.message}`, "warning"))
  }

  const handleUnFollow = () => {
    axios
      .delete(
        `${import.meta.env.VITE_BASEURL}/api/v1/unfollow/${params.userId}`,
        {
          headers: configKeyCurrent,
        }
      )
      .then((res) => {
        swal("Good", `${res.data.message}`, "success")
      })
      .catch((err) => swal("Good", `${err.response.data.message}`, "warning"))
  }

  return (
    <div className="DetailUserPost_content">
      {data.slice(0, 1).map((user) => (
        <div className="DetailUserPost_content_user" key={user.id}>
          <div className="DetailUserPost_content_user_img">
            <img src={user?.user?.profilePictureUrl} alt="" />
          </div>
          <div className="DetailUserPost_content_user_desc">
            <p>{user?.user?.username}</p>
            <p>{user?.user?.email}</p>
          </div>
          <div className="flex gap-10">
            <button
              type="button"
              onClick={() => handleFollow(`${user.userId}`)}
              className="btn btn-accent btn-sm text-white"
            >
              Follow
            </button>
            <button
              onClick={() => handleUnFollow(`${user.userId}`)}
              className="btn btn-accent btn-sm text-white"
            >
              unfollow
            </button>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-5">
        {data.map((post) => (
          <div className="content" key={post.id}>
            <div
              onClick={() => handlePost(`${post.id}`)}
              className="card card-compact w-80 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={post.imageUrl} />
              </figure>
              <div className="card-body">
                <p>{post.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailUserPost
