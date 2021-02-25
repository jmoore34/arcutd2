import styled from 'styled-components'
import * as React from 'react'
import {getShortDayName, getShortMonthName} from "../util/TimeUtil";
import {Event, events, oldEvents} from "../events";
import {LI, Text} from '../components/typography';

// Dims (lowers opacity) of contents on demand
const Dimmer = styled.div<{dim: boolean}>`
  opacity: ${props => props.dim ? 0.6 : 1.0}
`;

const EventName = styled(Text)`
  font-weight: bold;
  color: black;
`;

const EventDetails = styled(Text)`
  color: rgba(22,40,26,0.96);
`;

const EventDesc = styled(Text)`
  font-style: italic;
  color: #212923;
`;


const SingleEvent: React.FunctionComponent<{event: Event}> = (props) => {
    // use different styling if event has passed
    const dayAfterEvent: Date = new Date(props.event.date.getTime() + 24*60*60*1000);
    const passed = dayAfterEvent < new Date(); // event was before now. We actually use the day after the event so that the event doesn't show as passed when the time is greater than midnight
    return <Dimmer dim={passed}>
            <LI>
                <EventName>{props.event.name} </EventName>
                <EventDetails>{`(${getShortDayName(props.event.date)}. ${getShortMonthName(props.event.date)}. ${props.event.date.getDate()}, ${props.event.time} @ ${props.event.location}) `}</EventDetails>
                <EventDesc>{props.event.description}</EventDesc>
            </LI>
        </Dimmer>;
};

const EventContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: square;
`;

export class EventList extends React.Component<{},{}> {
    render() {
        return <EventContainer>
            <Text>Current semester</Text>
            <EventContainer>
                {events.map((event,  id)=>
                    <SingleEvent key={id} event={event}/>)}
            </EventContainer>
            <br />
            <Text>Past semesters</Text>
            <EventContainer>
                {oldEvents.map((event,  id)=>
                    <SingleEvent key={id} event={event}/>)}
            </EventContainer>
        </EventContainer>
    }
}
