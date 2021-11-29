//UC2
const EmpRatePerHrs= 20;
const IS_PartTime = 2;
const IS_FullTime = 1;
let empHrs= 0;
let empInput = Math.floor(Math.random()*2);

if (IS_FullTime == empInput)
            {

                Console.log("Employee is Present");
                empHrs = 8;
            }
            else if (IS_PartTime == empInput)
            {

                Console.log("Employee is Present");
                empHrs = 4;
            }
            else {

                Console.WriteLine("Employee is Absent");
                empHrs = 0;
            }
            let empWage = EmpRatePerHrs * empHrs;
            Console.log("the Employee age is "+ empWage);
