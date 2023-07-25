import { autoInjectable } from "tsyringe";
import { StudentService } from "../service/student.service";

@autoInjectable()
export class StudentController {
  constructor(private service?: StudentService) {
    
  }
  display(){
    console.log('Calling from Student Controller')
    this.service!.displayStudent();
  }
}

////////////////////////////////////////////////////////////