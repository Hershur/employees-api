import {Request, Response} from 'express';
import {employees} from '../model/employees';

const getAllEmployees = (req: Request, res: Response)=> {
    return res.status(200).json(employees);
}

export {getAllEmployees}