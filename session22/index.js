/* 
1. Create an index.js file and copy the contents from template.js. Read and understand the additional instructions from the template.
2. Create a new database called hotel (MongoDB Compass)
*/

/* 
3. In the addOneFunc(), copy and paste your query to insert a single room (insertOne method) in the rooms collection with the following details:
    - name - single
    - accommodates - 2
    - price - 1000
    - description - A simple room with all the basic necessities
    - rooms_available - 10
    - isAvailable - true
*/
async function addOneFunc(db) {
   await (db.rooms.insertOne({
       name: "single",
       accommodates: 2,
       price: 1000,
       description: "A simple room with all the basic necessities",
       rooms_available: 10,
       isAvailable: false
   }));

   return(db);

};

/* 
In the addManyFunc(), copy and paste your query to insert multiple rooms (insertMany method)  in the rooms collection with the following details:
	i.
    - name - double
    - accommodates - 3
    - price - 2000
    - description - A room fit for a small family going on a vacation
    - rooms_available - 5
    - isAvailable - true
	ii.
    -  name - queen
    -  accommodates - 4
    -  price - 4000
    -  description - A room with a queen sized bed perfect for a simple getaway
    -  rooms_available - 15
    -  isAvailable - true
	iii.
    -  name - executive suites
    -  accommodates - 4
    -  price - 9000
    -  description - A room designed with more space for work and relaxation
    -  rooms_available - 2
    -  isAvailable - true
	iv.
    -  name - deluxe King
    -  accommodates - 4
    -  price - 7000
    -  description - A room with a king-sized bed and a comfortable couch for the modern traveler.
    -  rooms_available - 4
    -  isAvailable - true
*/
async function addManyFunc(db) {
   await (db.rooms.insertMany([
       {
           name: "double",
           accommodates: 3,
           price: 2000,
           description: "A room fit for a small family going on a vacation",
           rooms_available: 5,
           isAvailable: false
       },
       {
           name: "queen",
           accommodates: 4,
           price: 4000,
           description: "A room with a queen sized bed perfect for a simple getaway",
           rooms_available: 15,
           isAvailable: false
       }
   ]));

   return(db);

};

/* 
5. In the findRoom(), copy and paste your query to use the findOne method to search for a room with the name double.
*/
async function findRoom(db) {
    return await (
        db.rooms.findOne({ name: "double" })
    );
};

/* 
6. In the updateOneFunc(), copy and paste your query to use the updateOne method to update the queen room and set the available rooms to 0.
    - Look up the use and syntax of updateOne method
    - Look up the use and syntax of $set operator
*/
function updateOneFunc(db) {
    db.rooms.updateOne(
        { name: "queen" },
        {
            $set : {
                rooms_available: 0
            }
        }
    )
};

/* 
7. In the replaceOneFunc(), copy and paste your robo3T query to use the replaceOne method to update the availability of the queen room.
    - Look up the use and syntax of replaceOne method
    - Look up the use and syntax of $set operator
*/
async function replaceOneFunc(db) {
    await db.rooms.replaceOne(
        { name: "queen"  },
        { 
            $set: 
            { 
                availability: false
            }
        }
    );
}
 
/* 
8. In the findOneAndUpdateFunc(), copy and paste your robo3T query to use the findOneAndUpdate method to delete the queen room's availability property to false.
    - Look up the use and syntax of findOneAndUpdate method
    - Look up the use and syntax of $set operator
*/
async function findOneAndUpdateFunc(db) {
    await db.rooms.findOneAndUpdate(
        { name: "queen",
          isAvailable: true
        },
        { $set: { isAvailable: false } }
    );
    return (db)
}

/* 
9. In the deleteOneFunc(), copy and paste your robo3T query to use the deleteOne method to delete the executive suites room.
    - Look up the use and syntax of deleteOne method
*/
async function deleteOneFunc(db) {
    await db.rooms.deleteOne(
        { name: "executive" }
    );
}

/* 
10. In the deleteManyFunc(), copy and paste your robo3T query to use the deleteMany method to delete all rooms that have 0 rooms available.
    - Look up the use and syntax of deleteMany method
*/
function deleteManyFunc(db) {
    db.rooms.deleteMany({
        rooms_available: 0
    })
};

/* 
11. In the findOneAndDeleteFunc(), copy and paste your robo3T query to use the findOneAndDelete method to delete a room with the name single.
    - Look up the use and syntax of findOneAndDelete method
*/
async function findOneAndDeleteFunc(db) {
    return await db.rooms.findOneAndDelete(
        { name: "single" }
    );
}

/* 
12. In the findName(), copy and paste your query  to find rooms with letter s in their name or t.
	- Use the $or operator.
	- Show only the name, and description fields and hide the _id field.
*/
async function findName(db) {
    return await(db.rooms.find({ 
        $or: [
            { name: { $regex: 's', $options: 'i' } },
            { name: { $regex: 't', $options: 'i' } }
        ]
    }, { name: 1, name: 1, _id: 0 }));

};

/* 
13. In the findAccom(), copy and paste your query to find rooms who accommodates more than 2, with price of less than or equal to 7000.
	- Use the $and operator
*/
async function findAccom(db) {
    return await (db.rooms.find({ 
            $and: [
                { accommodates: { $gt: 2 } },
                { price: { $lte: 7000 } }
            ]
        }));

};


/* 
14. In the findNamePrice(), copy and paste your query to find rooms with the letter d in their name and has price of greater than or equal to 2000.
	- Use the $and, $regex and $gte operators.
	- Show only the name, and price fields and hide the _id field.

*/
async function findNamePrice(db) {
    return await (db.rooms.find({ 
            $and: [
                { name: { $regex: 'd', $options: 'i' } },
                { price: { $gte: 2000 } }
            ]
        }, { name: 1, price: 1, _id: 0 }));
};


try{
    module.exports = {
        addOneFunc,
        addManyFunc,
        updateOneFunc,
        findRoom,
        deleteManyFunc,
        findName,
        findAccom,
        findNamePrice,
        replaceOneFunc,
        findOneAndUpdateFunc,
        deleteOneFunc,
        findOneAndDeleteFunc
    };
} catch(err){

};
























// firebase-own by google
// SQl-pinaksecured, pinaka unang databases cause many updates to improve security
// MONGODB
// noSQL: non-relational. 12 cdifferent5 characters. JSON FORMAT
// SQL: foreign Key.ex:  student:0001_.reflect iunfo when put idf number. diffrent tables connectyd sa isa't isa thru foreign key
//array:same data types. use inbdex numvber to access rthe storage
//objecty: may properties and values
//JSON: java script notation.Properties has double qoute
// { //docmunt ung buo{}
//     "firstName":"Norman"
//     "lastname": "Pineda"
// }
//SQL: left to right. need another system integrate:Websocket for real time update
//SQL: bawal skip info sa table. CONSISTENT DATA; mongdb:pwede update or skip. no joins data from other, it has own from othe rdocuments/data. 
// firebase is document-base
// mongdobd: flexible table if add ons infor. capable store million of data. firebaSE: COC
// TIMESTAMP: MAY TIME(even secs) AND DAY, COMPLETE; DATE: DATE LANG
// collections= table(sql)
//fields=values ng mongodb
//cant do multi in sql["item1", "item2"]



// findMany -> find()
// remove pretty()
// // remove $ sign besides i:// Case sensitive query
// db.users.find({ firstName: { $regex: 'N' } }).pretty();

// // Case insensitive query
// db.users.find({ firstName: { $regex: 'j', $options: '$i' } }).pretty(); 