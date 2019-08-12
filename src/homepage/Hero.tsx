import * as React from 'react'
import {Section} from '../components/Section'
import styled from 'styled-components'
import {Button} from '../components/Button'
import cow from './img/cow.webp'

const Heading = styled.h1`
  font-family: ${props => props.theme.typography.fonts.title};
  color: white;
  margin: 2px;
  text-align: center;
  flex: 0 1 auto;
`;


const MainHeading = styled(Heading)`
  font-size: 70px;
`;

const SubHeading = styled(Heading)`
  font-size: 40px;
`;

const BackgroundImage = styled.div`
  z-index: -2;
  background-image: url(${cow});
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
`;

const BackgroundGradient = styled.div`
  z-index: -1;
  background: linear-gradient(to bottom, rgba(9, 71, 14, 0.45), rgba(9, 71, 14, 0.97));
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
`;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Space = styled.div`
  display: block;
  height: 60px;
  width: 100%;
`;

export const Hero: React.FunctionComponent = (props) => <MainDiv>
    <BackgroundImage />
    <BackgroundGradient />

    <MainHeading>Animal Rights Club</MainHeading>
    <SubHeading>at UT Dallas</SubHeading>
    <Space />
    <Button>Learn more</Button>
</MainDiv>;


