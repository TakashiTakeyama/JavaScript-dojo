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

// const myString = 'JavaScriptを覚えよう';

// const a1 = 'JavaScriptを覚えよう'.includes('JavaScript');
// console.log(a1);

// const s2 = 'JavaScriptを覚えよう'.startsWith('覚えよう');
// console.log(s2);

// const a3 = 'JavaScriptを覚えよう'.endWith('覚えよう');
// console.log(a3);

// const searchWordText = document.querySelectorAll('#prefecture-list button');

// searchWordText.addEventListener('keup', () => {
//   const serchWord = searchWordText.values;

//   prefectureList.forEach((element) => {
//     if (searchWord || searchWord === '') {
//       element.classList.remove('hide');
//       return;
//     }

//     const prefectureName = element.dataset.name;

//     const phonetic = element.dataset.phonetic;

//     if (
//       searchWord.charAt(0) === 
//       prefectureName.charAt(0) ||
//       searchWord.charAt(0) === phonetic.charAt(0)
//     ) {
//       element.classList.remove('hide');
//     } else {
//       element.classList.add('hide');
//     }
//   })
// })

// const imageName = 'image1,png';
// imageName.replace('1.png', '2.png');

// const inputText = '鈴木\n一郎';
// inputText.replace('\n', '');

// let phoneNumber = '090-1234-5678';
// let num = phoneNumber.replace(/-/g, '');
// console.log(num);

// document.querySelector('#submitButton').addEventListener('click', (event) => {
//   const phoneNumber = document.querySelector('#phoneNumberText').value;

//   const trimmedPhoneNumber = phoneNumber.replace(/-/g,'');
//   alert(`電話番号は${trimmedPhoneNumber}です。`)
//   event.preventDefault();
// })

// const myUrl = 'http://example.com/?id=123456&name=Suzuki&age=28';
// // myUrl.split('&');


// myUrl.split(/&|\?/);
// console.log(myUrl);

// const hashes = {};

// const parameters = location.search.split(/&|\?/).filter((value) => {
//   return value.includes('=');
// });

// parameters.forEach((parameter) => {
//   const parmeterList = parameter.split('=');
//   const key = parameterList[0];
//   const value = decodeURIComponent(parameterList[1]);

//   hashes[key] = value;
// });

// if (hashes['id'] != null) {
//   document.querySelector('.id').innerHTML = hashes['id'];
// }

// const country = 'アメリカ';
// const status = '合衆国';
// console.log(country + status);
// console.log(`${country}${status}`);

// const familyNameText = document.querySelector('#familyNameText');
// const firstNameText = document.querySelector('#firstNameText');
// const fullname = document.querySelector('#fullName');

// firstNameText.addEventListener('keyup', onKeyUp);
// familyNameText.addEventListener('keyup', onKeyUp);

// function onKeyUp () {
//   const familyName = familyNameText.value;
//   const firstName = firstNameText.value;
//   fullname.innerHTML = `${familyName}${firstName}`;
// }

// const nameInput = document.querySelector('.name-input');
// const warningMessage = document.querySelector('.warning-message');

// nameInput.addEventListener('input', () => {
// const inputStr = nameInput.value;
// const normalStr = inputStr.toLowerCase();

// if (normalStr.includes('test') === true) {
//   warningMessage.textContent = '「test」が含まれてます'
// } else {
//   warningMessage.textContent = '';
// }
// });

// const userName = '鈴木';
// const tag = `<div class="container">こんにちは${userName}さん</div>`;
// console.log(tag);

// const str2 = `123 * 123は${123 * 123}です。`;
// console.log(str2);

// const today = new Date();
// document.querySelector('#main').innerHTML = `
// <h1>今日${today.getMonth() + 1}/${today.getDate()}の天気</h1>
// <p>東京は、晴れでしょう</p>
// `;

