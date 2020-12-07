import React from "react"
import ReactDOM from "react-dom"
import Router from "@/routers"
import "@/style/basic.scss"

// hot-server局部刷新
if (module && module.hot) {
  module.hot.accept()
}

function App() {
  return <Router />
}

ReactDOM.render(<App />, document.querySelector("#root"))
