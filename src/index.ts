//without dependency injection 

import { StudentController } from "./controller/demo1";
import { StudentService } from "./service/student.service";

const serviceInstance = new StudentService();

// student controller is depends on student service class
// Manually created instance for StduentService class and
// pass that instance to StudentController 
const controllerInstance = new StudentController(serviceInstance);

controllerInstance.display();

