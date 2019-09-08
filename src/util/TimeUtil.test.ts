import {mdyDate, getShortMonthName, getShortDayName} from './TimeUtil';
test('mdyDate produces correct Date', ()=> {
   const date: Date = mdyDate(8,14,1999);
   expect(date.getMonth()).toBe(8-1);
   expect(date.getDate()).toBe(14);
   expect(date.getFullYear()).toBe(1999);
});

test('getShortMonthName is correct', ()=>{
    const date: Date = mdyDate(8,14,1999);
    expect(getShortMonthName(date)).toBe('Aug');
});

test('getShortDayName is correct', ()=>{
    const Xmas95: Date = new Date('December 25, 1995 23:15:30');  // a Monday
    expect(getShortDayName(Xmas95)).toBe("Mon");
});