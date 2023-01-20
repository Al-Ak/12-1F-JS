// console.log("Hello world")
// // console.log("world"); строчный коммент



// //созд перемен

// var name = 'Ak';
// var surname = 'Mutalibov';
// //camelcase
// var nameAndSurname = 'Bekova Aidana';

// //типы данных
// //1) string(str) - текстоввый тип данных
// var name2 = "Aliya";
// console.log(name2);
// var userSurname = 'Mutalibov'
// var userLastname ='Alisherovich'
// console.log(userSurname + ' ' +userLastname);
// //экранирование строк
// console.log(userSurname + '\n' + userLastname) ;
// //длина строки
// console.log(userSurname.length)
// //работа с регистрами
// console.log(userSurname.toLowerCase());

// //2) number - числовой тип данных 
// var phoneNumber = 0700111111;
// console.log(phoneNumber);
// //функция typeof
// console.log(typeof phoneNumber);
// console.log(typeof userName);
// var num = '123';
// console.log(typeof num);

// //математические действие: -, +, /,* ,** ,%


// //prompt and alert 
// var number1 = Number(prompt('Enter first number - ')); //'45'
// var number2 = Number(prompt('Enter second number - ')); //'2'
// alert(number1 + number2);
// ///
// var n = 23
// var d = n.toString()
// console.log(typeof d);


// //3) boolean(true,folse) - логич тип дпнных
// //опнраторы сравнение:<,<=,>,>=,===,==,!==,!=
// console.log('34 > 50 ->', num1 > num2);
// console.log('34 < 50 ->', num1 < num2);
// //нестрогое равенство 
// var n1 = 23
// var n2 = '23'
// console.log('23 == 23' , n1 == n2);



var name1 = prompt('Введите ваше  имя')
var surname = prompt('Введите вашу фамилию')
var age = Number(prompt('Введите ваш возраст'))
var date = Number(prompt('Введите день вашего рождения'))

//условные операторы - if, else..if, else
if(age <=18){
    console.log('Hello', name1);
}else if(age >= 19 && age <= 50) {
    console.log('Welcome!', surname + ' ' + name1);
}else if(age >= 50 && age <= 80){
    console.log('Welcome to our sayt', surname +' ' + name1);
}if( date >= 21.03 && date <= 21.04 ){
    console.log( 'Aries' );
}if( date >= 21.05 && date <= 21.06 ){
    console.log( 'Leo' );
}if( date >= 21.07 && date <= 21.08 ){
    console.log( 'Sagittarius ' );
}
if( date >= 21.09 && date <= 21.10 ){
    console.log( 'Taurus' );
}if( date >= 21.11 && date <= 21.12 ){
    console.log( 'Virgo' );
}else{
    alert('Please check your internet! ERRROR!')
}



















