"use strict";
function sandwich(...items) {
    console.log("Sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
sandwich("Grilled cheese sandwich");
sandwich("Egg sandwich");
sandwich("Chicken sandwich");
console.log("\n enjoy your meal!\n");
