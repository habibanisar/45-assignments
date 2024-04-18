function show_magicians(magicians: string[]): void {
    for(const magician of magicians){
        console.log(magician.charAt(0). toUpperCase() + magician.slice(1));
    }
}
// const magician: string[] = ["david blaine", "dynamo", "penn and teller"];
// show_magicians(magician);

function make_great(magicians: string[]): void {
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + ' the great'
    }
}
const magicians2: string[] = ["david blaine", "dynamo", "penn and teller"];
make_great(magicians2);
show_magicians(magicians2);