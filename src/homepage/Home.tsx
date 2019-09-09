import * as React from 'react';
import styled from 'styled-components';
import {FunctionComponent} from "react";
import {Hero} from './Hero';
import {About} from "./About";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Home: FunctionComponent = (props) => <>
    <Row>
        <Hero />
        <About />
    </Row>
</>;
