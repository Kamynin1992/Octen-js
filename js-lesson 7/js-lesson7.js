// // Создаем функцию-конструктор User
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [];
// for (let i = 1; i <= 10; i++) {
//     let newUser = new User(i,
//         `Имя${i}`, // name
//         `Фамилия${i}`, // surname
//         `email${i}@google.com`, // email
//         `+380664042128${i}` // phone
//     );
//     users.push(newUser);
// }
// console.log(users);
//
// let filtered = users.filter(user => user.id % 2 === 0);
// console.log(filtered)
//
// users.sort((a, b) => a.id - b.id);
// console.log(users)

//////////////////////////////////////////////////////////////////////////////////////

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// const clients = [];
// for (let i = 1; i <= 10; i++) {
//     const client = new Client(
//         i, // id
//         `Имя${i}`,
//         `Фамилия${i}`,
//         `email${i}@gmail.com`,
//         `+3806756789${i}`,
//         [`Товар${i}_1`, `Товар${i}_2`]
//     );
//     clients.push(client);
// }
// clients.sort((a, b) => a.order.length - b.order.length);
// console.log(clients);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function Car(model, manufacturer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.driver = undefined;
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     this.info = function () {
//         console.log("Інформація про автомобіль:");
//         console.log(`Модель: ${this.model}`);
//         console.log(`Виробник: ${this.manufacturer}`);
//         console.log(`Рік випуску: ${this.year}`);
//         console.log(`Максимальна швидкість: ${this.maxSpeed}`);
//         console.log(`Об'єм двигуна: ${this.engineVolume}`);
//         if (this.driver) {
//             console.log("Водій:");
//             for (let key in this.driver) {
//                 console.log(`${key}: ${this.driver[key]}`);
//             }
//         }
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`Максимальна швидкість підвищена до ${this.maxSpeed}`);
//     };
//
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(`Рік випуску змінено на ${this.year}`);
//     };
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log("Водій доданий до автомобіля.");
//     };
// }
//
// let myCar = new Car("Civic", "Honda", 2022, 180, 1.8);
//
// myCar.info();
// myCar.drive();
// myCar.increaseMaxSpeed(20);
// myCar.changeYear(2023);
// myCar.addDriver({ name: "Іван", age: 30, experience: 5 });
// myCar.info();

///////////////////////////////////////////////////////////////////////////////

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella("Варвара", 20, 35),
    new Cinderella("Марія", 22, 36),
    new Cinderella("Карина", 25, 37),
    new Cinderella("Ірина", 18, 35),
    new Cinderella("Ира", 23, 36),
    new Cinderella("Катерина", 21, 40),
    new Cinderella("Джулия", 24, 37),
    new Cinderella("Анастасія", 21, 38),
    new Cinderella("Юлія", 26, 36),
    new Cinderella("Вікторія", 22, 35)
];

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince("Микола", 31, 38);
let chosenCinderella = undefined;
for (let cinderella of cinderellas) {
    if (cinderella.footSize === prince.foundShoe) {
        chosenCinderella = cinderella;
        break;
    }
}

if (chosenCinderella) {
    console.log(`Принц ${prince.name} знайшов свою Попелюшку ${chosenCinderella.name}`);
} else {
    console.log(`Принц ${prince.name} не знайшов свою Попелюшку`);
}
