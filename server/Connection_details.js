const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/Connection_details', (request, response) => {
    const statement = `select Adhar_no,Customer_no,House_no,Street,City,District,State,Pin,Email,Mobile,Residence_ph,Office_ph from Connection_details`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.post('/Connection_details', (request, response) => {
    const Adhar_no = request.body.Adhar_no;
    const Customer_no = request.body.Customer_no;
    const House_no = request.body.House_no;
    const Street = request.body.Street;
    const City=request.body.City;
    const District=request.body.District;
    const State=request.body.State;
    const Pin=request.body.Pin;
    const Email=request.body.Email;
    const Mobile=request.body.Mobile;
    const Residence_ph=request.body.Residence_ph;
    const Office_ph=request.body.Office_ph;

    const statement = `insert into Connection_details 
        (Adhar_no,Customer_no,House_no,Street,City,District,State,Pin,Email,Mobile,Residence_ph,Office_ph) values
        ('${Adhar_no}', '${Customer_no}', ${House_no}, ${Street},${City},${District},${State},${Pin},${Email},${Mobile},${Residence_ph},${Office_ph})`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.put('/Connection_details/:Adhar_no', (request, response) => {
    const Adhar_no = request.params.Adhar_no;
    const Customer_no = request.body.Customer_no;
    const House_no = request.body.House_no;
    const Street = request.body.Street;
    const City = request.body.City;
    const District = request.body.District;
    const State = request.body.State;
    const Pin = request.body.Pin;
    const Email = request.body.Email;
    const Mobile = request.body.Mobile;
    const Residence_ph = request.body.Residence_ph;
    const Office_ph = request.body.Office_ph;
    
    const statement = `
        update Connection_details set 
        Customer_no = '${Customer_no}',
        House_no = ${House_no},
        Pin_no = ${Pin_no},
        Street = ${Street},
        City = ${City},
        District = ${District},
        State = ${State},
        Pin = ${Pin},
        Email = ${Email},
        Mobile = ${Mobile},
        Residence_ph = ${Residence_ph},
        Office_ph = ${Office_ph}
        
        where Adhar_no = ${Adhar_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.delete('/Connection_details/:Adhar_no', (request, response) => {
    const id = request.params.id;
    const statement = `delete  from  Connection_details where Adhar_no = ${Adhar_no}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

module.exports = router;