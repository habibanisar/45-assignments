function make_album(artistName: string, albumTitle: string){
    return{artistName, albumTitle}
}
let album1 = make_album("Kaifi khalil","kana yari");
let album2 = make_album("Azan sami khan","Ik lamha");
let album3 = make_album("Gul panra","Man aamadeh am");

console.log(album1);
console.log(album2);
console.log(album3);

function make_album2(artistName: string, albumTitle:string, numberOfTracks: number){
    return{artistName,albumTitle,numberOfTracks}
}
let album4 = make_album2("Abida perveen","Pardadari",2);
let album5 = make_album2("Sahir ali bhagga","Parcham pakistan ka",5);
let album6 = make_album2("Amjad sabri","Rang",9);

console.log(album4);
console.log(album5);
console.log(album6);
