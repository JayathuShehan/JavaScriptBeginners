const date = new Date();
console.log(date);

const year = date.getFullYear();
console.log(year);

const month = date.getMonth();
console.log(month);

const day = date.getDate();
console.log(day);

const hour = date.getHours();
console.log(hour);

const minute = date.getMinutes();
console.log(minute);

const second = date.getSeconds();
console.log(second);

const millisecond = date.getMilliseconds();
console.log(millisecond);

const dayOFWeek = date.getDay();
console.log(dayOFWeek);

date.setDate(1);
console.log(date);

const date2 = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(date2);

const date3 = new Date("2024-01-02T12:00:00Z");
console.log(date3);

const date4 = new Date(0); // milliseconds
console.log(date4);