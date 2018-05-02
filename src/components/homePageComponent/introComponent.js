import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

class IntroComponent extends Component {

  constructor(props){
    super(props);
    this.state={
      navBarFollowScroll: false 
    }
    this.fixNav=this.fixNav.bind(this);
  }

  componentDidMount() {
    this.setState({
      initialNavOffset: document.getElementById("outer-navbar-wrapper").offsetTop,
    })
    window.addEventListener('scroll',this.fixNav.bind(this));
  }

  fixNav(){
    const initialNavOffset = this.state.initialNavOffset;
    const introPageDivHeight = document.getElementById("intro-page-info").offsetTop;
    if(window.scrollY > (initialNavOffset+introPageDivHeight)){
      this.setState({
        navBarFollowScroll:true
      })
    }else{
      this.setState({
        navBarFollowScroll:false
      })
    }
  }

  render() {
    return (
        <div id="intro-page-info" className={(this.state.navBarFollowScroll ? "fixed-nav " : "") + "intro-page"}>
          <div id="outer-navbar-wrapper" className="outer-navbar-wrapper">
            <div className = "inner-navbar-wrapper">
              <div className="icon-intro-page"></div>
              <div id="navbar" className="nav-bar">
                <nav>
                  <ul>
                    <li>
                      <div className="icon-navbar">
                        <div className="icon-image-src"></div>
                      </div>
                    </li>
                    <li>
                      <Link to='#'>HOME</Link>
                    </li>
                    <li>
                      <Link to='#'>ABOUT US</Link>
                    </li>
                    <li>
                    <Link to='#'>OUR WORK</Link>
                    </li>
                    <li>
                      <Link to='#'>CONTACT US</Link>
                    </li>
                    <li>
                      <Link to='#'>FAQs</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
            <div id="slogan" className="slogan">
              CAPTIVATION,INTUITIVE,SIMPLE
            </div>
            <div className="fun-fact">
              “Do you know that it only takes 10 - 20 seconds for visitors to decide whether they are going to leave your web page?”
            </div>
            <div className="slogan-text">
              <div className="slogan-text-captivating">
                <div className= "slogan-text-captivating-pic"></div>
                <div className= "slogan-text-captivating-text">
                  Captivation<br></br>Clear value proposition that captivates the visitor's attention
                </div>
              </div>
              <div className="slogan-text-intuitive">
                <div className= "slogan-text-intuitive-pic"></div>
                <div className= "slogan-text-intuitive-text">
                  Intuitive<br></br>Users know exactly what to do when they visit your webpage
                </div>
              </div>
              <div className="slogan-text-simple">
                <div className= "slogan-text-simple-pic"></div>
                <div className= "slogan-text-simple-text">
                  Simplicity<br></br>A touch of simplicity so that your website stands up among the crowd
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default IntroComponent;

