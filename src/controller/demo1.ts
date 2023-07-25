import { StudentService } from "../service/student.service";

export class StudentController {
  constructor(private service: StudentService) {
    
  }

  display(){
    console.log('Calling from Student Controller')
    this.service.displayStudent();
  }
}
