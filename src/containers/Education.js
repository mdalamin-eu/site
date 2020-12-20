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
        
        </p>
        <br/>
        <PortTitle>Chittagong Polytechnic Institute <small>(Chittagong, Bangladesh.)</small></PortTitle>
        <p  style={{ 'font-size': '20px' }}>
            <i>4 Years Diploma in Computer Engineering</i>
        </p>
      </div>
    
    );
  }
}

export default Education;
