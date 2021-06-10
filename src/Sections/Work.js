import React, { Component } from 'react';
import '../Styles/neo.css';
import '../Styles/work.css';
import test from '../Assests/test.png';
import man from '../Assests/man.png';
import talk from '../Assests/talk.png';

export default class Work extends Component {
  render() {
    return (
      <>
        <div className="work-section">
          <div className="title">How GoodLives works</div>
          <div className="work-container">
            <div className="item">
              <div className="image">
                <img width="150px" src={test} alt="man" />
              </div>
              <div className="text">
                <div className="title">Brief Assessment</div>
                <div className="sub">Answer a few questions about your preference</div>
              </div>
            </div>
            <div className="item">
              <div className="image">
                <img width="150px" src={man} alt="man" />
              </div>
              <div className="text">
                <div className="title">Choose your Therapist</div>
                <div className="sub">Select from a list of recommendations</div>
              </div>
            </div>
            <div className="item">
              <div className="image">
                <img width="150px" src={talk} alt="man" />
              </div>
              <div className="text">
                <div className="title">Start Therapy</div>
                <div className="sub">Begin the journey towards a happier you</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
