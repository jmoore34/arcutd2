/** Maps month numbers to names, e.g. 1 -> Jan */
export function getShortMonthName(date: Date): string {
    return ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][date.getMonth()];
}

/** Maps day numbers to short names, e.g. 0 -> Sunday */
export function getShortDayName(date: Date) {
    return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][date.getDay()];
}


export function mdyDate(m: number, d: number, y:number): Date {
    const monthIndex = m - 1; // e.g. January 1 -> 0
    return new Date(y, monthIndex, d);
}

