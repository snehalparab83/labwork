const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/Order_table', (request, response) => {
    const statement = `select Customer_no,Order_id from Order_table`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.post('/Order_table', (request, response) => {
    const Customer_no = request.body.Customer_no;
    const Order_id = request.body.Order_id;

    const statement = `insert into Order_table 
        (Customer_no,Order_id) values
        ('${Customer_no}', '${Order_id}')`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.put('/Order_table/:Customer_no', (request, response) => {
    const Customer_no = request.params.Customer_no;
    const Order_id = request.body.Order_id;
    
    const statement = `
        update Order_table set 
        Order_id = '${Order_id}'
        where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.delete('/Order_table/:Customer_no', (request, response) => {
    const id = request.params.id;
    const statement = `delete  from  Order_table where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

module.exports = router;