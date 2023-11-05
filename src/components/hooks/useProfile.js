import { useEffect, useState } from "react"
import { Profile } from "../api/api"

const useProfile = () => {
  const [dataUser, setDataUser] = useState([])

  const handleProfile = () => {
    Profile()
      .then((res) => {
        const data = res.data.data
        setDataUser(data)
      })
      .catch((err) => {
        throw err
      })
  }

  useEffect(() => {
    handleProfile()
  }, [])

  return { dataUser, setDataUser }
}

export default useProfile
