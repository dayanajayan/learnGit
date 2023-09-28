let studentDetails=[{
    name: "Dayana",
    class: "Fifth",
    gender:"female",
    marks:[
        {subject: "english",mark:78},
        {subject:"science",mark:56},
        {subject:"maths",mark:40},
        {subject:"tamil",mark:67},
        {subject:"social",mark:89}
    ]},
    {   name: "Jenifer",
        class: "Fifth",
        gender:"Female",
        marks:[
            {subject: "english",mark:23},
            {subject:"science",mark:67},
            {subject:"maths",mark:30},
            {subject:"tamil",mark:32},
            {subject:"social",mark:56}
    ]},
    {   name: "Ann",
        class: "Fifth",
        gender:"Female",
        marks:[
            {subject: "english",mark:34},
            {subject:"science",mark:67},
            {subject:"maths",mark:35},
            {subject:"tamil",mark:32},
            {subject:"social",mark:56}
    ]},
        {  name: "Surya",
           class: "Fifth",
           gender:"Male",
           marks:[
                {subject: "english",mark:90},
                {subject:"science",mark:93},
                {subject:"maths",mark:89},
                {subject:"tamil",mark:96},
                {subject:"social",mark:99}
    ]}]


for (let i=0; i<studentDetails.length; i++){
     let total=0;
     let grandTotal = 0;
     let percentage=0;
    let failedSubject=studentDetails[i].marks.filter((subject)=> subject.mark<35);

    
    if (failedSubject.length >0){
    console.log(studentDetails[i].name);
    console.log(failedSubject);
    }
    for (let j=0; j<studentDetails[i].marks.length; j++){
        total+=studentDetails[i].marks[j].mark;
        grandTotal=total-failedSubject;
        percentage=grandTotal/5;
    }
   // console.log(studentDetails[i].name+" Score is: "+grandTotal+ " Percentage is: "+percentage);
if((percentage>35 && percentage<=60 ))
{
    console.log(studentDetails[i].name+" Total Marks Obtained is: "+grandTotal+" and its Percentage is:  "
    +percentage+" Second Class Pass");
}
else if((percentage>60 && percentage<=90 ))
{
    console.log(studentDetails[i].name+" Total Marks Obtained is: "+grandTotal+" and its Percentage is:  "
    +percentage+" First Class Pass");
}
else if((percentage>90 && percentage<=100 ))
{
    console.log(studentDetails[i].name+" Total Marks Obtained is: "+grandTotal+" and its Percentage is:  "
    +percentage+" Distinction Pass");
}
else{
    console.log("Fail");
}

}



/*
    for (let i=0; i<studentDetails.length; i++)
    {
        let total=0; 
        let percentage=0;
       for(let j=0; j<studentDetails[i].marks.length; j++)
       {
        total+=studentDetails[i].marks[j].mark;
       }
       percentage=total/5;
      // console.log(studentDetails[i].name+" Total Marks Obtained is: "+total+" and its Percentage is:  "+percentage);
    
    
    if (percentage<=35 ){
        console.log(studentDetails[i].name+" Total Marks Obtained is: "+total+" and its Percentage is:  "
        +percentage+" Fail");
    }
    else if((percentage>35 && percentage<=60 ))
    {
        console.log(studentDetails[i].name+" Total Marks Obtained is: "+total+" and its Percentage is:  "
        +percentage+"Second Class");
    }
    else if((percentage>60 && percentage<=90 ))
    {
        console.log(studentDetails[i].name+" Total Marks Obtained is: "+total+" and its Percentage is:  "
        +percentage+"First Class");
    }
    else if((percentage>90 && percentage<=100 ))
    {
        console.log(studentDetails[i].name+" Total Marks Obtained is: "+total+" and its Percentage is:  "
        +percentage+"Distinction");
    }
    else
    {
        console.log("ERROR IN MARKS");
    }
}
*/

    