// if (/iPhone | iPod | iPad/.test(navigator.userAgent)) {
//   alert('アクセスしているブラウザーはios端末です');
// }

// // JがJavaScriptに含まれているかどうか
// /J/.test('JavaScript');

// const phoneNumberText = document.querySelector('#phoneNumberText');
// const warningMessage = document.querySelector('#warningMessage');

// phoneNumberText.addEventListener('keyup', () => {
//   const phoneNumber = phoneNumberText.value;
//   const tirmmedPhoneNumber = phoneNumber.replace(/-/g, '');

//   if (/^[0][0-9]{9,10}$/.test(tirmmedPhoneNumber) === false) {
//     warningMessage.innerText = '電話番号を正しく入力してください';
//   } else {
//     warningMessage.innerText = '';
//   }
// });

// const secondElement = document.querySelector('.second');
// const goalTime = new Date().getTime() + 15 * 1000;
// update();

// function update() {
//   const currentTime = new Date().getTime();
//   const leftTime = goalTime - currentTime;
  
//   secondElement.innerText = (leftTime / 1000).toFixed(2);
//   if (secondElement.innerText === 0.00) {
//     secondElement.innerText = 0;
//   }
//   requestAnimationFrame(update);
// }

// const hourElement = document.querySelector('.hour');
// const minuteElement = document.querySelector('.minute');
// const secondElement = document.querySelector('.second');

// update();

// function update() {
//   const currentTime = new Date();

//   const second = currentTime.getSeconds();
//   secondElement.innerText = addZeroPadding(second);
//   requestAnimationFrame(update);
// }

// /*
// @param Number
// @returns {string}
// */

// function addZeroPadding(num) {
//   return String(num).padStart(2, 0);
// }

// let en = encodeURI('http://example.com/可愛い猫のページ.html');
// console.log(en);

// document.querySelector('#tweetButton').addEventListener('click', () => {
//   let tweetText = document.querySelector('#tweetTextArea').value;

//   tweetText += ' #JavaScript';

//   const encodeText = encodeURIComponent(tweetText);

//   const tweetURL = `https://twitter.com/intent/tweet?text=${encodeText}`;
  
//   window.open(tweetURL);
// });

// const array1 = [];

// const array6 = [{ id: 1, name: 'takashi'}, { id: 2, name: 'ootu'}];

// console.log(array6);

// const array = ['イチゴ', 'みかん', 'りんご'];

// array.forEach((value, index) => {
//   console.log(index, value);
// })

// [1,2,3,4,5,6,7,8]

// .fliter((value) => value % 2 === 0)

// .forEach((value) => {
//   console.log(value);
// });

// const userList = [
//   { id: 1, name: '田中', address: '東京' },
//   { id: 2, name: '鈴木', address: '宮城' },
//   { id: 3, name: '高橋', address: '福岡' }
// ];

// const container = document.querySelector('.container');

// userList.forEach((userData) => {
//   container.innerHTML += `
//   <div class="card">
//   <h2>${userData.name}</h2>
//   <p>出身地：${userData.address}</p>
//   </div>
//   `;
// });

// const array1 = ['りんご', 'みかん'];
// array1.unshift('バナナ');
// console.log(array1);

// const array2 = ['りんご', 'みかん'];
// array2.push('バナナ', 'イチゴ');

// console.log(array2);

// const array1 = ['鈴木', '佐藤'];
// const array2 = ['田中'];
// const array3 = array1.concat(array2);

// console.log(array3);
//スプレッド演算子(...)を用いると、[...配列]のように指定する事で、配列の要素すべて展開した配列が得られる

// const myArray = ['鈴木', '田中', '高橋', '後藤'];
// const targetUser = myArray.find((element) => element === '田中');
//田中の要素を取得
// console.log(targetUser);

// const userDateList = [
//   { id: 123, name: '高橋' },
//   { id: 1021, name: '鈴木' },
//   { id: 6021, name: '後藤' }
// ];

