//for (let i = 1; i <= 10; i++) {
//    document.write(`<div>Блок номер ${i}</div>`);
//}
////////////////////////////////////////////////////////////////////////
//for (let i = 1; i <= 10; i++) {
//    document.write(`<div>Блок номер ${i}: lorem ipsum</div>`);
//}

//////////////////////////////////////////////////////
//let i = 1;
//while (i <= 20) {
//    document.write(`<h1>lorem ${i}: lorem ipsum</h1>`);
//    i++;
//}
///////////////////////////////////

//let i = 1;
//while (i <= 20) {
//    document.write(`<h1>lorem ${i}</h1>`);
//    i++;
//}
///////////////////////////////////

//let mainskills = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//    document.write("<ul>");
//for (let i = 0; i < mainskills.length; i++) {
//    document.write(`<li>${mainskills[i]}</li>`);
//}
//    document.write("</ul>");
////////////////////////////////////


//let products = [
//    {
//        title: 'milk',
//        price: 22,
//        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//    },
//    {
//        title: 'juice',
//        price: 27,
//        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//    },
//    {
//        title: 'tomato',
//        price: 47,
//        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//    },
//    {
//        title: 'tea',
//        price: 15,
//        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//    },
//];
//
//for (let i = 0; i < products.length; i++) {
//    document.write(`
//        <div class="product-card">
//            <h3 class="product-title">${products[i].title}. Price - ${products[i].price} UAH</h3>
//            <img src="${products[i].image}"  class="product-image" style="width: 200px;">
//        </div>
//    `);
//}
///////////////////////////////////////////////


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


document.write("<h2>Користувачі зі статусом true:</h2>");
for (let user of users) {
    if (user.status) {
        document.write(`<p>${user.name}, ${user.age} років</p>`);
    }
}

document.write("<h2>Користувачі зі статусом false:</h2>");
for (let user of users) {
    if (!user.status) {
        document.write(`<p>${user.name}, ${user.age} років</p>`);
    }
}

document.write("<h2>Користувачі, які старші за 30 років:</h2>");
for (let user of users) {
    if (user.age > 30) {
        document.write(`<p>${user.name}, ${user.age} років</p>`);
    }
}






