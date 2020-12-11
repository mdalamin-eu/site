import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";



export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;



class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>JavaScript (ES6)(ES7)</li>
                <li>React</li>
                <li>Redux</li>
                <li>Typescript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap 4</li>
                <li>Material-UI</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL/NoSQL</li>
                
                
              </ul>
              <h5>DevOps</h5>
              <ul>
              <li>Docker</li>
              <li>Travis CI</li>
                <li>AWS</li>
                <ul>
                <li>SES</li>
                </ul>
                
                          
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
              <li>C</li>
              <li>Git</li>
                <li>JSON</li>
                <li>Rest API</li>
                
                
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          
        </div>
      </div>
    );
  }
}

export default Code;
