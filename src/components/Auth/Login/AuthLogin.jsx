import { Link } from "react-router-dom"
import "../../../css/auth.css"
import { UseLogin } from "../../hooks/useLogin"

const AuthLogin = () => {
  const { email, setEmail, password, setPassword, message, handleLogin } =
    UseLogin()

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="auth">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-10">
              <p className="card-title">Scale</p>
              <p>Login</p>
              <p className="font-bold text-red-400">{message}</p>
              <div className="card-actions justify-end">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-md input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="input input-md  input-bordered w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-md w-full">Login</button>
                <p>
                  Belum punya akun? <Link to={"/registrasi"}>Daftar</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-5 text-[#23435c] bg-white p-5 rounded-lg flex gap-2">
          <div>
            <p>email</p>
            <p>password</p>
          </div>

          <div>
            <p>: tegarr@gmail.com</p>
            <p>: 111111</p>
          </div>
        </div>
      </form>
    </>
  )
}

export default AuthLogin
