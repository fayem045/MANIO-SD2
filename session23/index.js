//import the installed module of express 
const express = require("express");
// import mongoose module
const mongoose = require("mongo ose");
// provide name for the server
const server = express(); //invoke  func para umanadar
// Declare server port
const port = 5000;

// Trigger connection to mongoDB thru mongoose
mongoose.connect("mongodb://localhost:27017/");
//if want local, tanggalin srv lin to Local
// mongoose.connect("mongodb+srv://admin:<db_password>@sd2-manio.knipynl..net/?appName=SD2-MANIO");

// mongoose.connect("mongodb+srv://admin:admin123@isad-db.re65v.mongodb.net/");

let db = mongoose.connection;

// Check if connection has error
db.on("error", () => console.error.bind(console, "Cannot connect to MongoDB."));

// Check if connection is okay
db.once("open", () => console.log("MongoDB Atlas Connection Succcess!"));

//Schema -> blueprint. making sure na align ung data(choose ano ipapasok)
const taskSchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        default: "pending"
    }
})//;

//Model: check if same data inouted because it create database. delivery of data
const Task = mongoose.model("Task", taskSchema);

// Middewares: code na may "use"
server.use(express.json());//express: accepting data in json format only
server.use(express.urlencoded({extended: true})); //can inout and read. enable to read the input of user. "true"= to connect

//2 way: req and response

//http method: get(if maygusto kuhanin. "find"), post(kapag may iniinsert. "insert"), update("Put or patch, delete"), end point"/HOME"(linalagay s aloob ng method)
server.get("/home", (req, res) => {
    res.send("Hello from the home endpoint!");
});//req(request):client humihingi. res(respond): server magbibigay
//call server, what http method, endpoint, follow res and respond

server.get("/error", (req, res) => {
        // res.send("ERROR")//ERESPONSE CAN BE OBJ
    res.status(404).send({
        code: 404,
        message: "Sorry the page cannot be found."
    })//ERESPONSE CAN BE OBJ
})

//if manual this start. 
server.post("/tasks/add", (req, res) => {

    Task.findOne({name: req.body.name}).then((result) => { //called task.findOne():if maynahanap, mapunta s RESULT na parameters. ADD ERR as parameter
        if(result.name != null && result.name == req.body.name){
            res.send("Duplicate found. This task cannot be added!");
        }else{
            let newTask = new Task({ //new task(kasi sya magchecheck
                name: req.body.name //manually generated ng system kaya d na need
            });

            newTask.save().then((savedTask, saveErr) => {
                if(saveErr){
                    res.send("There is an error saving the task.");
                }else{
                    res.status(201).send({ // status, heto ung response from the server sa postman(para maknows na add agad, if no:loading loop)
                        code: 201, //[201: successfully]
                        message: "Task is now added!",
                        data: savedTask
                    });
                }
            })
        }
    })

    
})
//if manual this end: it will take 5mins vs ai 1min
//PUT FORMAT IN AI, and endpoint

server.listen(port, () => console.log(`Server is now running at port ${port}.`))


//archiving(hard delete) and unchriving(softdeletion)


