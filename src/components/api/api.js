import axios from "axios"

const basURL = import.meta.env.VITE_BASEURL
const apiKey = import.meta.env.VITE_APIKEY

const header = {
  apiKey: apiKey,
  "Content-Type": "application/json",
}

const keyCurrent = localStorage.getItem("token")
if (!keyCurrent) {
  console.error("Token tidak ditemukan di localStorage.")
}

const configKeyCurrent = {
  Authorization: `Bearer ${keyCurrent}`,
  apiKey: apiKey,
  "Content-Type": "application/json",
}

export const LoginData = (email, password, message) => {
  const payload = {
    email: email,
    password: password,
    message: message,
  }

  return axios
    .post(`${basURL}/api/v1/login`, payload, {
      headers: header,
    })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const Register = (
  name,
  userName,
  email,
  password,
  passwordRepeat,
  message
) => {
  const payload = {
    name: name,
    username: userName,
    email: email,
    password: password,
    passwordRepeat: passwordRepeat,
    message: message,
  }

  return axios
    .post(`${basURL}/api/v1/register`, payload, { headers: header })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const Profile = () => {
  return axios
    .get(`${basURL}/api/v1/user`, { headers: configKeyCurrent })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const UpdateProfile = (email) => {
  const payload = {
    email: email,
  }

  return axios
    .post(`${basURL}/api/v1/update-profile`, payload, {
      headers: configKeyCurrent,
    })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const Explore = () => {
  return axios
    .get(`${basURL}/api/v1/explore-post?size=10&page=1`, {
      headers: configKeyCurrent,
    })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const followingPost = () => {
  return axios
    .get(`${basURL}/api/v1/following-post?size=11&page=1`, {
      headers: configKeyCurrent,
    })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const getMyFollowing = () => {
  return axios
    .get(`${basURL}/api/v1/my-following?size=10&page=1`, {
      headers: configKeyCurrent,
    })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const getMyFollowers = () => {
  return axios
    .get(`${basURL}/api/v1/my-followers?size=10&page=1`, {
      headers: configKeyCurrent,
    })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const CreatePost = (imageUrl, caption) => {
  const payload = {
    imageUrl: imageUrl,
    caption: caption,
  }

  return axios
    .post(`${basURL}/api/v1/create-post`, payload, {
      headers: configKeyCurrent,
    })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const getLogOut = () => {
  return axios
    .get(`${basURL}/api/v1/logout`, { headers: configKeyCurrent })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const LikePost = (postId) => {
  const payload = {
    postId: postId,
  }

  return axios
    .post(`${basURL}/api/v1/like`, payload, { headers: configKeyCurrent })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const UnlikePost = (postId) => {
  const payload = {
    postId: postId,
  }

  return axios
    .post(`${basURL}/api/v1/unlike`, payload, { headers: configKeyCurrent })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export const CreateComment = (postId, comment) => {
  const payload = {
    postId: postId,
    comment: comment,
  }

  return axios
    .post(`${basURL}/api/v1/create-comment`, payload, {
      headers: configKeyCurrent,
    })
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}
