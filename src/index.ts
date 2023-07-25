//with dependency injection 
import 'reflect-metadata'
import { container } from 'tsyringe';
import { StudentController } from "./controller/demo1";
import { StudentService } from "./service/student.service";

const controllerInstance = new StudentController();

controllerInstance.display();

