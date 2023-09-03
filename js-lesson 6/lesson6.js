//Знайти та вивести довжину наступних стрінгових значень:

// const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
// strings.forEach(str => {
//     console.log(`Довжина стрінга "${str}": ${str.length}`);
// });

//Перевести до великого регістру наступні стрінгові значення

// const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
// const uppercaseStrings = strings.map(str => str.toUpperCase());
//
// console.log(uppercaseStrings);

//Перевести до нижнього регістру наступні стрінгові значення

// const strings = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
//
// const lowercaseStrings = strings.map(str => str.toLowerCase());
//
// console.log(lowercaseStrings);

//Почистити "брудну" стрінгу від зайвих пробілів

// let str = ' dirty string   ';
// str = str.trim();
//
// console.log(str);


//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів

// function StringToarray(str) {
//     let words = str.split(' ');
//     return words;
// }
//
// let str = 'Ревуть воли як ясла повні';
// let arr = StringToarray(str);
//
// console.log(arr);

//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові

// let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let strings = numbers.map(number => number.toString());
//
// console.log(strings);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// function sortNums(nums, direction) {
//     if (direction === 'ascending') {
//         return nums.slice().sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         return nums.slice().sort((a, b) => b - a);
//     } else {
//         return nums;
//     }
// }
//
// let nums = [11, 21, 3];
// const ascendingSorted = sortNums(nums, 'ascending');
// const descendingSorted = sortNums(nums, 'descending');
//
// console.log('За зростанням:', ascendingSorted);
// console.log('За спаданням:', descendingSorted);

//

// let DurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// DurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
//
// console.log(DurationArray);

//

// let DurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let filtered = DurationArray.filter(size => size.monthDuration > 5);
//
// console.log(filtered);

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let transformed = coursesAndDurationArray.map(course => {
//     return {
//         id: coursesAndDurationArray.indexOf(course) + 1,
//         title: course.title,
//         monthDuration: course.monthDuration
//     };
// });
//
// console.log(transformed);


/////описати колоду карт (від 6 до туза без джокерів)

// const deckOfCards = [
//     { cardSuit: 'spade', value: '6', color: 'black' },
//     { cardSuit: 'spade', value: '7', color: 'black' },
//     { cardSuit: 'spade', value: '8', color: 'black' },
//     { cardSuit: 'spade', value: '9', color: 'black' },
//     { cardSuit: 'spade', value: '10', color: 'black' },
//     { cardSuit: 'spade', value: 'jack', color: 'black' },
//     { cardSuit: 'spade', value: 'queen', color: 'black' },
//     { cardSuit: 'spade', value: 'king', color: 'black' },
//     { cardSuit: 'spade', value: 'ace', color: 'black' },
//     { cardSuit: 'diamond', value: '6', color: 'red' },
//     { cardSuit: 'diamond', value: '7', color: 'red' },
//     { cardSuit: 'diamond', value: '8', color: 'red' },
//     { cardSuit: 'diamond', value: '9', color: 'red' },
//     { cardSuit: 'diamond', value: '10', color: 'red' },
//     { cardSuit: 'diamond', value: 'jack', color: 'red' },
//     { cardSuit: 'diamond', value: 'queen', color: 'red' },
//     { cardSuit: 'diamond', value: 'king', color: 'red' },
//     { cardSuit: 'diamond', value: 'ace', color: 'red' },
//     { cardSuit: 'heart', value: '6', color: 'red' },
//     { cardSuit: 'heart', value: '7', color: 'red' },
//     { cardSuit: 'heart', value: '8', color: 'red' },
//     { cardSuit: 'heart', value: '9', color: 'red' },
//     { cardSuit: 'heart', value: '10', color: 'red' },
//     { cardSuit: 'heart', value: 'jack', color: 'red' },
//     { cardSuit: 'heart', value: 'queen', color: 'red' },
//     { cardSuit: 'heart', value: 'king', color: 'red' },
//     { cardSuit: 'heart', value: 'ace', color: 'red' },
//     { cardSuit: 'clubs', value: '6', color: 'black' },
//     { cardSuit: 'clubs', value: '7', color: 'black' },
//     { cardSuit: 'clubs', value: '8', color: 'black' },
//     { cardSuit: 'clubs', value: '9', color: 'black' },
//     { cardSuit: 'clubs', value: '10', color: 'black' },
//     { cardSuit: 'clubs', value: 'jack', color: 'black' },
//     { cardSuit: 'clubs', value: 'queen', color: 'black' },
//     { cardSuit: 'clubs', value: 'king', color: 'black' },
//     { cardSuit: 'clubs', value: 'ace', color: 'black' }
// ];
//
// const aceOfSpades = deckOfCards.filter(card => card.cardSuit === 'spade' && card.value === 'ace');
// console.log(aceOfSpades);
//
//
// const sixes = deckOfCards.filter(card => card.value === '6');
// console.log(sixes);
//
// const redCards = deckOfCards.filter(card => card.color === 'red');
// console.log(redCards);
//
// const clubs = deckOfCards.filter(card => card.cardSuit === 'clubs');
// console.log(clubs);
//
// const highValueTrefoils = deckOfCards.filter(card => card.cardSuit === 'clubs' && (card.value === '9' || card.value === '10' || card.value === 'jack' || card.value === 'queen' || card.value === 'king' || card.value === 'ace'));
// console.log(highValueTrefoils);


///

// const deckOfCards = [
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'}
// ];
//
// let cardsBySuits = deckOfCards.reduce((accumulator, card) => {
//     const suit = card.cardSuit;
//
//     if (suit === 'spade') {
//         accumulator.spades.push(card);
//     } else if (suit === 'diamond') {
//         accumulator.diamonds.push(card);
//     } else if (suit === 'heart') {
//         accumulator.hearts.push(card);
//     } else if (suit === 'clubs') {
//         accumulator.clubs.push(card);
//     }
//
//     return accumulator;
// }, {spades: [], diamonds: [], hearts: [], clubs: []});
//
// console.log(cardsBySuits);

//написати пошук всіх об'єктів, в який в modules є sass

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
];

const coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
const coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));

console.log(coursesWithSass);
console.log(coursesWithDocker);










