import { useEffect, useState } from "react"
import { getMyFollowers, getMyFollowing } from "../api/api"
import { useNavigate } from "react-router-dom"

const useFollow = () => {
  const [userFollowers, setUserFollowers] = useState([])
  const [userFollowing, setUserFollowing] = useState([])
  const Navigate = useNavigate()

  const handleUserFollowers = (id) => {
    Navigate(`/user-follower/${id}`)
  }

  const handleUserFollowing = (id) => {
    Navigate(`/user-following/${id}`)
  }

  useEffect(() => {
    getMyFollowers()
      .then((res) => setUserFollowers(res.data.data.users))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    getMyFollowing()
      .then((res) => setUserFollowing(res.data.data.users))
      .catch((err) => console.log(err))
  }, [])

  return {
    userFollowers,
    userFollowing,
    handleUserFollowers,
    handleUserFollowing,
  }
}

export default useFollow
