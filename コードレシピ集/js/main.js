// alert('こんにちは');

// console.log('こんにちは', '現在', new Date(), 'です。');

// let myName = '鈴木';
// myName = '高橋';
// alert(myName);

// let currentDate = new Date();

// let myFunction = () => console.log('関数です');

// let value;
// console.log(value);

// let a = 1,
// b = 2,
// c = 3;

// console.log(a + b);

// const myName = '鈴木';
// const myFunction = () => {
//   console.log('関数です。');
// }

// const number1 = 10;
// const number2 = 20;

// const sum = number1 + number2;
// console.log(sum);

// const value;
// // letは初期値を省略できる、undefinedになる constはできない。

// const myArray = ['鈴木', '田中', '高橋'];
// myArray[0] = '後藤';

// const myObject = { id: 20, name: '鈴木'};
// //配列やオブジェクトを扱う場合では中身を変更できる
// myObject.name = '後藤';

// function myFunction(a) {
//   const result = a + 2;
//   return result;
// }

// function calcSum(a, b, c) {
//   const result = a + b + c;
//   return result;
// }

// function myFunction() {
//   console.log('こんにちは');
//   return 100;
// }

// function myFunction(a, b) {
//   if (a >= 100) {
//     return a;
//   }
//   return b;
// }

// function calcFunction(price, tax) {
//   const result = price + price * tax;
//   return result;
// }

// const myResult = calcFunction(100, 0.1)
// console.log(myResult);

// function myFunction() {
//   console.log('こんにちは');
// }

// myFunction();

// /*アロー関数のメリット
// 1.関数を省略かして記述可能
// 2.thisを省略できる*/

// const calcSum = (a, b, c) => {
//   const result = a + b + c;
//   return result;
// };

// //実行は
// calcSum(1, 2, 3);

// const myFunction = (a) => {
//   return a + 2;
// };

// const myFunction2 = a => {
//   return a + 2;
// };

// const myFunction3 = (a) => a + 2;

// /*税込みの値段を返す関数
// @param price 価格
// @param tax 税率 */

// function calcFunciton(pirice, tax = 0.08) {
//   const result = price + price * tax;
//   return result;
// }

// const result1 = calcFunction(100);
// console.log(result1);

// const result2 = calcFunction(100, 0.1);
// console.log(result2);

// function calcSum(...prices) {
//   let result = 0;
//   for (const value of prices) {
//     result += value;
//   }
//   return result;
// }

// const result1 = calcSum(10, 20);
// console.log(result1);

// const result2 = calcSum(5, 10, 15);
// console.log(result2);

// const myPrice = 100;

// if (myPrice >= 50) {
//   alert('myPriceは50以上です');
// } else if (myPrice >= 10) {
//   alert('myPriceは10以上50未満です');
// } else {
//   alert('myPriceは10未満です');
// }

// if (true) {
//   alert('Hello');
// }

// const randomNum = Math.random() * 10;

// if (randomNum >= 5) {
//   alert('randomNumは5以上');
// } else {
//   alert('randomNumは5未満');
// }

// const randomNum = Math.random() * 10;

// if (randomNum >= 5) alert('randomNumは5以上');

// const myFruit = 'みかん';

// switch (myFruit) {
//   case 'りんご':
//     alert('りんごです');
//     break;
//   case 'みかん':
//     alert('みかんです');
//     break;
//   default:
//     alert('その他です')
//     break;
// }

// const myFruit = 'りんご';

// switch (myFuruit) {
//   case 'りんご':
//   case 'みかん':
//     alert('りんごかみかんです。');
//     break;
// }

// for (let index = 0; index < 10; index++) {
//   console.log('index');
// }

// let myNumber = 0;

// while (myNumber < 10) {
//   console.log(myNumber);
//   myNumber += 1;
// }

// for (let index = 0; index < 10; index++ ) {
//   if  (index % 2 === 0) {
//     continue;
//   }

