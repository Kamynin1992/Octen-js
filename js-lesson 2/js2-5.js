//let dayNumber = parseInt(prompt("Введіть порядковий номер дня тижня (1-7):"));
//
//switch (dayNumber) {
//    case 1:
//        console.log("Понеділок: Зустріч");
//        break;
//    case 2:
//        console.log("Вівторок: Підготовка до уроку");
//        break;
//    case 3:
//        console.log("Середа: гра у Dota2");
//        break;
//    case 4:
//        console.log("Четвер: Робочий візит");
//        break;
//    case 5:
//        console.log("П'ятниця: Внутрішні навчання");
//        break;
//    case 6:
//        console.log("Субота: Вільний день");
//        break;
//    case 7:
//        console.log("Неділя: Вільний день");
//        break;
//    default:
//        console.log("Неправильний порядковий номер дня");
//        break;
//}
//


//let number1 = parseFloat(prompt("Введіть перше число:"));
//let number2 = parseFloat(prompt("Введіть друге число:"));
//
//if (isNaN(number1) || isNaN(number2)) {
//    console.log("Будь ласка, введіть числа");
//} else if (number1 > number2) {
//    console.log( number1);
//} else if (number2 > number1) {
//    console.log(+ number2);
//} else {
//    console.log(number1 = number2);
//}

//let x = undefined;
//x = x || "default"
//console.log(x);


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log(coursesAndDurationArray[i].title + ": Супер");
    }
}




