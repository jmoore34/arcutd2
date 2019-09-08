import {mdyDate} from "./util/TimeUtil";

export interface Event {
    date: Date,
    time: string,
    location: string,
    name: string,
    description: string,
    url?: string
}

export const events: Event[] = [
    {date: mdyDate(8,12,2019), time: "3PM", location: "Main Street Garden Park", name: "Official Animal Rights March", description: "The most important external event of the year. Join us to raise awareness of the most pressing animal rights issues.", url:"https://www.facebook.com/events/321824155189732/" },
    {date: mdyDate(9,6,2019), time: "7PM", location: "Phase 8 Clubhouse", name: "Back to School Pool Party", description: ""},
    {date: mdyDate(9,11,2019), time: "7PM", location: "RHS 1.001", name: "Pin Making Night", description: ""},
    {date: mdyDate(9,25,2019), time: "7PM", location: "RHS 1.001", name: "Movie Night", description: ""},
    {date: mdyDate(10,9,2019), time: "7PM", location: "RHS 1.001", name: "Vegan Baking Social", description: ""},
    {date: mdyDate(10,23,2019), time: "7PM", location: "RHS 1.001", name: "Homecoming Parade Poster Making", description: ""},
    {date: mdyDate(11,6,2019), time: "7PM", location: "RHS 1.001", name: "Activist Letter Writing", description: ""},
    {date: mdyDate(11,20,2019), time: "7PM", location: "RHS 1.001", name: "Vegan Thanksgiving Potluck", description: ""},
];
