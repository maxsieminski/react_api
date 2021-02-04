import "./App.css"
import { Books } from "./Books"
import { Login } from "./Login"
import { AuthRoute } from "./AuthRoute"
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/books" />
        <AuthRoute path="/books" type="private">
          <Books />
        </AuthRoute>
        <AuthRoute path="/login" type="public">
          <Login />
        </AuthRoute>
      </Switch>
    </Router>
  )
}

export default App
