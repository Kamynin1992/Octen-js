// function calculate(a, b) {
//     if (a <= 0 || b <= 0) {
//         return;
//     }
//
//     const area = a * b;
//     return area;
// }
//
// const a = 11;
// const b = 5;
//
// const rectangleArea = calculate(a, b);
// console.log(rectangleArea);

///*************

// function calculateCircleArea(r) {
//     if (r <= 0) {
//         return;
//     }
//
//     const area = Math.PI * r * r;
//     return area;
// }
//
// const radius = 38;
//
// const circleArea = calculateCircleArea(radius);
// console.log("Площа",circleArea)
// ;

///*************

// function calculateCylinderSurfaceArea(r, h) {
//     if (r <= 0 || h <= 0) {
//         return;
//     }
//
//     const baseArea = Math.PI * r * r;
//     const lateralArea = 2 * Math.PI * r * h;
//     const surfaceArea = 2 * baseArea + lateralArea;
//
//     return surfaceArea;
// }
//
// const r = 7;
// const h = 13;
//
// const cylinderSurfaceArea = calculateCylinderSurfaceArea(r, h);
// console.log("Площа", cylinderSurfaceArea);

///***************

//створити функцію яка приймає масив та виводить кожен його елемент//

// function ArrayElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
//
// const myArray = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}];
//
// ArrayElements(myArray);

///створити функцію яка створює параграф з текстом. Текст задати через аргумент///

// function createParagraph(text) {
//     let p = document.createElement("p");
//     p.textContent = text;
//     document.body.appendChild(p);
// }
//
// let myText = "Привет, я люблю рок!!!";
// createParagraph(myText);

////створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий///

// function createList(text) {
//     let ul = document.createElement("ul");
//
//     for (let i = 0; i < 3; i++) {
//         let li = document.createElement("li");
//         li.textContent = text;
//         ul.appendChild(li);
//     }
//
//     document.body.appendChild(ul);
// }
//
// let listItemText = "Мой брат репер";
// createList(listItemText);


///////- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createList(text, item) {
//    let ul = document.createElement("ul");
//
//     for (let i = 0; i < item; i++) {
//         let li = document.createElement("li");
//         li.textContent = text;
//         ul.appendChild(li);
//     }
//
//     document.body.appendChild(ul);
// }
//
// let listItemText = "Брат репер.Что делать?";
// let numberOfItems = 6;
// createList(listItemText, numberOfItems);

///// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function createList(array) {
//     let ul = document.createElement("ul");
//
//     for (let i = 0; i < array.length; i++) {
//         let li = document.createElement("li");
//         li.textContent = array[i];
//         ul.appendChild(li);
//     }
//
//     document.body.appendChild(ul);
// }
//
// let myArray = [1, "hello", true, 15, false];
// createList(myArray);

///- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function displayObjects(objectsArray) {
//     let div = document.createElement("div");
//
//     for (let i = 0; i < objectsArray.length; i++) {
//         let objectBlock = document.createElement("div");
//         let object = objectsArray[i];
//
//
//         objectBlock.innerHTML = `
//       <p>ID: ${object.id}</p>
//       <p>Name: ${object.name}</p>
//       <p>Age: ${object.age}</p>
//     `;
//
//         div.appendChild(objectBlock);
//     }
//
//     document.body.appendChild(div);
// }
//
// let myObjects = [
//     { id: 1, name: "Nikolay", age: 31 },
//     { id: 2, name: "Maria", age: 52 },
//     { id: 3, name: "Roman", age: 22 }
// ];
//
// displayObjects(myObjects);

/////////////- створити функцію яка повертає найменьше число з масиву

function Number(array) {
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

let numbers = [5, 2, 8, 1, -100, -3, 0, -8, 48, -33, 10];
let minNumber = Number(numbers);
console.log("Найменше число", minNumber);





