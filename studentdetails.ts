class Student {
    enrolmentNumber : number;
    studentName: string;

    constructor(enrolment: number, Name: string) {
            this.enrolmentNumber = enrolment;
            this.studentName = Name;
    }

    studentDetails = () => console.log("Enrolment Number = "+ this.enrolmentNumber +'\n'+"Student Name = " + this.studentName)
}
let obj = new Student(1, 'Sam');
obj.studentDetails();