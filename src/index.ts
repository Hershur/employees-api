import express from 'express';
import bodyParser from 'body-parser';
import { createEmployee } from './routes/createEmployee';
import { getAllEmployees } from './routes/getAllEmployees';
import { getAnEmployee } from './routes/getAnEmployee';
import { updateEmployee } from './routes/updateEmployee';
import { deleteEmployee } from './routes/deleteEmployee';
import swaggerUI from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(bodyParser.json());

//Get all employees - Default route
app.get('/', getAllEmployees);

//Get an employee
app.get('/:empId', getAnEmployee);

//Create new employee
app.post('/add', createEmployee);

//Update an employee
app.put('/:empId/update', updateEmployee);

//Delete an employee
app.delete('/:empId/delete', deleteEmployee);


app.listen(5000, ()=> console.log("Server running"));