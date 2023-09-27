let unit=101;

switch(true){
    case (unit <= 100):
    
    console.log("Total Bill is: 0 unit is 100 and below");
    break;

    case (unit>100 && unit<=200):
    let x=(unit-100)*6;
    console.log("Total Bill is: " +x +" "+"unit is between 101 and 200");
    break;

    case (unit>200 && unit<=300):
        let y=0+((unit-100)*6)+
            ((unit-200)*7);
    console.log("Total Bill is: " +y +" "+"unit is between 201 and 300");
    break;

    case (unit>300 && unit<=400):
        console.log(threehundresabove());
        break;

        default:
            console.log(fourhundredabove());

}

function fourhundredabove(){
    let a=0+((unit-100)*6)+
    ((unit-200)*7)+
    ((unit-300)*8)+
    ((unit-400)*9);
console.log("Total Bill is: " +a +" "+"unit is 401 and above");
}

function threehundresabove(){
    let z=0+((unit-100)*6)+
    ((unit-200)*7)+
    ((unit-300)*8);
    console.log("Total Bill is: " +z +" "+"unit is between 301 and 400");
}
