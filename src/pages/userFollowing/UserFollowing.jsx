import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import "../../css/user.css"
import axios from "axios"
import { useParams } from "react-router-dom"

const UserFollowing = () => {
  const [user, setUser] = useState([])
  const params = useParams()

  useEffect(() => {
    const keyCurrent = localStorage.getItem("token")
    if (!keyCurrent) {
      console.error("Token tidak ditemukan di localStorage.")
    }

    const configKeyCurrent = {
      Authorization: `Bearer ${keyCurrent}`,
      apiKey: import.meta.env.VITE_APIKEY,
      "Content-Type": "application/json",
    }

    axios
      .get(
        `${import.meta.env.VITE_BASEURL}/api/v1/following/${
          params.id
        }?size=10&page=1`,
        {
          headers: configKeyCurrent,
        }
      )
      .then((res) => setUser(res.data.data.users[0]))
      .catch((err) => console.log(err))
  }, [params.id])

  return (
    <div className="profile">
      <div className="home_leftBar">
        <Navbar />
      </div>
      <div className="user" key={user?.id}>
        <div className="user_img">
          <img src={user?.profilePictureUrl} alt="" />
        </div>
        <div className="user_desc">
          <p>{user?.username}</p>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  )
}

export default UserFollowing
