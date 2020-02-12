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
    {date: mdyDate(1,29,2020), time: "7PM", location: "SLC 2.203", name: "Dog Toy Making Social", description: ""},
    {date: mdyDate(2,12,2020), time: "7PM", location: "RHW Kitchen", name: "Cooking Social!", description: "Note the room change!"},
    {date: mdyDate(2,26,2020), time: "7PM", location: "SLC 2.203", name: "Animal Testing Awareness", description: ""},
    {date: mdyDate(3,11,2020), time: "7PM", location: "SLC 2.203", name: "DIY Lip Balm", description: ""},
    {date: mdyDate(3,25,2020), time: "7PM", location: "SLC 2.203", name: "Short Film Night", description: ""},
    {date: mdyDate(4,8,2020), time: "7PM", location: "SLC 2.203", name: "Activism Workshop", description: ""},
    {date: mdyDate(4,16,2020), time: "10AM-4PM", location: "Plinth/SU Mall", name: "UTD Veg Fest", description: ""},
    {date: mdyDate(4,22,2020), time: "7PM", location: "TBA", name: "Cowspiracy Screening", description: ""},
    {date: mdyDate(4,29,2020), time: "7PM", location: "SSA 12.471", name: "Zero Waste Vegan Potluck", description: ""},
];

// 19F
// export const events: Event[] = [
//     {date: mdyDate(8,12,2019), time: "3PM", location: "Main Street Garden Park", name: "Official Animal Rights March", description: "The most important external event of the year. Join us to raise awareness of the most pressing animal rights issues.", url:"https://www.facebook.com/events/321824155189732/" },
//     {date: mdyDate(9,6,2019), time: "7PM", location: "Phase 8 Clubhouse", name: "Back to School Pool Party", description: ""},
//     {date: mdyDate(9,11,2019), time: "7PM", location: "RHS 1.001", name: "Pin Making Night", description: ""},
//     {date: mdyDate(9,25,2019), time: "7PM", location: "RHS 1.001", name: "Movie Night", description: ""},
//     {date: mdyDate(10,9,2019), time: "7PM", location: "RHS 1.001", name: "Vegan Baking Social", description: ""},
//     {date: mdyDate(10,23,2019), time: "7PM", location: "RHS 1.001", name: "Homecoming Parade Poster Making", description: ""},
//     {date: mdyDate(10,30,2019), time: "8PM", location: "FO 1.202", name: "Scary Movie Night", description: "Come for a free screening of Dominion! Win $5 if you can make it through! Free treats from Reverie Bakeshop"},
//     {date: mdyDate(11,6,2019), time: "7PM", location: "RHS 1.001", name: "Activist Letter Writing", description: ""},
//     {date: mdyDate(11,20,2019), time: "7PM", location: "RHS 1.001", name: "Vegan Thanksgiving Potluck", description: ""},
// ];