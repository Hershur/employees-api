import {Request, Response} from 'express';
import {employees} from '../model/employees';

interface IEmployeeObj {
    employee_id: string,
    first_name: string,
    last_name: string,
    age: string,
    join_date: string
}

const emptyEmployeeObj = {
    first_name: "",
    last_name: "",
    age: "",
    join_date: ""
}

const createEmployee = (req: Request, res: Response)=> {
    let newEmployeeObj: IEmployeeObj  = req.body;
    const numOfEmployees = employees["employees"].length;
    let newEmployeeId = `E${(numOfEmployees+1).toString().padStart(5,"0")}`;
    
   

    newEmployeeObj = Object.assign({employee_id: newEmployeeId}, newEmployeeObj);
    employees["employees"].push(newEmployeeObj);

    
    try {
        if(JSON.stringify(Object.keys(req.body)) === JSON.stringify(Object.keys(emptyEmployeeObj))){
            return res.status(201).json(employees);
        } else {
            return res.status(400).send("Incomplete employee details");
        }
    } catch (error) {
        return res.status(404).send("Invalid Employee Details!");
    }
}

export {createEmployee};
