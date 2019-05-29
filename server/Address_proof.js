const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/Address_proof', (request, response) => {
    const statement = `select Customer_no,Type_address_proof,Id_card_no,Pin_no,Adhar_no from Address_proof`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.post('/Address_proof', (request, response) => {
    const Customer_no = request.body.Customer_no;
    const Type_address_proof = request.body.Type_address_proof;
    const Id_card_no = request.body.Id_card_no;
    const Pin_no = request.body.Pin_no;
    const Adhar_no=request.body.Adhar_no;

    const statement = `insert into Address_proof 
        (Customer_no,Type_address_proof,Id_card_no,Pin_no,Adhar_no) values
        ('${Customer_no}', '${Type_address_proof}', ${Id_card_no}, ${Pin_no},${Adhar_no})`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.put('/Address_proof/:Customer_no', (request, response) => {
    const Customer_no = request.params.Customer_no;
    const Type_address_proof = request.body.Type_address_proof;
    const Id_card_no = request.body.Id_card_no;
    const Pin_no = request.body.Pin_no;
    const Adhar_no = request.body.Adhar_no;
    
    const statement = `
        update Address_proof set 
        Adhar_no = '${Adhar_no}',
        Type_address_proof = '${Type_address_proof}',
        Id_card_no = ${Id_card_no},
        Pin_no = ${Pin_no}
        where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.delete('/Address_proof/:Customer_no', (request, response) => {
    const id = request.params.id;
    const statement = `delete  from  Address_proof where Customer_no = ${Customer_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

module.exports = router;