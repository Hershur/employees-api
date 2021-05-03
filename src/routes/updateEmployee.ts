import {Request, Response} from 'express';
import {employees} from '../model/employees';

const updateEmployee = (req: Request, res: Response)=> {
    let employeeFoundIndex = employees["employees"].findIndex(emp => emp.employee_id === req.params.empId);
    let employeeFound = employees["employees"].find(emp => emp.employee_id === req.params.empId);

    if(!employeeFound){
        return res.status(404).send(`Employee with id '${req.params.empId}' not found`);
    }
    
    employeeFound = {...employeeFound, first_name: req.body.first_name || employeeFound.first_name};
    employeeFound = {...employeeFound, last_name: req.body.last_name  || employeeFound.last_name};
    employeeFound = {...employeeFound, age: req.body.age  || employeeFound.age};
    employeeFound = {...employeeFound, join_date: req.body.join_date  || employeeFound.join_date};

    employees["employees"][employeeFoundIndex] = employeeFound;

    return res.status(200).json(employees); 
    
}

export {updateEmployee};