// - input week number and console total day

let weekNo =6;
let daysInWeek = 7;
let noOfDay=daysInWeek*weekNo;
console.log(noOfDay);

// input month number and console number of days in that month.

let monthNo = 4;

if(monthNo == 1){
    console.log("January:31");
}
else if(monthNo==2){
    console.log("February:28");
}
else if(monthNo==3){
    console.log("march:30");
}
else if(monthNo==4){
    console.log("april:31");
}
else if(monthNo==5){
    console.log("May:30");
}
else if(monthNo==6){
    console.log("Jun:30");
}
else if(monthNo==7){
    console.log("july:31");
}
else if(monthNo==8){
    console.log("august:30");
}
else if(monthNo==9){
    console.log("september:31");
}
else if(monthNo==10){
    console.log("october:30");
}
else if(monthNo==11){
    console.log("november:30");
}
else if(monthNo==12){
    console.log("december:31");
}

//10- calculate electricity bill from given condition 
//  For first 50 units tk. 0.50/unit
//  For next 100 units tk. 0.75/unit
//  For next 100 units tk. 1.20/unit
//  For unit above 250 tk. 1.50/unit
//  An additional Meter charge is 55 tk added to the bill

let noOfUnit = 200;

if(noOfUnit <= 50 ){
    console.log("bill is:"+ noOfUnit*0.50);
}
else if(noOfUnit <= 150 ){
    console.log("bill is:"+ noOfUnit*0.75);
}
else if(noOfUnit <= 250 ){
    console.log("bill is:"+ noOfUnit*1.20);
}
else if(noOfUnit >250 ){
    console.log("bill is:"+ noOfUnit*1.50);
}