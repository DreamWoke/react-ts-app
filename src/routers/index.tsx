import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Layout from "@/layout"
import Login from "@/pages/login"
import First from "@/pages/first"
import Second from "@/pages/second"

const App = () => {
  return (
    <Router>
      <Switch>
        {/* login */}
        <Route exact path="/login" component={Login} />
        {/* business */}
        <Route exact path="/" render={() => <Redirect to="/first" />} />
        <Layout>
          <Route exact path="/first" component={First} />
          <Route exact path="/second" component={Second} />
        </Layout>
      </Switch>
    </Router>
  )
}

export default App
