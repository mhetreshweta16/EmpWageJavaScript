//UC2

const IS_FullTime = 1;
let empHrs= 0;
let empInput = Math.floor(Math.random()*2);

if (IS_FullTime == empInput)
{

    Console.log("Employee is Present");
    empHrs = 8;
}
else {
    
    Console.log("Employee is Absent");
    empHrs = 0;
}
let empWage = EmpRatePerHrs * empHrs;
Console.log("the Employee age is {0}", empWage);
