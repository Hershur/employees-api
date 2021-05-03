import {Request, Response} from 'express';
import {employees} from '../model/employees';

const deleteEmployee = (req: Request, res: Response)=> {
    let employeeFound = employees["employees"].find(emp => emp.employee_id === req.params.empId);

    if(!employeeFound){
        return res.status(404).send(`Employee with id '${req.params.empId}' not found`);
    }
    
    employees["employees"] = employees["employees"].filter(emp => emp != employeeFound);

    return res.status(200).json(employees); 
    
}

export {deleteEmployee};