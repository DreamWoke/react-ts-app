import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Layout from "@/layout"
import Hello from "@/pages/hello"
import Login from "@/pages/login"

const App = () => {
  return (
    <Router>
      <Switch>
        {/* login */}
        <Route exact path="/login" component={Login} />
        {/* kkk */}
        <Route exact path="/" render={() => <Redirect to="/hello" />} />
        <Layout />
        <Route exact path="/hello" component={Hello} />
      </Switch>
    </Router>
  )
}

export default App
