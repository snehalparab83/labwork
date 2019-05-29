const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/Personal_details', (request, response) => {
    const statement = `select Customer_no,Adhar_no,First_name,Middle_name,Last_name,Birthdate from Personal_details`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.post('/Personal_details', (request, response) => {
    const Customer_no = request.body.Customer_no;
    const Adhar_no = request.body.Adhar_no;
    const First_name = request.body.First_name;
    const Middle_name = request.body.Middle_name;
    const Last_name = request.body.Last_name;
    const Birthdate = request.body.Birthdate;

    const statement = `insert into Personal_details 
        (Customer_no,Adhar_no,First_name,Middle_name,Last_name,Birthdate) values
        ('${Customer_no}', '${Adhar_no}', ${First_name},${Middle_name},${Last_name},${Birthdate})`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.put('/Personal_details/:Customer_no', (request, response) => {
    const Customer_no = request.params.Customer_no;
    const Adhar_no = request.body.Adhar_no;
    const First_name = request.body.First_name;
    const Middle_name = request.body.Middle_name;
    const Last_name = request.body.Last_name;
    const Birthdate = request.body.Birthdate;
    
    const statement = `
        update Personal_details set 
        Adhar_no = '${Adhar_no}',
        First_name = '${First_name}',
        Middle_name = ${Middle_name},
        Last_name = ${Last_name},
        Birthdate = ${Birthdate}
        where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.delete('/Personal_details/:Customer_no', (request, response) => {
    const id = request.params.id;
    const statement = `delete  from  Personal_details where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

module.exports = router;