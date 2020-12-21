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
const PortTitle = styled.h4`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 300px) {
    text-align: center;
  }
`;




class Education extends Component {
  render() {
    return (
        <div>
        
        <PortTitle>Centria University of Applied Sciences   <small>(Kokkola, Finland.)</small> </PortTitle> 
        
        <p  style={{ 'font-size': '15px' }}>
        <i>Bachelor of Engineering, Information Technology</i>
        <h6>The course is aimed at the three major areas of Software Engineering, Network Engineering, and Industrial knowledge. </h6>
          
          <h6> <storng>They are part of the curriculum structure following disciplines:</storng></h6>

          <h6>Embeded System and PLC, Programming Languge C, C++, C#, Java and SQL, IOT, AWS
          </h6>
        
        </p>
        <br/>
        <PortTitle>Chittagong Polytechnic Institute <small>(Chittagong, Bangladesh.)</small></PortTitle>
        <p  style={{ 'font-size': '15px' }}>
            <i>4 Years Diploma in Computer Engineering</i>
            <h6>The degree is divided into three major areas of Computer Network, Software, and Hardware Engineering.</h6>
          <h6>They are part of the curriculum structure following disciplines:</h6>
            <h6>
              <li>Embeded System and PLC,</li> Programming Languge C, C++, C#, Java and SQL
          </h6>
        </p>
      </div>
    
    );
  }
}

export default Education;
