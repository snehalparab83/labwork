const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/Login', (request, response) => {
    const statement = `select Customer_no,Password from Login`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.post('/Login', (request, response) => {
    const Customer_no = request.body.Customer_no;
    const Password = request.body.Password;

    const statement = `insert into Login 
        (Customer_no,Password) values
        ('${Customer_no}', '${Password}')`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.put('/Login/:Customer_no', (request, response) => {
    const Customer_no = request.params.Customer_no;
    const Password = request.body.Password;
    
    const statement = `
        update Login set 
        Password = '${Password}'
        where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.delete('/Login/:Customer_no', (request, response) => {
    const id = request.params.id;
    const statement = `delete  from  Login where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

module.exports = router;