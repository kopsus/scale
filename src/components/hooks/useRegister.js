import { useState } from "react"
import { Register } from "../api/api"
import { useNavigate } from "react-router-dom"

export const UseRegister = () => {
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordRepeat, setPasswordRepeat] = useState("")
  const [message, setMessage] = useState("")
  const [data, setData] = useState([])
  const Navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    Register(name, userName, email, password, passwordRepeat, message)
      .then((res) => {
        const data = res.data.data
        setData(data)
        Navigate("/login")
      })
      .catch((err) => {
        if (err.response.data.errors) {
          setMessage(err.response.data.errors[0].message)
        } else if (err.response.data.message) {
          setMessage(err.response.data.message)
        }
      })
  }

  return {
    name,
    setName,
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    passwordRepeat,
    setPasswordRepeat,
    message,
    setMessage,
    data,
    handleRegister,
  }
}
