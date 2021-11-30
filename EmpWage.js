//UC5
const EmpRatePerHrs= 20;
const IS_PartTime = 2;
const IS_FullTime = 1;
const  Num_Of_Working_Days = 20;
let empHrs= 0;
let totalEmpWage = 0;

for ( let day =1; day <= Num_Of_Working_Days; day++ )
            {
                let empInput = Math.floor(Math.random()*2);
                //Console.WriteLine(empInput);
                switch (empInput)
                {

                    case IS_FullTime:
                        //Console.WriteLine("Employee is Present");
                        empHrs = 8;
                        break;

                    case IS_PartTime:
                        //Console.WriteLine("Employee is Present");
                        empHrs = 4;
                        break;

                    default:
                        //Console.WriteLine("Employee is Absent");
                        empHrs = 0;
                        break;
                }

                let empWage = EmpRatePerHrs * empHrs;
                totalEmpWage += empWage;
                console.log("daily Employee Wage for {0} day {1}", day, empWage);
                
            }

            console.log("total employee wage is {0}",  totalEmpWage);
   