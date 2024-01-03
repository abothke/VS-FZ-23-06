const checkWeekday = (el) =>{
    const getDay = new Date (el).getDay();
    if (getDay == 0 || getDay == 6){ // 0 = Sonntag, 6 = Samstag
        return "Weekend"
    } else {
        return "Arbeitstag"
    }
}

console.log(checkWeekday("12.15.2019"));
console.log(checkWeekday("2.16.2001"));
console.log(checkWeekday("2.1.2020"));
console.log(checkWeekday("2.29.2020"));