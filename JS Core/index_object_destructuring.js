//object destructuring

/* function printEmployee({id,name}) {
    //es 5 solution
   /*  const id = employee.id;
    const name = employee.name; */
// const {id,name} = employee;
// console.log(`Id ${id}`);
// console.log(`Name ${name}`);
//}
const printEmployee = ({
    id,
    name
}) => {
    console.log(`Id ${id}`);
    console.log(`Name ${name}`);
}
printEmployee({
    id: 1,
    name: 'subramanian'
});

//How to return literal object from arrow
/* const getProducts = () => {
    return {
        id: 1,
        name: 'phone'
    }
} */
const getProducts = () => ({
    id: 1,
    name: 'phone'
})
console.log(getProducts())

//how to return object based on parameters

/* const getInvoice = (id, value) => {
    return {
        id: id,
        value: value
    }
} */
//left and right keys are same,make it one
/* const getInvoice = (id, value) => {
    return {
        id,
        value
    }
} */
const getInvoice = (id, value) => ({
    id,
    value
});
console.log(getInvoice(3, 89000));