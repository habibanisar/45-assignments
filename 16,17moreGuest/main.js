var guest_list = ['sadia', 'afshan', 'rabia', 'mehwish'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected teacher  miss ' + guest_list[i] + ',\ni would like to invite you on dinner tomorrow.\nTHANK YOU.\n')
// }
var not_present = "rabia";
var new_guest = "arooba";
guest_list[3] = new_guest;
//for(let i=0; i>guest_list.length; i++){
//   console.log("Respected teacher miss" + guest_list[i] +',\ni would like to invite you on dinner tomorrow.\n')
//}
guest_list.unshift('laiba', 'maryam', 'muneeba');
//for (let i=0; i<guest_list.length; i++){
//  console.log('dear friend ' + guest_list[i] + ',\ni would like to invite you on dinner tomorrow.\nTHANK YOU. i found a bigger table so i deside to invite 3 more guest.\n')
//} 
console.log("\nunfortunately i can not arrange a big table , only two people are allowed.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry miss.".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("respected friend " + guest_list[i] + ',\nyes you are still invited on tomorrow dinner\nTHANK YOU\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
