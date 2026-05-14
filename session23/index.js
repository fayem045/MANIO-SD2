//nodemon index.js: start the server in ineterminal
//node i : if newly created, start server in terminal

//import the installed module of express 
const express = require("express");
// import mongoose module
const mongoose = require("mongoose");
// provide name for the server
const server = express(); //invoke  func para umanadar
// Declare server port
const port = 5000;

// Trigger connection to mongoDB thru mongoose
// mongoose.connect("mongodb://localhost:27017/");
//if want local, tanggalin srv lin to Local
// mongoose.connect("mongodb+srv://admin:<db_password>@sd2-manio.knipynl..net/?appName=SD2-MANIO");
mongoose.connect("mongodb+srv://admin:admin123@sd2-manio.knipynl.mongodb.net/task-management?appName=SD2-MANIO");

let db = mongoose.connection;

// Check if connection has error
db.on("error", () => console.error.bind(console, "Cannot connect to MongoDB."));

// Check if connection is okay
db.once("open", () => console.log("MongoDB Atlas Connection Succcess!"));

//Schema -> blueprint. making sure na align ung data(choose ano ipapasok)
const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    isActive: { //is active: malaman if nandon pa or wala na(false: wala na(archive na), true: nandon pa)
        type: Boolean,
        default: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateCompleted: Date,
    status: {
        type: String,
        default: "pending"
    }
    }
)//;

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
    Task.findOne({ name: req.body.name }).then((result, err) => {
        if (result != null && result.name == req.body.name) {
        res.send("Duplicate found. This task cannot be added!");
        } else {
        let newTask = new Task({
            name: req.body.name,
            description: req.body.description,
        });

        newTask.save().then((savedTask, saveErr) => {
            if (saveErr) {
            res.send("There is an error saving the task.");
            } else {
            res.status(201).send({
                code: 201,
                message: "Task is now added!",
                data: savedTask,
            });
            }
        });
        }
    });
});

//"/taskId: best [pract sa vscode not". params instead of body kasi sa url nakalagay ung id. "req.params.taskId" instead of "req.body.taskId" kasi sa url nakalagay ung id.
server.post("/tasks/edit/:taskId", (req, res) => {
    Task.findOne({ _id: req.params.taskId }).then((result, err) => {
        if (result == null) {
            res.send("Task not found!");
        } else {
            result.name = req.body.name;
            result.description = req.body.description;

            result.save().then((updatedTask, updateErr) => {
                if (updateErr) {
                    res.send("There is an error updating the task.");
                } else {
                    res.status(200).send({
                        code: 200,
                        message: "Task is now updated!",
                        data: updatedTask,
                    });
                }
            });
        }
    });
});

server.post("/tasks/:taskId/mark-complete", (req, res) => {
    Task.findOne({ _id: req.params.taskId }).then((result, err) => {
        if (result == null) {
            res.send("Task not found!");
        } else {
            result.status = "complete";
            result.dateCompleted = new Date();

            result.save().then((updatedTask, updateErr) => {
                if (updateErr) {
                    res.send("There is an error marking the task as complete.");
                } else {
                    res.status(200).send({
                        code: 200,
                        message: "Task is now marked as complete!",
                        data: updatedTask,
                    });
                }
            });
        }
    });
});

//ADD ALL. "get":hhtp point. 
server.get("/tasks/all", (req, res) => {
    Task.find({}).then((result, err) => {
        if(err){
            res.send("There is an error fetching all tasks.");
        }else{
            res.status(200).send({
                code: 200,
                message: "Here are all tasks.",
                count: result.length,
                data: result
            });
        }
    })
})
//vompleted and pending
server.get("/tasks/all/completed", (req, res) => {
    Task.find({status: "complete"}).then((result, err) => {
        if(err){
            res.send("There is an error fetching all completed tasks.");
        }else{
            res.status(200).send({
                code: 200,
                message: "Here are all completed tasks.",
                count: result.length,
                data: result
            });
        }
    })
})

