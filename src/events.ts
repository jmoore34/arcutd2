export interface Event {
    month: number,
    day: number,
    year: number,
    time: string,
    location: string,
    name: string,
    description: string,
    url: string
}

export const events: Event[] = [
    {month: 8, day: 12, year: 2019, time: "3PM", location: "Main Street Garden Park", name: "Official Animal Rights March", description: "The most important external event of the year. Join us to raise awareness of the most pressing animal rights issues.", url:"https://www.facebook.com/events/321824155189732/" },

];
