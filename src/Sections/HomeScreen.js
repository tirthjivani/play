import React, { Component } from 'react';
import Navbar from '../Sections/Navbar';
export default class HomeScreen extends Component {
  render() {
    return (
      <>
        <div className="homescreen-section">
          <div>
            <Navbar />
            <div className="title">Mapping you to the Right Therapist</div>
            <div className="subtitle">
              We know exactly how it feels to fight your battles alone! Talk to
              someone who understands your Mental Health status!
            </div>
            <div className="action">
              <a href="/play" className="neo-bottom-right book-btn">
                Book a session
              </a>
              <a href="/play" className="neo-bottom-right book-btn chat-now">
                Chat Now
              </a>
            </div>
          </div>
          <div className="therapy"></div>
          <div className="down-arrow"></div>
        </div>
      </>
    );
  }
}
