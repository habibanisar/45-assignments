"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
const magicians2 = ["david blaine", "dynamo", "penn and teller"];
// make_great(magicians2);
// show_magicians(magicians2);
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the great");
    }
    return greatMagicians;
}
const magicians3 = ["david blaine", "dynamo", "penn and teller"];
const greatMagician2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagician2);
