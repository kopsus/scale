import { useState } from "react"
import { LoginData } from "../api/api"
import { useNavigate } from "react-router-dom"

export const UseLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const Navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    LoginData(email, password)
      .then((res) => {
        localStorage.setItem("token", res?.data?.token)
        Navigate("/scale")
      })
      .catch((err) => {
        if (err.response) {
          setMessage(err.response.data.message)
        }
      })
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    message,
    handleLogin,
  }
}
