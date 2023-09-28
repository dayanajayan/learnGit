let studentsDetails=[{
    name:"Jine",
    age:23,
    gender:"female",
    
},
{
    name:"Jinu",
    age:13,
    gender:"male",
    
},
{
    name:"Jayson",
    age:32,
    gender:"male",
    
},
{
    name:"Sahana",
    age:12,
    gender:"female",
    
},
{
    name:"Shruthi",
    age:22,
    gender:"female",
    
}]

let count=0;

for (let i=0; i< studentsDetails.length; i++)

if (studentsDetails[i].age<18)
{
    console.log(studentsDetails[i].name +" "+ studentsDetails[i].gender+" is not eligible to vote");
    console.log(studentsDetails[i].isEligible = false);
}
else
{
    console.log(studentsDetails[i].name +" "+ studentsDetails[i].gender+" is eligible to vote")
    console.log(studentsDetails[i].isEligible =true);
    count++;
}
console.log("No of student eligible to vote : "+ count);

