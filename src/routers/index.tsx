import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "@/redux/store"
import Layout from "@/layout"
import { getToken } from "@/utils/token"

import Login from "@/pages/login"
import Product from "@/pages/product"
import Second from "@/pages/second"
import NotFound from "@/pages/404"

const App = () => {
  const isLogin = getToken()
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          {/* login */}
          <Route exact path="/" render={() => <Redirect to={isLogin ? "/product" : "/login"} />} />
          <Route exact path="/login" component={Login} />
          <Route path="/404" exact component={NotFound} />
          {/* business */}
          <Layout>
            <Switch>
              <Route exact path="/product" component={Product} />
              <Route exact path="/second" component={Second} />
              <Redirect to={isLogin ? "/404" : "/login"} />
            </Switch>
          </Layout>
        </Switch>
      </Provider>
    </Router>
  )
}

export default App
