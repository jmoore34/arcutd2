import * as React from 'react';
import styled from 'styled-components';
import {FunctionComponent} from "react";
import {Hero} from './Hero';
import {About} from "./About";

export const Home: FunctionComponent = (props) => <>
    <Hero />
    <About />
</>;
