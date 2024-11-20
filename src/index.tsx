import React, { Component } from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.scss";

interface AppProps {}

export default class App extends Component {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <img width={"400px"} src="images/hello_world.png" />
      </div>
    );
  }
}

const container = document.getElementById("root");
ReactDOM.createRoot(container!).render(<App />);
