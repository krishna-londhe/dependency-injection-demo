import { StudentController } from "./controller/demo1";
import { StudentService } from "./service/student.service";

const serviceInstance = new StudentService();

const controllerInstance = new StudentController(serviceInstance);

controllerInstance.display();

