import styled from 'styled-components'
import * as React from 'react'
import {Event} from 'events'

// Dims (lowers opacity) of contents on demand
const Dimmer = styled.div<{dim: boolean}>`
  opacity: ${props => props.dim ? 0.6 : 1.0}
`;

const SingleEvent: React.FunctionComponent<{event: Event}> = (props) => {
    // use different styling if event has passed
    const now = 
    const past: boolean = props.event.year <
    return <Dimmer dim={past}>

    </Dimmer>;
}

export class EventList extends React.Component<{},{}> {
    render() {
        return <></>
    }
}