// const searchIdInput = document.querySelector('#search-id-input');
// const searchResult = document.querySelector('#search-result');

// searchIdInput.addEventListener('keyup', () => {
//   const searchId = Number(event.target.value);
//   findUser(searchId);
// });

// function findUser(searchId) {
//   const targetData = userDateList.find((data) => data.id === searchId);

//   if (targetData == null) {
//     searchResult.textContent = '該当者なし';
//     return;
//   }

//   searchResult.textContent = targetData.name;
// }

// const array = [
//   '鈴木', '田中', '高橋', '後藤'
// ];

// const targetIndex = array.findIndex((element) => element === '田中');
// console.log(targetIndex);

// const array = [1, 2, 3, 4, 5];
// array.sort((a,b) => {
//   if (a < b) {
//     return 1;
//   }

//   if (a === b) {
//     return 0;
//   }

//   if (a > b) {
//     return -1;
//   }
// })

// console.log(array);

// const userDataList = [
//   { id: 2, name: '鈴木' },
//   { id: 10, name: '田中' },
//   { id: 4, name: '佐藤' },
//   { id: 29, name: '高橋' },
//   { id: 101, name: '小笠原' },
// ];

// function updateList() {
//   let listHtml = '';

//   for (const data of userDataList) {
//     listHtml += `<li>${data.id} : ${data.name}</li>`;
//   }

//   document.querySelector('.user_list').innerHTML = listHtml;
// }

// function sortByAscending() {
//   userDataList.sort((a, b) => {
//     return a.id - b.id;
//   });
//   updateList();
// };

// function sortByDescending() {
//   userDataList.sort((a, b) => {
//     return b.id - a.id;
//   });
//   updateList();
// }

// document.querySelector('.ascending').addEventListener('click', (event) => {
//   sortByAscending();
// });

// document.querySelector('.descending').addEventListener('click', () => {
//   sortByDescending();
// });

// const arr1 = ['grape', 'Orange', 'apple'];
// arr1.sort();
// console.log(arr1);

// const arr2 = ['grape', 'Orange', 'apple'];
// arr2.sort((a, b) => a.localeCompare(b));
// console.log(arr2);

// const idList = [4, 10, 20];
// const userIdList = idList.map((value) =>
//   `userid_${value}`);
// console.log(userIdList);

// const idList = [3, 8, 12];
// const userIdList = idList.map((value, index) =>
// `userid_${index + 1}_${value}`);
// console.log(userIdList);

// const apiResponseData = [
//   { id: 10, name: '鈴木'},
//   { id: 21, name: '田中'},
//   { id: 31, name: '高橋'}
// ];

// const idList = apiResponseData.map((value) =>
// value.id);

// console.log(idList);

// const array = [10, 20, 30, 40];
// const newArray = [10, 20, 30, 40].fliter((value) => value >= 30);

// console.log(newArray);

// const userDataList = [
//   { name: '鈴木', age: 18 },
//   { name: '田中', age: 27 },
//   { name: '佐藤', age: 32 },
//   { name: '高橋', age: 41 },
//   { name: '小笠原', age: 56 },
// ];

// document.querySelectorAll('.button').forEach((element) => {
//   element.addEventListener('click', (event) => {
//     onClickButton(event);
//   })
// })

// function onClickButton(event) {
//   //targetイベントを発生させたオブジェクトへの参照
//   const button = event.target;
//   const targetAge = button.dataset.age;
//   const filterdList = userDataList.filter((data) => data.age >= targetAge);
//   updateList(filterdList);
// }

// function updateList(filterdList) {
//   let listHtml = '';

//   for (const data of filterdList) {
//     listHtml += `<li>${data.name} : ${data.age}歳</li>`
//   }

//   document.querySelector(`.user_list`).innerHTML = listHtml;
//  }

