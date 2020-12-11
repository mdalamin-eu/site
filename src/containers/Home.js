import React, { Component } from "react";

import { CenteredHeader } from "./App.js";

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>
          Hey👋! I'm Md Alamin a JavaScript developer based in Helsinki.
        </CenteredHeader>
        <p>
        <strong>Currently working on side projects. In my spare time, I enjoy learning new things 📚, building personal-projects 🔨, 
        doing photography 📸, contributing to Open Source 🖥️ , and watching horror 🎞️. </strong> 
        
        </p>
      </div>
    );
  }
}

export default Home;
