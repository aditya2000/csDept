import React, { Component } from "react";
import './register.css';
import Navbar from './navbar';

export default class Register extends Component {
  render() {
    return (
      <div className="projects">
        <Navbar/>
        <div className="titleProjects">
          <h3>About us</h3>
          <div className="titleDesc">
            <p>Curieux was started with an aim to promote learning of Computer Science and Programming among the students of various educational backgrounds. We actively organise meetups to discuss the about the new technolgies and best practices across different fields of Computer Science including Web Design, Web Development, Mobile App Development, Cyber Security and Ethical Hacking, Robotics and so on.</p>
          </div>
        </div>
      </div>
    );
  }
}
