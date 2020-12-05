import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Layout from "@/layout"
import Hello from "@/pages/hello"
import Lss from "@/pages/lss"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/hello" />} />
        {/* login */}
        <Route exact path="/lss" component={Lss} />
        <Layout>
          <Route exact path="/hello" component={Hello} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App
