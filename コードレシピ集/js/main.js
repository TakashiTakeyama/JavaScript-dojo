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

const myFruit = 'みかん';

switch (myFruit) {
  case 'りんご':
    alert('りんごです');
    break;
  case 'みかん':
    alert('みかんです');
    break;
  default:
    alert('その他です')
    break;
}