// const priceList = [100, 500, 900];
// const sum = priceList.reduce((previous, current) => {
//   return previous + current;
// });

// console.log(sum);

// const array = [['バナナ', 'りんご', 'いちご'], ['みかん', 'ぶどう']];
// const flattenedArray = array.reduce((previousValue, currentValue) => {
//   return previousValue.concat(currentValue);
// });
// console.log(flattenedArray);

// const array = ['鈴木', '田中', '後藤'];
// const members1 = array.reduce((previous, current) => {
//   return `${previous}と${current}`;
// });
// console.log(members1);
// const members2 = array.reduceRight((previous, current) => {
//   return `${previous}と${current}`;
// });
// console.log(members2);

// const allDivElementList = document.querySelectorAll('div');
// console.log(allDivElementList.length);
// console.log(allDivElementList[2]);

// const allDivElementList = document.querySelectorAll('div');
// const elementsArray = [...allDivElementList];

// elementsArray.filter((element) => element.classList.contains('on'));

// console.log([...myString]);

// const myString = 'こんにちは';
// const newArray = Array.from(myString, (character) =>
//   `${character}!`
// );
// console.log(newArray);
// const anoterArray = [...myString].map((character) => `${character}！`);
// console.log(anoterArray);

// const array = ['鈴木', '田中'];
// [array[0], array[1]] = [array[1], array[0]];
// console.log(array);

// const array = [1, 2, 3, 4, 5];
// const arrayLength = array.length;

// for (let i = arrayLength - 1; i >= 0; i--) {
//   const randomIndex = Math.floor(Math.random() * (i + 1));
//   [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
// }
// console.log(array);

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const shuffled1 = shuffleArray(array1);
// console.log(shuffled1);

// const array2 = ['田中', '鈴木', '吉田', '後藤', '辻'];
// const shuffled2 = shuffleArray(array2);
// console.log(shuffled2);

// function shuffleArray(sourceArr) {
//   const array = sourceArr.concat();
//   const arrayLength = array.length;

//   for (let i = arrayLength - 1; i >= 0; i--) {
//     const randomIndex = Math.floor(Math.random() * (i + 1));
//     [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
//   }
//   return array;
// }

// const person = {
//   id: 1,
//   name: '鈴木',
//   age: 28
// };

// const object = {
//   list: [1, 2, 3],
//   subObject: { id: 1, name: '鈴木' },
//   method: () => {
//     console.log('メソッドを実行');
//   }
// };

// const person = {
//   id: 1,
//   name: '鈴木',
//   age: 28
// };

// console.log(person);

// const object = {};
// const person = {
//   id: 1,
//   name: '鈴木',
//   age: 28
// };

// console.log(person.id);
// console.log(person['name']);

// person.id = 2;
// person['name'] = '田中';
// console.log(person.id);
// console.log(person['name']);

// const object2 = {};
// object2.foo;

// const responce = {
//   result: true,
//   list: [{ id: 1, name: '田中', age: 26 }, { id: 2, name: '鈴木', age: 32 }]
// };

// console.log(responce.list[0].name);
// responce.list[1].age = 51;
// console.log(responce.list[1].age);

// const myClass = {
//   method1: function() {
//     console.log('メソッド１を実行');
//   },
//   method2: () => {
//     console.log('メソッド２を実行');
//   }
// };

// myClass.method2();

// const object1 = {
//   result: true,
//   members: [
//     { id: 1, name: '鈴木' },
//     { id: 2, name: '田中' },
//     { id: 3, name: '高橋' },
//   ]
// };

// const conpiedObject2 = Object.assign({}, object1);
// console.log(conpiedObject2);

// const object3 = {
//   id: 1, 
//   members: ['鈴木', '田中', '高橋']
// };

// const copiedObject3 = { ...object3 };
// object3.members[0] = 'John';
// console.log(copiedObject3);
// console.log(copiedObject3.members[0]);

