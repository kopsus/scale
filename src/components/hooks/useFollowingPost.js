import { useEffect, useState } from "react"
import { CreateComment, LikePost, UnlikePost, followingPost } from "../api/api"
import { useNavigate } from "react-router-dom"
import swal from "sweetalert"

const useFollowingPost = () => {
  const [data, setData] = useState([])
  const [comment, setComment] = useState("")
  const Navigate = useNavigate()

  // const handleFollowingPost = () => {
  const handleFollowingPost = (id) => {
    Navigate(`/scale/${id}`)
  }

  const handleLikePost = (postId) => {
    const likedItem = data.find((item) => item.id === postId)
    if (likedItem) {
      LikePost(postId)
        .then((res) => {
          likedItem.totalLikes += 1
          setData([...data])
          console.log(res)
        })
        .catch((err) => console.log(err))
    }
  }

  const handleUnlikePost = (postId) => {
    const likedItem = data.find((item) => item.id === postId)
    if (likedItem) {
      UnlikePost(postId)
        .then((res) => {
          likedItem.totalLikes -= 1
          setData([...data])
          console.log(res)
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    followingPost()
      .then((res) => setData(res.data.data.posts))
      .catch((err) => {
        console.log(console.log(err.response.data.message))
      })
  }, [])

  const handleComment = (postId) => {
    const commentItem = data.find((item) => item.id === postId)
    if (commentItem) {
      CreateComment(postId, comment)
        .then((res) => swal("Good", `${res.data.message}`, "success"))
        .catch((err) => console.log(err))
    }
  }

  return {
    data,
    handleFollowingPost,
    handleLikePost,
    handleUnlikePost,
    handleComment,
    setComment,
    comment,
  }
}

export default useFollowingPost
