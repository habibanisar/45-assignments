"use strict";
let position = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; position.length; i++) {
    if (position[i] == 1) {
        console.log(`${position[i]}st`);
    }
    else if (position[i] == 2) {
        console.log(`${position[i]}nd`);
    }
    else if (position[i] == 3) {
        console.log(`${position[i]}rd`);
    }
    else if (position[i] >= 4 && position[i] <= 9) {
        console.log(`${position[i]}th`);
    }
}