//   console.log(index);
// }

// console.log('ループ終了');

// function myFunction(flgA) {
//   for ( let index = 0; index < 10; index++) {
//     if (flgA === true) {
//       if (index % 2 !== 0) {
//         console.log(index);
//       }
//     }
//   }

// }

// function myFunction(flgA) {
//   for (let index = 0; index < 10; index++) {
//     if (flgA === false) {
//       continue;
//     }
//     if (index % 2 === 0) {
//       continue;
//     }
//     console.log(index);
//   }
// }

// const isIOs = navigator.userAgent.includes('iphone');

// if (isIOs) {

// }

// const userName = '鈴木';
// if (userName) {
//   alert(`こんにちは${userName}さん`);
// }

// const address = '';
// if (address) {
//   alert(`あなたは${userName}に住んでいますね?`);
// }

// const flg = 'JavaScript'.includes('a');
// console.log(!flg);

// //！を二回付与する事で、データをBoolean型に変換させる
// console.log(!!'鈴木');

// //四捨五入する
// Math.round(数値);

// document.querySelector('.result1').innerHTML = Math.round(6.24);
// document.querySelector('.result1').innerHTML = Math.ceil(6.24);
// document.querySelector('.result1').innerHTML = Math.floor(6.24);
// document.querySelector('.result1').innerHTML = Math.trunc(6.24);
// document.querySelector('.result1').innerHTML = Math.round(6.24);

// Math.random();
// Math.floor(Math.random() * 100);

// 10 + Math.floor(Math.random() * 10)

// const rectangle = document.querySelector('.rectangle');
// document.querySelector('.button').addEventListener('click', onClickButton);

// function onClickButton() {
//   //Math.trunc 整数部分を返す
//   const randomHue = Math.trunc(Math.random() * 360);

//   const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;

//   const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

//   rectangle.style.setProperty('--start', randomColorStart);

//   rectangle.style.setProperty('--end', randomColorEnd);

// }

// const randomArray1 = crypto.getRandomValues(new Unit16Array(10));
// randomArray1.join('');
// crypto.getRandomValues(new Uint32Array(10)).join('');

// Math.abs(-10);
// Math.pow(2, 10);
// Math.sign(2);
// Math.sign(-2);
// Math.sqrt(16);
// Math.log(Math.E);

// let degree = 0;
// const rotation = (degree * Math.PI) / 180;

// const targetX  = 100 * Math.cos(rotation);
// const targetY  = 100 * Math.sin(rotation);

//Math.PI　円周率
// const character = document.querySelector('.character');

// let degree = 0;

// loop();

// function loop() {
//   const rotation = (degree * Math.PI) / 180;

//   const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
//   const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;

//   character.style.left = `${targetX}px`;
//   character.style.top = `${targetY}px`;
//   degree += 1;
//   requestAnimationFrame(loop);

// }

// let textarea = document.querySelector('.textarea');
// let string_num = document.querySelector('.string_num');

// textarea.addEventListener('keyup', onKeUp);

// function onKeyUp() {
//   const inputText = textarea.value;
//   string_num.innerText = inputText.length;

// }

// const targetString1 = 'こんにちは';
// const trimmedStirng1 = targetString1.trim();
// console.log(trimmedString1);

// const myString = 'JavaScriptを覚えよう';
// const c1 = myString.indexOf('JavaScript', 4);
// console.log(c1);

// const myString = 'JavaScriptを覚えよう';
// const s1 = myString.search(/JavaScript/);
// console.log(s1);

// const s2 = myString.search(/HTML/);
// console.log(s2);

const myString = 'JavaScriptを覚えよう';

const a1 = 'JavaScriptを覚えよう'.includes('JavaScript');
console.log(a1);

const s2 = 'JavaScriptを覚えよう'.startsWith('覚えよう');
console.log(s2);

const a3 = 'JavaScriptを覚えよう'.endWith('覚えよう');
console.log(a3);