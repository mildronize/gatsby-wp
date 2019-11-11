import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

class PageLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <Navbar />
        <main className="page-container">{children}</main>
        <Footer />
      </>
    );
  }
}

export default PageLayout;
