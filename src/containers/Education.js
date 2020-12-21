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
const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;




class Education extends Component {
  render() {
    return (
        <div>
        
        <PortTitle>Centria University of Applied Sciences   <small>(Kokkola, Finland.)</small> </PortTitle> 
        
        <p  style={{ 'font-size': '20px' }}>
        <i>Bachelor of Engineering, Information Technology</i>
        <h5>The course is aimed at the three major areas of Software Engineering, Network Engineering, and Industrial knowledge. 
          The professional will know how to use efficiently the available resources of the global network of 
          computers and have expertise in languages and programming environments for the development of software. 
          The Technical provides software and technical procedures for the selection and use of data structures in the resolution of problems, 
          concerning issues from the mechanisms of control or operational control of programmes.</h5>
          
          <h5> <storng>They are part of the curriculum structure following disciplines:</storng></h5>

          <h5>Embeded System and PLC, Programming Languge C, C++, C#, Java and SQL, IOT
          </h5>
        
        </p>
        <br/>
        <PortTitle>Chittagong Polytechnic Institute <small>(Chittagong, Bangladesh.)</small></PortTitle>
        <p  style={{ 'font-size': '22px' }}>
            <i>4 Years Diploma in Computer Engineering</i>
            <h5>The degree is divided into three major areas of Computer Network, Software, and Hardware Engineering.
          The methodology of teaching prioritizes the construction of knowledge through experimentation, 
          the proposition of situations, problems, or scenarios over which should reflect academic, research, 
          and devise solutions within the programming. </h5>
          <h5>They are part of the curriculum structure following disciplines:</h5>
            <h5>Embeded System and PLC, Programming Languge C, C++, C#, Java and SQL
          </h5>
        </p>
      </div>
    
    );
  }
}

export default Education;
