import { useState } from "react"
import { UpdateProfile } from "../api/api"

export const useUpdateProfile = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [bio, setBio] = useState("")
  const [website, setWebsite] = useState("")

  const handleUpdateProfile = (e) => {
    e.preventDefault()
    UpdateProfile(email)
      .then((res) => console.log(res.data))
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message)
        }
      })
  }

  return {
    name,
    setName,
    username,
    setUsername,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    bio,
    setBio,
    website,
    setWebsite,
    handleUpdateProfile,
  }
}
