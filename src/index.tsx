import React from "react"
import ReactDOM from "react-dom"
import Router from "@/routers"

// hot-server局部刷新
if (module && module.hot) {
  module.hot.accept()
}

function App() {
  return <Router />
}

ReactDOM.render(<App />, document.querySelector("#root"))
