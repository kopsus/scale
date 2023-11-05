import { Link } from "react-router-dom"
import "../../../css/auth.css"
import { UseRegister } from "../../hooks/useRegister"

const AuthRegister = () => {
  const {
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
    handleRegister,
  } = UseRegister()

  return (
    <form onSubmit={handleRegister}>
      <div className="auth">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="card-title">Scale</p>
            <p>Registrasi</p>
            <p className="font-bold text-red-500">{message}</p>
            <div className="card-actions justify-end">
              <input
                type="text"
                placeholder="Name"
                className="input input-sm input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Username"
                className="input input-sm  input-bordered w-full"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email"
                className="input input-sm input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="input input-sm  input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="Repeat Password"
                className="input input-sm input-bordered w-full"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />

              <button className="btn btn-sm w-full">Registrasi</button>
              <p>
                Sudah punya akun? <Link to={"/login"}>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AuthRegister
