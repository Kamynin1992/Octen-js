// //- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const calculate = (a, b) => a * b;
//
// let square = calculate(9, 6);
// console.log(square);
//
// //- створити функцію яка обчислює та повертає площу кола з радіусом r
//
// const Circle = r => Math.PI * r * r;
//
// let area = Circle(3);
// console.log(area);
//
// //- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// const calculateCylinder = (r, h) => Math.PI * r * r * h;
//
// let cylinder = calculateCylinder(6, 4);
// console.log(cylinder);
//
// //- створити функцію яка приймає масив та виводить кожен його елемент
//
//
// const ArrayElements = array => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// };
//
//
// let myArray = [1, "2", 3, 4, true];
//
//
// ArrayElements(myArray);
//
// ///- створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// const Paragraph = text => {
//     const p = document.createElement('p');
//     p.textContent = text;
//     document.body.appendChild(p);
// };
//
// const Text = "Брат репер,это приговор?";
// Paragraph(Text);
//
// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// const TextParagraph = text => {
//     let ul = document.createElement("ul")
//     for (let i = 0; i < 3; i++) {
//         let li = document.createElement("li");
//         li.textContent = text;
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
//
// }
// let content = "Спасите от брата репера";
// TextParagraph(content);
//
// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// const TextP = (text, count) => {
//     let ul = document.createElement("ul");
//     for (let i = 0; i < count; i++) {
//         let li = document.createElement("li");
//         li.textContent = text;
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
//
// }
// let TextList = "Реп кал? кал!";
// let itemCount = 7;
//
// TextP(TextList, itemCount);
//
// //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// const CreateList = text => {
//
//     let ul = document.createElement("ul");
//     for (let i = 0; i < 4; i++) {
//
//         let li = document.createElement("li");
//         li.textContent = text;
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
// }
// let listText = "Товары для дома";
// CreateList(listText);
//
// //- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// const displayObjectsInBlocks = array => {
//     for (let i = 0; i < array.length; i++) {
//         const obj = array[i];
//         const div = document.createElement('div');
//
//         const idParagraph = document.createElement('p');
//         idParagraph.textContent = `ID: ${obj.id}`;
//
//         const nameParagraph = document.createElement('p');
//         nameParagraph.textContent = `Name: ${obj.name}`;
//
//         const ageParagraph = document.createElement('p');
//         ageParagraph.textContent = `Age: ${obj.age}`;
//
//         div.appendChild(idParagraph);
//         div.appendChild(nameParagraph);
//         div.appendChild(ageParagraph);
//
//         document.body.appendChild(div);
//     }
// };
//
// const myObjects = [
//     { id: 1, name: "Maria", age: 32 },
//     { id: 2, name: "Nikolay", age: 21 },
//     { id: 3, name: "Alex", age: 40 }
// ];
// displayObjectsInBlocks(myObjects);
//
// //- створити функцію яка повертає найменьше число з масиву
//
// const Number = array => Math.min(...array);
//
// const numbers = [120, 95, 16, 30, 152];
// const minNumber = Number(numbers);
// console.log(minNumber);

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = arr => {
    let total = 0;
    for (const i of arr) {
        total += i;
    }
    return total;
};

const numbers = [1, 28, 106];
const totalSum = sum(numbers);
console.log(sum(numbers));






