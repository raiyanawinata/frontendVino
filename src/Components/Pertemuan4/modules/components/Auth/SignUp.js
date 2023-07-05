import React, { Component } from 'react';
import SignUpForm from './SignUpForm';

export default class Signup extends Component {
  render() {
    return (
      <div id="signup" className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-column-fluid">
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <SignUpForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <span className="text-muted">About |</span>
                      <a href="https://wa.me/0813456789" className="text-muted mx-2">Contact</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
