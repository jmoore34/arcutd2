import {A, H1, H2, LI, Paragraph} from '../components/typography';
import * as React from "react";
import styled from "styled-components";
import {EventList} from "./EventList";
import {theme} from "../theme";
import {returnStatement} from "@babel/types";
import {string} from "prop-types";
import {ExpansionPanel} from "@material-ui/core";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const MainDiv = styled.div`
  @media(${props => props.theme.mediaQueries.horizontalLayout}) { // Stretch to full width on smaller devices
    flex: 1 1 50vw;
  }
  @media(${props => props.theme.mediaQueries.verticalLayout}) { // Stretch to full width on smaller devices
    flex: 1 1;
  }
  //height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 40px;
  margin: 0; 
  background: #86cb79 linear-gradient(44deg, #86cb97, #a5dc86);
`;


export const About: React.FunctionComponent = (props) => {
    const [currentPanel, setCurrentPanel] = React.useState<string>("infoform");

    // Rather then just pass the event handler that MUI expects for handleChange
    // i.e. (React.ChangeEvent<{}>,bool) => {}
    // we want to have another argument (panel)
    // so we use a higher order function
    // so onChange={handleChange('infoform')} allows us to bind the function
    // returned by the higher order function as the event handler.
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setCurrentPanel(isExpanded ? panel : "");
    };

    return (
        <MainDiv>
            <ExpansionPanel expanded={currentPanel === 'infoform'} onChange={handleChange('infoform')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant="h4">Member Info Form</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    form goes here
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={currentPanel === 'socialmedia'} onChange={handleChange('socialmedia')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant="h4">Social Media</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <H2>How to Join</H2>
                    <ol>
                        <LI>
                            <b>(Required)</b> Fill out our
                            <A href="https://dfwanimalrights.typeform.com/to/D23B46"
                               target="_blank">Member Information Form</A></LI>
                        <LI>
                            <b>(Recommended)</b> Join our
                            <A href="https://discord.gg/eMkfQud" target="_blank">
                                Discord
                                server
                            </A>
                            and/or our
                            <A href="https://www.facebook.com/groups/arcutd/" target="_blank">
                                Facebook group
                            </A>
                        </LI>

                    </ol>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={currentPanel === 'calendar'} onChange={handleChange('calendar')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant="h4">Event Calendar</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <EventList/>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={currentPanel === 'about'} onChange={handleChange('about')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant="h4">About Us</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Paragraph>
                        The Animal Rights Club at UT Dallas is a student organization committed to providing education
                        about animal rights issues, volunteering on and off campus, and building a sense of community
                        for those who care about animals.
                    </Paragraph>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </MainDiv>);
};

