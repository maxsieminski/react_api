import "./App.css"
import { Books } from "./Books"
import { Login } from "./Login"
import { AuthRoute } from "./AuthRoute"
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom"
import { useState } from "react"

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/books" />
        <AuthRoute path="/login" type="public">
          <Login />
        </AuthRoute>
        <AuthRoute path="/books" type="private">
          <Books />
        </AuthRoute>
      </Switch>
    </Router>
  )
}

export default App
