let usersName:string [] = ["kulsoom","hania","sheraz","sahil","admin"]

for(let user of usersName){
    if(user === "admin"){
        console.log("Hello Admin, would you like to see a status report?");
    }
    else{
        console.log(`Hello ${user}, Thank you for logging in again.`);
    }
}