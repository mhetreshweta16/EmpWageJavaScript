//UC2
const EmpRatePerHrs= 20;
const IS_PartTime = 2;
const IS_FullTime = 1;
let empHrs= 0;
let empInput = Math.floor(Math.random()*2);

switch (empInput)
            {

                case IS_FullTime:
                    console.log("Employee is Present");
                    empHrs = 8;
                    break;

                case IS_PartTime:
                    console.log("Employee is Present");
                    empHrs = 4;
                    break;

                default:
                    console.log("Employee is Absent");
                    empHrs = 0;
                    break;
            }
     
            let empWage = EmpRatePerHrs * empHrs;
             console.log("the Employee age is "+ empWage);
