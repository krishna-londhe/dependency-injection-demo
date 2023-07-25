import { injectable, singleton } from "tsyringe";
import { StudentService } from "../service/student.service";

//identify the dependency through constructor parameters and 
//auto-inject them during the runtime.

// @injectable()
// export class StudentController {
//   constructor(private service: StudentService) {
    
//   }
//   display(){
//     console.log('Calling from Student Controller')
//     this.service.displayStudent();
//   }
// }

////////////////////////////////////////////////////////////
@singleton()
export class StudentController {
  constructor(private service: StudentService) {
    
  }
  display(){
    console.log('Calling from Student Controller')
    this.service.displayStudent();
  }
}

////////////////////////////////////////////////////////////