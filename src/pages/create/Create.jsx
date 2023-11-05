import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import "./create.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import swal from "sweetalert"

const Create = () => {
  const [file, setFile] = useState("")
  const [preview, setPreview] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [caption, setCaption] = useState("")
  const [message, setMessage] = useState(false)
  const Navigate = useNavigate()

  const LoadImg = (e) => {
    const image = e.target.files[0]
    setFile(image)
    setPreview(URL.createObjectURL(image))
  }

  const keyCurrent = localStorage.getItem("token")
  if (!keyCurrent) {
    console.error("Token tidak ditemukan di localStorage.")
  }

  const configKeyCurrent = {
    apiKey: import.meta.env.VITE_APIKEY,
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    "Content-type": "multipart/form-data",
  }

  const saveImage = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("image", file)

    axios
      .post(`${import.meta.env.VITE_BASEURL}/api/v1/upload-image`, formData, {
        headers: configKeyCurrent,
      })
      .then((res) => {
        setImgUrl(res.data.url)
        setMessage(true)
        swal("Good", `${res.data.message}`, "success")
      })
      .catch(() => swal("Failed", "Please Upload Image First", "warning"))
  }

  const handleCreatePost = async (e) => {
    e.preventDefault()

    const payload = {
      imageUrl: imgUrl,
      caption: caption,
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/v1/create-post`,
        payload,
        {
          headers: configKeyCurrent,
        }
      )

      setMessage(true)
      swal("Good", `${response.data.message}`, "success")
      Navigate("/scale")
    } catch (err) {
      err
    }
  }

  return (
    <div className="create">
      <div className="home_leftBar">
        <Navbar />
      </div>
      <div className="form my-10">
        {preview ? (
          <figure className="mt-5">
            <img src={preview} alt="" />
          </figure>
        ) : null}
        <p className="text-red-600 font-bold">{message}</p>

        <div className="create_content">
          <form onSubmit={saveImage} className="upload_img">
            <label>Image</label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              onChange={LoadImg}
            />

            <button
              type="submit"
              className="btn mb-10 bg-accent text-white hover:bg-accent-focus"
            >
              Save
            </button>
          </form>

          <form onSubmit={handleCreatePost}>
            <input
              type="text"
              placeholder={`link img${imgUrl}`}
              className="input input-md input-bordered w-full"
              value={imgUrl}
              onChange={() => setImgUrl(imgUrl)}
            />
            <label>Caption</label>
            <input
              type="text"
              placeholder="Caption"
              className="input input-md input-bordered w-full"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-md w-full mb-10 bg-primary text-white hover:bg-primary-focus"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
