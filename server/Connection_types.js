const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/Connection_types', (request, response) => {
    const statement = `select Customer_no,Types_cylinder,Types_connections from Connection_types`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.post('/Connection_types', (request, response) => {
    const Customer_no = request.body.Customer_no;
    const Types_cylinder = request.body.Types_cylinder;
    const Types_connections = request.body.Types_connections;

    const statement = `insert into Connection_types 
        (Customer_no,Types_cylinder,Types_connections) values
        ('${Customer_no}', '${Types_cylinder}', ${Types_connections})`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.put('/Connection_types/:Customer_no', (request, response) => {
    const Customer_no = request.params.Customer_no;
    const Types_cylinder = request.body.Types_cylinder;
    const Types_connections = request.body.Types_connections;
    
    const statement = `
        update Connection_types set 
        Types_cylinder = '${Types_cylinder}',
        Types_connections = '${Types_connections}',
        where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.delete('/Connection_types/:Customer_no', (request, response) => {
    const id = request.params.id;
    const statement = `delete  from  Connection_types where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

module.exports = router;