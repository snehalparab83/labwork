const express = require('express');
const bodyParser = require('body-parser');
const Address_proofRouter = require('./Address_proof');
const Bank_detailsRouter=require('./Bank_details');
const Connection_detailsRouter=require('./Connection_details');
const Connection_typesRouter=require('./Connection_types');
const Identity_proofRouter=require('./Identity_proof');
const LoginRouter=require('./Login');
const Order_tableRouter=require('./Order_table');
const Personal_detailsRouter=require('./Personal_details');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(Address_proofRouter);
app.use(Bank_detailsRouter);
app.use(Connection_detailsRouter);
app.use(Connection_typesRouter);
app.use(Identity_proofRouter)
app.use(LoginRouter);
app.use(Order_tableRouter);
app.use(Personal_detailsRouter);

app.listen(3000, '0.0.0.0', () => {
    console.log('server started on port 3000');
})
  