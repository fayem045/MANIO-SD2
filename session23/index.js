iloveyou perico


//import the installed module of express 
const express = require("express");
// import mongoose module
const mongoose = require("mongoose");
// provide name for the server
const server = express();
// Declare server port
const port = 5000;

// Trigger connection to mongoDB thru mongoose
mongoose.connect("mongodb://localhost:27017/");
// mongoose.connect("mongodb+srv://admin:admin123@isad-db.re65v.mongodb.net/");

let db = mongoose.connection;

// Check if connection has error
db.on("error", () => console.error.bind(console, "Cannot connect to MongoDB."));

// Check if connection is okay
db.once("open", () => console.log("MongoDB Atlas Connection Succcess!"));

//Schema -> blueprint

const taskSchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        default: "pending"
    }
})

//Model
const Task = mongoose.model("Task", taskSchema);

// Middewares
server.use(express.json());
server.use(express.urlencoded({extended: true}));


server.get("/home", (req, res) => {
    res.send("Hello from the home endpoint!");
});

server.get("/error", (req, res) => {
    res.status(404).send({
        code: 404,
        message: "Sorry the page cannot be found."
    })
})

server.post("/tasks/add", (req, res) => {

    Task.findOne({name: req.body.name}).then((result) => { //called task.findOne():if maynahanap, mapunta s RESULT na parameters. ADD ERR as parameter
        if(result.name != null && result.name == req.body.name){
            res.send("Duplicate found. This task cannot be added!");
        }else{
            let newTask = new Task({
                name: req.body.name
            });

            newTask.save().then((savedTask, saveErr) => {
                if(saveErr){
                    res.send("There is an error saving the task.");
                }else{
                    res.status(201).send({
                        code: 201,
                        message: "Task is now added!",
                        data: savedTask
                    });
                }
            })
        }
    })

    
})




server.listen(port, () => console.log(`Server is now running at port ${port}.`))








// //WITH COMMENTS
// //import the installed module of express
// const express = require("express"); //any name sa string
// //import mongooose
// const mongoose = require("mongoose");
// //provide name for the server
// const server = express(); //invokle func para umanadar
// //declare server port
// const port = 5000;

// //trigger connection to mongoose thru mongoose
// mongoose.connect("mongodb://localhost:27017/"); //if want local, tanggalin srv lin to Local
// // mongoose.connect("mongodb+srv://admin:<db_password>@sd2-manio.knipynl..net/?appName=SD2-MANIO");

// let db = mongoose.connection;

// //Check if connection has error
// db.on("error", console.error.bind("cannot connect to MongoDB"));


// //Check if connection is okay
// db.once("open", () => console.log("MongoDB atlas connection success!"));

// //Schema -> bleprint: choose ano iappasok
// const taskSchema = new mongoose.Schema({
//     name: String, 
//     status: { //object kasi we want to put dafault
//         type: String,
//         default: "pending"
//     }
// });

// server.get("/error", (req, res) => {
//     // res.send("ERROR")//ERESPONSE CAN BE OBJ
//     res.status(404).send({
//         CODE: 404,
//         MESSAGE: ("SORRY THE PAGE CANNOT BE FOUND"),
//     })//ERESPONSE CAN BE OBJ
// } )

// //Model: kasama ni schema.like security guard ni schema(no id no entry)
// const Task = mongoose.model("Task", taskSchema)//upperdcase kapag model

// //Middlewares(lsat part of prep: )
// server.use(express.json()); //lahat accept ng serve rna accept is in json format
// server.use(express.urlencoded({extended: true})); //kaya inpout, not only basa. responsible to read kung ano iniinput ng user dito. lagay true: para maconnected

// //http method: get(if maygusto kuhanin. "find"), post(kapag may iniinsert. "insert"), update("Put or patch, delete"), end point"/HOME"(linalagay s aloob ng method)
// server.get("/home",(req, res) => {
//     res.send("Hello from the home endpoint!");
// })//req or request:client humihingi. res or respond: server magbibigay
// //call server, what httmp method, endpoint, follow re and res

// server.post("/task/add", (req,res) => {
//     let newTask = new Task({ //new task(kasi sya m,agchechek
//         name: req.body.name //manually generated ng system kaya d na need
//     });
//     newTask.save().then((savedTask, saveErr) => {
//         if(saveErr){
//             res.send("There is an error saving the task.");
//         }else{
//             res.status(201).send({
//                 code: 201,
//                 message: "Task is now added",
//                 data: savedTask
//             });//status code is 201: means nakapagrequest code succefully
//         }
//     })
// })

// server.listen(port, () => console.log(`Server is now running at port ${port}.`));

