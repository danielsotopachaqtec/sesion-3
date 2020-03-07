
// colors.splice(0,3);

// console.log('splice', colors);

let bagpack = ['pencil', 'cup', 'coke', 'cellphone'];

// bagpack.splice(3);

// console.log('bagpack', bagpack);

let schedule = ['I', 'have', 'a', 'meetting', 'with'];
// schedule.splice(0,4, 'we', 'are', 'going', 'to', 'class');
// schedule.splice(5,0, 'some','clients', 'today');
// console.log('schedule', schedule);

// let numbers = [1,2,3,4];
// numbers.slice(0,1);
// console.log('numbers', numbers);

let message = 'congratulations';
const abbrv = `${message.slice(0,7)}s!`;
// console.log('abbrv', abbrv);

let name = 'Daniel';

// name.split();

// console.log('name', name);

let saludo = 'Hola, buenos dias mi nombre es daniel, soy desarrollador de aplicaciones moviles';

// let destinationDocument = '81238123|1|7'

// console.log('saludo', destinationDocument.split('|', 1));

let firstname = 'Daniel';
// console.log('firstname',firstname.split(''));

let fruits = ['orange', 'banana', false, 3, 'apple']

// console.log('fruits index banana',fruit.indexOf(null));

// console.log(fruits.lastIndexOf('apple'));

const countryCode = ['+51', '+57', '+1', '+58', '+47'];

// const peru = countryCode.filter((code) => code === '+51');

// console.log('peru', peru);

const userNames = ['daniel', 'pedro', 'jose', 'david'];

console.log(userNames.includes('daniel'));


const display = userNames.map((item, index) => {
    // console.log(index, item);
    return (item);
});

// console.log('item', display);

// const dollars = numbers.map((number) => {
//     // console.log(`$${number}`);
//     `$${number}`
// });



// let sum = 0;
// const sum = numbers.reduce((accummulator, currentValue, currentIndex) =>
//     accummulator + currentValue, 0);
// console.log('sum', sum);

// for(let n of numbers){
//     sum += n;
// }

// console.log('sum',sum);

const colors = ['blue', 'red', 'white', 'black'];

// colors.forEach((item, index) => {
//     console.log(index, item)
// })

const numbers = [-10,-25,-55,-110, -1, -5];

// let allPositive = numbers.every((value) => {
//     return value > 0;
// })
// let atLeastOnePositive = numbers.some((value) => {
//     return value >= 0;
// })


// console.log('atLeastOnePositive', atLeastOnePositive);