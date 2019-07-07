import React, { Component } from "react";
import Header from "../header_footer/Header";
import Footer from "../header_footer/Footer";
class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page_container">{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

export default Layout;
