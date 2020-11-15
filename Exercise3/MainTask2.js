//1
let arr2 = [];
arr2.push(new Date());
//2
arr2.push(new Date(2018, 11, 08));
arr2[1].setHours(21,00,00);
//3
function getDateDay(arr2)
{
    let days=[];
    for(date of arr2)
    {
        days.push(date.getDay());
    }
    return days;    
}

function getNumberOfDaysInMonth(arr2)
{
    let daysInMonth=[];
    for(date of arr2)
    {
        daysInMonth.push(new Date(date.getYear(), date.getMonth()+1, 0).getDate());
    }
    return daysInMonth;    
}

let days = getDateDay(arr2);
let daysInMonth = getNumberOfDaysInMonth(arr2);

//4

function getDayName(day)
{
    switch(day)
    {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Sunday";
    }
}

function mergeArrays(dates, days, daysInMonth)
{
    let concated = [];
    for(let i = 0; i < dates.length; i++)
    {
        concated[i]="Date: ";
        concated[i]+=dates[i].getDate();
        concated[i]+=".";
        concated[i]+=dates[i].getMonth()+1;
        concated[i]+=".";
        concated[i]+=dates[i].getFullYear();
        concated[i]+=", ";

        concated[i]+="Hours: ";
        concated[i]+=dates[i].getHours();
        concated[i]+=":";
        concated[i]+=dates[i].getMinutes();
        concated[i]+=":";
        concated[i]+=dates[i].getSeconds();
        concated[i]+=", ";

        concated[i]+=getDayName(days[i]);

        concated[i]+=", ";
        concated[i]+=daysInMonth[i];
        concated[i]+=" days";
    }
    return concated;
}

let dates = mergeArrays(arr2, days, daysInMonth);