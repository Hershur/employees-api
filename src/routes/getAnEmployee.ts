import {Request, Response} from 'express';
import {employees} from '../model/employees';

const getAnEmployee = (req: Request, res: Response)=> {
    const employeeFound = employees["employees"].find(emp => emp.employee_id === req.params.empId);

    if(!employeeFound){
        return res.status(404).send(`Employee with id '${req.params.empId}' not found`);
    }
    
    return res.status(200).json(employeeFound); 
    
}

export {getAnEmployee};