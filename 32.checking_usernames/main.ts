let current_user: string [] = ["kulsoom","hania","sheraz","sahil","admin"];
let new_user: string [] = ["laiba","maryam","atiq","kulsoom","admin"];

new_user.forEach((newUser) => {
    if (
        current_user.some (
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )

    ){
        console.log(`${newUser} will need to enter a new userName.`);
    }else{
        console.log(`${newUser} is awailable.`);
    }
});