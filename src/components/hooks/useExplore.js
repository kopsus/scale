import { useEffect, useState } from "react"
import { CreateComment, Explore, LikePost, UnlikePost } from "../api/api"
import { useNavigate } from "react-router-dom"
import swal from "sweetalert"

const useExplore = () => {
  const [data, setData] = useState([])
  const [comment, setComment] = useState("")
  // const [message, setMessage] = useState("")
  const Navigate = useNavigate()

  const handlePost = (id) => {
    Navigate(`/detail/${id}`)
  }

  useEffect(() => {
    Explore()
      .then((res) => {
        setData(res.data.data.posts)
      })
      .catch((err) => console.log(err.response.data.message))
  }, [])

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

  const handleComment = (postId) => {
    const commentItem = data.find((item) => item.id === postId)
    if (commentItem) {
      CreateComment(postId, comment)
        .then((res) => {
          swal("Good", `${res.data.message}`, "success")
          setComment("")
        })
        .catch((err) => console.log(err))
    }
  }

  return {
    data,
    comment,
    setComment,
    handlePost,
    handleLikePost,
    handleUnlikePost,
    handleComment,
    // message,
    // setMessage,
  }
}

export default useExplore
