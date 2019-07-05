import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  componentDidMount() {
    axios.get("/api/product/woods").then(res => {
      console.log(res);
    });
  }

  render() {
    return <div />;
  }
}

export default App;
