import {H1, H2, Paragraph} from '../components/typography';
import * as React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  flex: 1 0 auto;
  //height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  margin: 40px 50px;
`;

const Section = styled.div``;

export const About: React.FunctionComponent = (props) => <MainDiv>
    <Section>
        <H1>About us</H1>
        <Paragraph>The Animal Rights Club at UT Dallas is a student organization committed to providing education about
            animal rights issues, volunteering on and off campus, and building a sense of community for those who care
            about animals. General meetings are typically held every other Wednesday at 7PM in RHS. We also host a number
            of internal events ranging from film screenings to cooking socials to VR outreach tabling. Moreover, the club
            facilitates carpooling to external volunteer events in the DFW area.
        </Paragraph>
    </Section>
</MainDiv>;

