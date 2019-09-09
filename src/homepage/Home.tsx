import * as React from 'react';
import styled from 'styled-components';
import {FunctionComponent} from "react";
import {Hero} from './Hero';
import {About} from "./About";

const Row = styled.div`
  display: flex;
  @media(${props=>props.theme.mediaQueries.horizontalLayout}) {
    flex-direction: row; 
  }
  @media(${props=>props.theme.mediaQueries.verticalLayout}) { // Stretch to full width on smaller devices
    flex-direction: column; 
  }
  min-height: 100vh;
  justify-content: stretch;
  margin: 0;
  padding: 0;
`;

export const Home: FunctionComponent = (props) => <>
    <Row>
        <Hero />
        <About />
    </Row>
</>;
