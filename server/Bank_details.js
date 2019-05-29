const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/Bank_details', (request, response) => {
    const statement = `select Customer_no,Pan_no,Bank_acc_no,Name_as_on_acc from Bank_details`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.post('/Bank_details', (request, response) => {
    const Customer_no = request.body.Customer_no;
    const Pan_no = request.body.Pan_no;
    const Bank_acc_no = request.body.Bank_acc_no;
    const Name_as_on_acc = request.body.Name_as_on_acc;

    const statement = `insert into Bank_details 
        (Customer_no,Pan_no,Bank_acc_no,Name_as_on_acc) values
        ('${Customer_no}', '${Pan_no}', ${Bank_acc_no},${Name_as_on_acc})`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.put('/Bank_details/:Customer_no', (request, response) => {
    const Customer_no = request.params.Customer_no;
    const Pan_no = request.body.Pan_no;
    const Bank_acc_no = request.body.Bank_acc_no;
    const Name_as_on_acc = request.body.Name_as_on_acc;
    
    const statement = `
        update Bank_details set 
        Pan_no = '${Pan_no}',
        Bank_acc_no = '${Bank_acc_no}',
        Name_as_on_acc = ${Name_as_on_acc},
        where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.delete('/Bank_details/:Customer_no', (request, response) => {
    const id = request.params.id;
    const statement = `delete  from  Bank_details where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

module.exports = router;