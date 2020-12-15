import React from "react"
import { Redirect, Route } from "react-router"

export const AuthRoute = ({ type, ...rest }) => {
  const isLoggedIn = localStorage.getItem("token")

  if (type === "public" && isLoggedIn) return <Redirect to="/books" />
  else if (type === "private" && !isLoggedIn) return <Redirect to="/login" />

  return <Route {...{ type, isLoggedIn, ...rest }} />
}
