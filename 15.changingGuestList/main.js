var guest_list = ['sadia', 'afshan', 'rabia', 'mehwish'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected teacher  miss ' + guest_list[i] + ',\ni would like to invite you on dinner tomorrow.\nTHANK YOU.\n');
}
var not_present = "rabia";
var new_guest = "arooba";
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected teacher  miss ' + guest_list[i] + ',\ni would like to invite you on dinner tomorrow.\nTHANK YOU.\n');
}
console.log("miss ".concat(not_present, " will not comming tomorrow dinner. "));
