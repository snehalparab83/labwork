const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/Identity_proof', (request, response) => {
    const statement = `select Adhar_no,Type_id_proof,Id_card_no from Identity_proof`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.post('/Identity_proof', (request, response) => {    
    const Adhar_no=request.body.Adhar_no;
    const Type_id_proof = request.body.Type_id_proof;
    const Id_card_no = request.body.Id_card_no;

    const statement = `insert into Identity_proof 
        (Adhar_no,Type_id_proof,Id_card_no) values
        ('${Adhar_no}', '${Type_id_proof}', ${Id_card_no})`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.put('/Identity_proof/:Customer_no', (request, response) => {
    const Adhar_no = request.params.Adhar_no;
    const Type_id_proof = request.body.Type_id_proof;
    const Id_card_no = request.body.Id_card_no;
    
    const statement = `
        update Identity_proof set 
        Type_id_proof = '${Type_id_proof}',
        Id_card_no = ${Id_card_no},
        where Adhar_no = ${Adhar_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.delete('/Identity_proof/:Adhar_no', (request, response) => {
    const id = request.params.id;
    const statement = `delete  from  Identity_proof where Adhar_no = ${Adhar_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

module.exports = router;