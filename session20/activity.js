let friends = [];

function showfriends(){
    if(friends.length <= 0){
        console.log("You don't have any friends yet.");
    }else{
        console.log(friends);
    }
}

function addFriend(name){
    let checkFriend = friends.includes(name.toUpperCase());//boolean check

    if(checkFriend == true){
        console.log(`${name.toUpperCase()} is alaready on your friend list.`);
    }else{
        friends.push(name.toUpperCase());
        console.log(`You added ${name.toUpperCase()}.`);
    }
}

//Remove specific friends -> using their name
//remove/unfriend(funcname)
function unfriend(name){
    let friendsList = friendsList .indexOf(name.toLocaleUpperCase);
    
    if(friendsList  <= 1){
        friendsList.splice(friendsList, 1);
        console.log(`You Unfriend ${name}`);
    }else{
        console.log("You don't have any friend.");
    }
}