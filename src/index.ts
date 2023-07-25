//with dependency injection 
import 'reflect-metadata'
import { container } from 'tsyringe';
import { StudentController } from "./controller/student.controller";
import { StudentService } from "./service/student.service";

// first register the dependency to global container 
container.register("IStudentService",StudentService);

const controllerInstance = container.resolve(StudentController);

controllerInstance.display();