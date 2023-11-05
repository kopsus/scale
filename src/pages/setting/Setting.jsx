import { useState } from "react"
import useProfile from "../../components/hooks/useProfile"
import { useUpdateProfile } from "../../components/hooks/useUpdateProfile"
import Navbar from "../../components/navbar/Navbar"
import "./setting.css"
import axios from "axios"
import swal from "sweetalert"

const Setting = () => {
  const { dataUser } = useProfile()
  const [file, setFile] = useState("")
  const [preview, setPreview] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [message, setMessage] = useState(false)
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

  // // update post
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [bio, setBio] = useState("")
  const [website, setWebsite] = useState("")

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    const payload = {
      email: email,
    }

    const inputFields = {
      name,
      username,
      phoneNumber,
      bio,
      website,
      profilePictureUrl: imgUrl,
    }

    for (const key in inputFields) {
      if (inputFields[key]) {
        payload[key] = inputFields[key]
      }
    }

    await axios
      .post(`${import.meta.env.VITE_BASEURL}/api/v1/update-profile`, payload, {
        headers: {
          apiKey: import.meta.env.VITE_APIKEY,
          Authorization: `Bearer ${keyCurrent}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        swal("Good", `${res.data.message}`, "success")
      })
      .catch(() => swal("Failed", "email already taken", "warning"))
  }

  return (
    <div className="setting">
      <div className="home_leftBar">
        <Navbar />
      </div>
      <div className="w-[90%] mx-auto lg:w-[77%] ">
        <form onSubmit={saveImage} className="flex flex-col">
          <label>Image</label>
          {preview ? (
            <figure className="mt-5">
              <img src={preview} alt="" />
            </figure>
          ) : (
            <img
              src={dataUser?.profilePictureUrl}
              alt=""
              className="h-60 w-60 my-2"
            />
          )}
          <p className="text-red-400 font-bold">{message}</p>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            onChange={LoadImg}
          />
          <button className="btn btn-md text-white btn-accent my-10 w-28">
            save
          </button>
        </form>

        <form onSubmit={handleUpdateProfile}>
          <input
            type="text"
            placeholder={`link img${imgUrl}`}
            className="input input-md input-bordered w-full"
            value={imgUrl}
            onChange={() => setImgUrl(imgUrl)}
          />
          <div className="setting_content">
            <label>nama</label>
            <input
              type="text"
              placeholder={dataUser?.name}
              className="input input-md input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>User name</label>
            <input
              type="text"
              placeholder={dataUser?.username}
              className="input input-md input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder={dataUser?.email}
              className="input input-md input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Phone Number</label>
            <input
              type="number"
              placeholder={dataUser?.phoneNumber}
              className="input input-md input-bordered w-full"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <label>Bio</label>
            <input
              type="text"
              placeholder={dataUser?.bio}
              className="input input-md input-bordered w-full"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />

            <label>Website</label>
            <input
              type="text"
              placeholder={dataUser?.website}
              className="input input-md input-bordered w-full"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="setting_action">
            <button type="submit" className="btn btn-md">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Setting
