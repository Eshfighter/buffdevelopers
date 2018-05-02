import React, { Component } from 'react';

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class BackgroundComponent extends Component {

    scrollToBottom() {
        scroll.scrollToBottom();
    }

    scrollToIntroPage(){
        const introPageDiv = document.getElementById("intro-page-info");
        scroll.scrollTo(introPageDiv.offsetTop);
    }

  render() {
    return (
        <div className="home-page">
            <div className="icon-text"></div>
            <div className="down-arrow" onClick={this.scrollToIntroPage}>
            </div>
        </div>
    );
  }
}

export default BackgroundComponent;