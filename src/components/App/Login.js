import logo from "./logo.svg"
import { useState } from "react"
import { fetchData } from "../../common/utils"
import { BrowserRouter as Link } from "react-router-dom"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function postLogin(email, password) {
    const requestParams = {
      method: "POST",
      body: { email: email, password: password },
    }

    await fetchData("auth/login", requestParams)
      .then((data) => {
        localStorage.setItem("token", data.access_token)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Login-body">
        <p>Email</p>
        <input
          value={email}
          onChange={(email) => setEmail(email.target.value)}
          type="text"
        ></input>
        <br />
        <br />
        <p>Password</p>
        <input
          value={password}
          onChange={(pass) => setPassword(pass.target.value)}
          type="password"
        ></input>
        <br />
        <br />
        <Link exact to="/books">
          <button
            className="Login-button"
            onClick={() => postLogin(email, password)}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}
