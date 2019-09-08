import {Section} from "../components/Section";
import {H1, H2, Paragraph} from '../components/typography';
import * as React from "react";

export const About: React.FunctionComponent = (props) => <Section odd>
    <H1>About us</H1>
    <Paragraph>The Animal Rights Club at UT Dallas is a student organization committed to providing education about
        animal rights issues, volunteering on and off campus, and building a sense of community for those who care
        about animals. General meetings are typically held every other Wednesday at 7PM in RHS. We also host a number
        of internal events ranging from film screenings to cooking socials to VR outreach tabling. Moreover, the club
        facilitates carpooling to external volunteer events in the DFW area.
    </Paragraph>
</Section>;

