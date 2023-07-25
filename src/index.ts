//with dependency injection 
import 'reflect-metadata'
import { container } from 'tsyringe';
import { StudentController } from "./controller/demo1";
import { StudentService } from "./service/student.service";

// const serviceInstance = new StudentService();

// const controllerInstance = new StudentController(serviceInstance);

const controllerInstance = container.resolve(StudentController);
//it return the instance of StudentController with auto-injected dependecy if any

controllerInstance.display();

