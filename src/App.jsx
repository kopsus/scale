import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./pages/login/login"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import Explore from "./pages/explore/Explore"
import Profile from "./pages/profile/Profile"
import Setting from "./pages/setting/Setting"
import Create from "./pages/create/Create"
import UserPostExplore from "./pages/userPostExplore/UserPostExplore"
import UserFollowing from "./pages/userFollowing/UserFollowing"
import UserFollowers from "./pages/userFollowers/UserFollowers"
import UserFollowingPost from "./pages/userFollowingPost/UserFollowingPost"
import DetailExplore from "./pages/detailExplore/DetailExplore"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="registrasi" element={<Register />} />
          <Route path="/scale" element={<Home />} />
          <Route path="/scale/:userId" element={<UserFollowingPost />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
          <Route path="create" element={<Create />} />
          <Route path="/user-following/:id" element={<UserFollowing />} />
          <Route path="user-follower" element={<UserFollowers />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:userId" element={<UserPostExplore />} />
          <Route path="/detail/:id" element={<DetailExplore />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
