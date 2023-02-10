// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// Условный (тернарный) оператор - единственный оператор в JavaScript,
// принимающий три операнда: условие, за которым следует знак вопроса (?),
// затем выражение, которое выполняется, если условие истинно,
// сопровождается двоеточием (:), и, наконец, выражение, которое
// выполняется, если условие ложно.

// (num === 50) ? console.log('Ok!') : console.log('Error'); 
// условие => выполняется действие => если нет, то другое действие

// 4 + 4 бинарный опертор

// +'4' унарный аргумент

const num = '50';

switch (num) {
    case '49':
        console.log('Наверное');
        break;
    case '100':
        console.log('Много');
        break;
    case '50':
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}


// логические операторы: и, или, не (&&, ||, (!1))

// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// console.log((hamburger && fries)); // false

//0, ''(пустая строка), null, undefind(не определено), Nan - всегда false

//приоритетность от самого высокого ===, &&, ||

const hamburger = 3,
    fries = 1,
    cola = 0;

console.log(hamburger === 3 && cola && fries); // 0, когда логические операторы работают с данными
// не с true/false

console.log(1 && 0); // 0
console.log(1 && 5); // 5
console.log(null && 5); // null
console.log(0 && 'trgrtgtgtrgrtgtrbb'); // 0

//И запинается на лжи
//Или запинается на правде

// оператор Не ! превращает неправду в правду и правду в неправду
