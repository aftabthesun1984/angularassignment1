class Employee  {
    private name: string;
    private color:string;
    private birthYear : string
    
    get Name(): string{
        return this.name;
    }
    get Color(): string{
        return this.color;
    }
    get BirthYear(): string{
        return this.birthYear;
    }

    set Name(value: string){
        this.name = value;
    }
    set Color(value: string){
        this.color = value;
    }
    set BirthYear(value: string){
        this.birthYear = value;
    }
}
class AdhocEmployee extends Employee {
        private workHour: number; 
        
        get WorkHour(): number{
            return this.workHour;
        }
        set WorkHour(value: number){
            this.workHour = value;
        }
    }

var adhocEmployee = new AdhocEmployee();
adhocEmployee.Name = "Sam";
adhocEmployee.Color = "White";
adhocEmployee.BirthYear = "1990";
adhocEmployee.WorkHour = 10;

console.log("Name :" + adhocEmployee.Name +'\n'+"Color :" + adhocEmployee.Color +'\n'+"BirthYear :" + adhocEmployee.BirthYear +'\n'+"WorkHour :" + adhocEmployee.WorkHour);
   