import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

class PageLayout extends Component {
    render(){
        const { children } = this.props;
        return (
            <>
                <Header/>
                <Navbar />
                <div className="page-container">{children}</div>
                <Footer/>
            </>
        )
    }
}

export default PageLayout;