// const userData = {
//   id: 1,
//   name: '田中',
//   age: 26
// };

// console.log(userData.hasOwnProperty('id'));
// console.log(userData.hasOwnProperty('address'));
// console.log('id' in userData);
// console.log(userData.id != null);
// console.log(userData.adress != null);
// console.log(userData['id'] != null);

// const userData = {
//   id: 1,
//   name: '田中',
//   age: 26
// };

// console.log(Object.values(userData));
// console.log(Object.entries(userData));

// const userData1 = {
//   id: 1,
//   name: '田中',
//   age: 26
// };

// const { id, name, age } = userData1; 

// const userData3 = {
//   id: 1,
//   name: '田中'
// };

// const { name: myName } = userData3;
// console.log(myName);

// const object1 = { id: 10, name: '田中' };
// object1.id = 12;
// object1.address = '東京';
// console.log(object1);

// 'use strict';

// const object2 = { id: 10, name: '田中'};
// Object.freeze(object2);

// object2.id = 12;s
// object2.address = '東京';
// console.log(Object.isFrozen(object2));

// const num = 100;
// const str = '鈴木';
// const arr = [1, 2, 3];
// const obj = {
//   age: 18,
//   name: '鈴木'
// };
// const arr = [
//   { id: 10, name: '鈴木' },
//   { id: 20, name: '田中' },
//   { id: 30, name: '田中' }
// ]

// const myArray = [1, 2, 3];
// myArray[0] = 100;
// console.log(myArray);

// let myNumber = 10;

// console.log()
//   typeof function() {
//     console.group('test');
// };
// console.log(typeof class MyClass {});

// const today = new Data();
// console.log(today instanceof Date);
// console.log(today instanceof Array);

// function showCurrentDate(argument) {
//   if (argument instanceof Date) {
//     console.log(`現在は${argument.toLocaleDateString()}です。`);
//   } else {
//     console.log('不正なデータです')
//   }
// }

// const today = new Date();
// const myArray = [1, 2, 3];
// showCurrentDate(today);
// showCurrentDate(myArray);

// class MyClass1 {}
// class MyClass2 {}

// const myInstance1 = new MyClass1();
// const myInstance2 = new MyClass2();

// console.log(myInstance1 instanceof MyClass1);
// console.log(myInstance2 instanceof MyClass1); 

// let a = 100;
// let b = a;
// a = 500;
// console.log(b);
// console.log(a);

// function myFunction(x) {
//   x = x + 2;
//   return x;
// }

// let a = 10;

// myFunction(a);
// console.log(a);

// function myFunction(x) {
//   x[0] = 100;
// }

// let a = [1, 2, 3];
// myFunction(a);
// console.log(a);

// const result = 100 + Number('200');
// console.log(result);
// console.log(typeof(String(1)));

// let b = 10;
// b = '鈴木';
// console.log(b);
// const myInstance1 = new MyClass1();

// let a;
// console.log(a);

// const object = {};
// console.log(object.b);

// function myFunction(c) {
//   console.log(`bの値は${c}`);
// }

// myFunction();

// function searchUser(targetId) {
//   const userList = [
//     { id: 1, name: '鈴木' },
//     { id: 2, name: '田中' },
//     { id: 3, name: '太郎' },
//   ];

//   const targetUser = userList.find((user) => user.id === targetId );
//   if (targetUser === undefined) {
//     return null;
//   }
//   return targetUser.name;
// }

// console.log(searchUser(1));
// console.log(searchUser(4));
// // searchuser(4);

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth() + 1;
// const label = `${month}月${day}日`

// document.querySelector('#log').innerHTML = `今年は西暦${year}年です。`

// const date = new Date();
// const hour = date.getHours();
// let meridiem;
// let hour2;
// if (hour < 12) {
//   meridiem = '午前';
//   hour2 = hour;
// } else {
//   meridiem = '午後';
//   hour2 = hour - 12;
// }

