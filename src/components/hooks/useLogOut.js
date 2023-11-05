import { useNavigate } from "react-router-dom"
import { getLogOut } from "../api/api"
import swal from "sweetalert"

export const UseLogOut = () => {
  const Navigate = useNavigate()

  const handleLogOut = () => {
    getLogOut()
      .then((res) => {
        swal("Good", `${res.data.message}`, "success")
        localStorage.removeItem("token")
        Navigate("/")
      })
      .catch((err) => console.log(err))
  }

  return { handleLogOut }
}
