import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

class ProcessComponent extends Component {
  render() {
    return (
        <div className="process-page">
           <div className="process-page-title">HOW IT WORKS?</div>
           <div className="process-diagram"></div>
           <div className="process-free-text">We are happy to give a FREE design draft within 3 days</div>
           <div className="process-free-text-design">
                <Link to="#">GET YOUR FREE DESIGN NOW</Link>
           </div>
        </div>
    );
  }
}

export default ProcessComponent;