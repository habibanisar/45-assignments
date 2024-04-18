let guest_list :string[] = ['sadia','afshan','rabia','mehwish'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected teacher  miss ' + guest_list[i] + ',\ni would like to invite you on dinner tomorrow.\nTHANK YOU.\n')
}
let not_present : string = "rabia";
let new_guest : string = "arooba";
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected teacher  miss ' + guest_list[i] + ',\ni would like to invite you on dinner tomorrow.\nTHANK YOU.\n')
} 
console.log(`miss ${not_present} will not comming tomorrow dinner. `);
