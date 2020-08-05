/*
The Javascript date object returns a new Date like this(2020-08-04T13:34:42.351Z) using the constructor new Date(), 
return the day:day, month:month and year:year as key value pairs in a hash.

*/

function dateObject() {
    date = new Date();

    obj = {
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getYear()
    }

    return obj;
}