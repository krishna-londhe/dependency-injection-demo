import { IStudentService } from "./student.service.interface";

export class StudentService implements IStudentService{
    displayStudent(){
        console.log("From Student service...displayStudent method");
    }
}