// const label = `${meridiem}${hour2}時`;
// document.querySelector('#log').innerHTML = `現時刻は${label}です`;

// const date = new Date();
// const day = date.getDay();
// const dayList = ['日', '月', '火', '水', '木', '金', '土'];
// const label = dayList[day];
// const locale = date.toLocaleString();
// const localeDate = date.toLocaleDateString();
// const localTime = date.toLocaleTimeString();

// document.querySelector('#log').innerHTML = `今日は${label}曜日です`
// document.querySelector('#log').innerHTML = `${locale}<br />
// ${localeDate}<br />
// ${localTime}`;

// const num1 = Date.parse('2018/06/20');
// console.log(num1);

// const num2 = Date.parse(2018, 5, 20);
// console
// .log(num2);
// const num = new Date();
// console.log(num.getDay());

// const date1 = new Date('2018/06/12 20:01:10');
// const date2 = new Date('Tue Jun 12 2018 20:01:10');
// const date3 = new Date('2018, 5, 12, 20, 1, 10');
// const date4 = new Date(1528801270000);
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);

// const date = new Date('2018/06/01');
// date.setMonth(date.getMonth() - new Date);
// console.log(date.toLocaleDateString());

// const dateA = new Date('2018/06/01');
// const dateB = new Date('2018/05/01');
// const diffMSec = dateA.getTime() - dateB.getTime();
// console.log(diffMSec);
// const diffDate = diffMSec / (24 * 60 * 60 * 1000);
// const diffHour = diffMSec / (60 * 60 * 1000);
// const diffMin = diffMSec / (60 * 1000);
// console.log(`${diffDate}日の差があります。`)
// console.log(`${diffHour}時間の差があります。`)
// console.log(`${diffMin}分の差があります。`)

// const sec = Math.floor(diff / 1000);
// console.log(sec);

// const oldTime = Date.now();
// setInterval(() => {
//   const currentTime = Date.now();
//   const diff = currentTime - oldTime;
//   const sec = Math.floor(diff / 1000);
//   document.querySelector('#log').innerHTML = `${sec}秒経過`;
// }, 1000);

// const totalTime = 10000;
// const oldTime = Date.now();
// const timerId = setInterval(() => {
//   const currentTime = Date.now();
//   const diff = currentTime - oldTime;
//   const remainMSec = totalTime - diff;
//   const remainSec = Math.ceil(remainMSec / 1000);
//   let label = `残り${remainSec}秒`;

//   if (remainSec <= 0) {
//     clearInterval(timerId);
//     label = '終了';
//   }
//   document.querySelector('#log').innerHTML = label;
// })

// setInterval(() => {
//   const now = new Date();
//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();

//   const degH = h * (360 / 12) + m * (360 / 12/ 60);
//   const degM = m * (360 / 60); 
//   const degS = s * (360 / 60);

//   const elementH = document.querySelector('.lineHour');
//   const elementM = document.querySelector('.lineMin');
//   const elementS = document.querySelector('.lineSec');

//   elementH.style.transform = `rotate(${degH}deg)`;
//   elementM.style.transform = `rotate(${degM}deg)`;
//   elementS.style.transform = `rotate(${degS}deg)`;
// }, 50);

setInterval(() => {
  // 現在時間を取得
  const now = new Date();

  // 時間の数値を取得
  const h = now.getHours(); // 時間(0〜23)
  const m = now.getMinutes(); // 分(0〜59)
  const s = now.getSeconds(); // 秒(0〜59)

  // 針の角度に反映する

  // 短針 (短針は時間だけでなく分も角度に考慮する)
  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  // 分針
  const degM = m * (360 / 60);
  // 秒針
  const degS = s * (360 / 60);

  const elementH = document.querySelector('.lineHour');
  const elementM = document.querySelector('.lineMin');
  const elementS = document.querySelector('.lineSec');

  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;
}, 50);