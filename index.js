/*
*
*Title:"Uptime Monitoring Application"
*Description:A RESTFull API to monitor up or down time of user defined links
*Author: Md Riaz
*Date: 31/8/2022
*/
// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data =require('./lib/data');
// app object - module scaffolding
const app = {};

//testing file system
data.create('test','newFile',{'name': 'bangladesh','language':'Bangla'},(err)=>{
    console.log(`error was`,err);
})


// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();