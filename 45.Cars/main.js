"use strict";
function createcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createcar("Honda", "Civic", { color: 'silver', year: 2016 });
console.log(myCar);
