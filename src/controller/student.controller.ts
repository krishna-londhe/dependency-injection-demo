import { injectable, inject } from "tsyringe";
import { IStudentService } from "../service/student.service.interface";

@injectable()
export class StudentController {
  constructor(@inject("IStudentService")private service: IStudentService) {
    
  }
  display(){
    console.log('Calling from Student Controller')
    this.service.displayStudent();
  }
}

////////////////////////////////////////////////////////////