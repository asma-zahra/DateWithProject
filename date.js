const myDate = new Date();
// console.dir(myDate);
console.log(myDate);
/////////////////////////////////////////////////

//Local Date get Methods
// console.log('Local Year', myDate.getFullYear())
// console.log('Local Month', myDate.getMonth())
// console.log('Local Date', myDate.getDate())
// console.log('Local Day', myDate.getDay())
// console.log('Local Hours', myDate.getHours())
// console.log('Local Minutes', myDate.getMinutes())
// console.log('Local Seconds', myDate.getSeconds())
// console.log('Local Milliseconds', myDate.getMilliseconds())
// console.log('Local Year - 1900', myDate.getYear()) // Deprecated

// Other get methods
// console.log("Timestamp in Milliseconds", myDate.getTime());
// console.log("Time Zone Offset in Minutes", myDate.getTimezoneOffset());

// UTC get methods
// console.log('UTC Year', myDate.getUTCFullYear())
// console.log('UTC Month', myDate.getUTCMonth())
// console.log('UTC Date', myDate.getUTCDate())
// console.log('UTC Day', myDate.getUTCDay())
// console.log('UTC Hours', myDate.getUTCHours())
// console.log('UTC Minutes', myDate.getUTCMinutes())
// console.log('UTC Seconds', myDate.getUTCSeconds())
// console.log('UTC Milliseconds', myDate.getUTCMilliseconds())

//----------Diffrence between normal methods and UTC method--------------------
// console.log("Local Date", myDate.toString());
// console.log("UTC Date", myDate.toUTCString());

// console.log("Local Date", myDate.getDate());
// console.log("UTC Date", myDate.getUTCDate());

// console.log("Local Month", myDate.getMonth() + 1);
// console.log("UTC Month", myDate.getUTCMonth() + 1);

// console.log("Local Year", myDate.getFullYear());
// console.log("UTC Year", myDate.getUTCFullYear());

// console.log("Local Day", myDate.getDay());
// console.log("UTC Day", myDate.getUTCDay());

// console.log("Local seconds", myDate.getSeconds());
// console.log("UTC Seconds", myDate.getUTCSeconds());

// console.log("Local Minutes", myDate.getMinutes());
// console.log("UTC Minutes", myDate.getUTCMinutes());

// console.log("Local Houe", myDate.getHours());
// console.log("UTC Hour", myDate.getUTCHours());

// console.log('Local Date',myDate.getTimezoneOffset());

// console.log("Local milliSeconds", myDate.getMilliseconds());
// console.log("UTC milliSeconds", myDate.getUTCMilliseconds());
///////////////////////////////////////////////////////////////////////////

// to method without arguments
// console.log(myDate.toString());
// console.log(myDate.toUTCString());
/////////////////////////////////////
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// /////////////////////////////////
// console.log('toDateString: ', myDate.toDateString())
// console.log('toTimeString: ', myDate.toTimeString())

////////////////////////////////////////////////////
//to methods with Arguments
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString("en-GB"));
// console.log('toLocaleTimeString: ', myDate.toLocaleTimeString())
////////////////explore all 3 to methods with Arguments now
// console.log(myDate.toLocaleString("en-GB"));
// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };
// console.log(myDate.toLocaleString("en-GB", options));
//////////////////
// console.log(myDate.toLocaleDateString("en-GB"));
// console.log('toLocaleTimeString: ', myDate.toLocaleTimeString())
///////////////////////////////////////////////////////

//Local set Method
// console.log(myDate);
// myDate.setFullYear(2040);
// myDate.setMonth(0);
// myDate.setDate(15);
// myDate.setHours(11);
// myDate.setMinutes(30);
// myDate.setMinutes(20);
// myDate.setMilliseconds(60);
// console.log(myDate);
// myDate.setTime(1789655121545454); //time in msec since 1 jan 1970 unique time ka poora date dega
// console.log(myDate);
// myDate.setYear(2045); //deprecated
// console.log(myDate);
//////////////////////////////////////////

// UTC set Method
// console.log(myDate);
// UTC set methods
// myDate.setUTCFullYear(2014)
// myDate.setUTCMonth(10)
// myDate.setUTCDate(5)
// myDate.setUTCHours(20)
// myDate.setUTCMinutes(12)
// myDate.setUTCSeconds(10)
// myDate.setUTCMilliseconds(60)
//////////////////////////////////////////

// static methods
// console.log(Date.now())
// console.log(Date.parse('04 Dec 1995 00:12:00 GMT'))
// console.log(Date.UTC())
//////////////////////////////////////////

// other methods
// console.log(myDate.valueOf())

//////////////////////////////////////////

/* Understand getTime(); Timestamp Deeply */

// const myDate = new Date(1730792925800);
// console.log(myDate.getTime());
// console.log(Date.now());
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString("en-GB").split(",")[0]);
// console.log(myDate.toLocaleDateString("en-GB"));
// const myDate = new Date(0);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// How to represent time before unix epoch oo time ? use negative no
// const myDate = new Date(-1000);
// console.log(myDate.toUTCString());

////////////////////////////////////////////////////////////////
// 4 ways to pass date and format date

//first way
//mm//dd/yyyy or yyyy/mm/dd format is acceptable
//dd/mm/yyyy format not acceptable
// const user1DOB = "02/04/2000";
// const user2DOB = "03-04-1998";

// converting dd//mm/yyyy format to yyyy/mm/dd format of user1dob and user2dob
// const user1Date = new Date(user1DOB.split("/").reverse().join("/"));
// const user2Date = new Date(user2DOB.split("-").reverse().join("-"));
// console.log(user1Date);
// console.log(user2Date);

//Second way
//want to pass date and time both? solution:- use ISO format OR add space after date then add time
// const userDOB = "2024/03/01 12:02:03.300";
// const userDate = new Date(userDOB);
// console.log(userDate);
// const user3DOB = "1998-05-02T11:30:30.300Z";
// const user3Date = new Date(user3DOB);
// console.log(user3Date);

//Third way
///////////////////////////////////////////////////////////////////////
//pass year month date hour then min then sec and msec all in one go
// const user4Date = new Date(2000, 11, 12, 4, 30, 15, 300);
// console.log(user4Date);

//Forth way
//// another way to convert dd/mm/yyyy format to yyyy/mm/dd format
// const user1DOB = "02/04/2000";
// console.log(user1DOB.split("/")); // do the array destructuring
// const [day, month, year] = user1DOB.split("/");
//you have got day month year so now pass it in the reverse order year then month then date to get yyyy/mm//dd format
// const user1Date = new Date(year, month - 1, day);
// console.log(user1Date);