server.get("/tasks/all/pending", (req, res) => {
    Task.find({status: "pending"}).then((result, err) => {
        if(err){
            res.send("There is an error fetching all pending tasks.");
        }else{
            res.status(200).send({
                code: 200,
                message: "Here are all pending tasks.",
                count: result.length,
                data: result
            });
        }
    })
})

server.get("/tasks/all/archived", (req, res) => {
    Task.find({isActive: false}).then((result, err) => {
        if(err){
            res.send("There is an error fetching all archived tasks.");
        }else{
            res.status(200).send({
                code: 200,
                message: "Here are all archived tasks.",
                count: result.length,
                data: result
            });
        }
    })
})

server.patch("/tasks/active/:taskId", (req, res) => {
    Task.findOne({_id: req.params.taskId}).then((result, err) => {
        if(result == null){
            res.send("Task not found. Cannot update active status!");
        }else{
            if(result.isActive == false){
                result.isActive = true;
            }else{
                result.isActive = false;
            }

            result.save().then((updatedTask, updateErr) => {
                if(updateErr){
                    res.send("There is an error updating task active status.");
                }else{
                    res.status(200).send({
                        code: 200,
                        message: "Task active status is now updated!",
                        status: updatedTask.isActive,
                        data: updatedTask
                    });
                }
            })
        }
    })
})

server.delete("/task/delete/:taskId", (req, res) => {
    Task.deleteOne({ _id: req.params.taskId }).then((result, err) => {
        if (err) {
            res.send("There is an error deleting the task.");
        } else {
            res.status(200).send({
                code: 200,
                message: "Task is now deleted!",
                data: result
            });
        }
    });
});

//archiving(hard delete) and unchriving(softdeletion). switch on and off
//"isActive: false"=archived, "isActive: true"=unarchived. "delete"=hard delete, "update"=soft delete
//for upodates
//patch: maliit na item only
//update: palit buo,name,age...



//if manual this end: it will take 5mins vs ai 1min
//PUT FORMAT IN AI, and endpoint

server.listen(port, () => console.log(`Server is now running at port ${port}.`))



















//PROMPT:
// 1. create a new request for editing the task name and description.
// endpoint: /tasks/edit 
// 2. Use the task ID to fetch the data
// 3. follow my code formatting.
// code:
// server.post("/tasks/add", (req, res) => {
//     Task.findOne({ name: req.body.name }).then((result, err) => {
//         if (result != null && result.name == req.body.name) {
//         res.send("Duplicate found. This task cannot be added!");
//         } else {
//         let newTask = new Task({
//             name: req.body.name,
//             description: req.body.description,
//         });

//         newTask.save().then((savedTask, saveErr) => {
//             if (saveErr) {
//             res.send("There is an error saving the task.");
//             } else {
//             res.status(201).send({
//                 code: 201,
//                 message: "Task is now added!",
//                 data: savedTask,
//             });
//             }
//         });
//         }
//     });
// });



// server.post("/tasks/add", (req, res) => {

//     Task.findOne({name: req.body.name}).then((result) => { //called task.findOne():if maynahanap, mapunta s RESULT na parameters. ADD ERR as parameter
//         if(result.name != null && result.name == req.body.name){
//             res.send("Duplicate found. This task cannot be added!");
//         }else{
//             let newTask = new Task({ //new task(kasi sya magchecheck
//                 name: req.body.name //manually generated ng system kaya d na need
//             });

//             newTask.save().then((savedTask, saveErr) => {
//                 if(saveErr){
//                     res.send("There is an error saving the task.");
//                 }else{
//                     res.status(201).send({ // status, heto ung response from the server sa postman(para maknows na add agad, if no:loading loop)
//                         code: 201, //[201: successfully]
//                         message: "Task is now added!",
//                         data: savedTask
//                     });
//                 }
//             })
//         }
// //     })

    
// })