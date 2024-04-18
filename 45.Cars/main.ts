type car = {
    manufacture: string
    model:string
    [key: string]: any;
}
function createcar(manufacture: string, model: string, optional:Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}
const myCar: car = createcar("Honda", "Civic", { color: 'silver', year: 2016})
console.log(myCar);