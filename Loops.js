//If statements
const time=new Date().getHours();
console.log(time);
if(time<10)
    console.log("Good morning")
else if(time<18)
    console.log("Good afternoon")
else
    console.log("Good evening")

//Switch Statement
const day=new Date().getDay();
console.log(day);
//Why bother with if statements? That would take too long.
/*if(day==0)
    console.log("Monday")
*/
switch(day){
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");
        break;
}
//For Loop
for(i=0; i<10; i++){
    console.log("Hello " + i) 
}

//While Loop
j=0;
while(j<10){
    console.log("While Looping: " + j);
    j++;
}
j=0;
while(j<-1){
    console.log('While looping: ' + j);
    j++;
}

//Do While Loop
k=0;
do{
    console.log("Do While Looping: " + k);
    k++;
}while(k<-1)