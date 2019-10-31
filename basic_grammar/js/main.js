'use strict' 

//コメント

/*コメント
コメント
コメント
*/
// console.log("hello world");

// console.log('hello');

// console.log('hello' + 'takashi');

// const price = 140;

{
  // const scores = [80, 90, 40];
  // console.log(scores);
  // console.log(scores[2]);
  // scores[2] = 100;
  // console.log(scores.length);

  // // const player = ['taguchi', 32];

  // const player = {
  //   name: 'taguchi',
  //   score: 32,
  // };

  // console.log(player);

  // console.log(player.name);
  // console.log(player['name']);

  // player.score = 100;
  // console.log(player);

  // player.email = 'taguchi@gmail.com';

  // console.log(player);

  // delete player.score;
  // console.log(player);

  // const taguchi = {

  // };

  // class Player {
  //   constructor(name, score) {
  //     //メソッド
  //     this.name = name;
  //     this.score = score;
  //   }

  //   showInfo() {
  //     console.log(`name: ${this.name}です。 score: ${this.score}`);
  //   }

    // static showVersion() {
    //   console.log('Plyaer class ver. 1.0');
    // }
  // }

  // class SoccerPlayer extends Player {
  //   constructor(name, score, number) {
  //     super(name, score);
  //     this.number = number;
  //   }

  //   kick() {
  //     console.log('Gooooooaaal!!')
  //   }
  // }

  // const tsubasa = new SoccerPlayer('tsubasa', 99, 10);

  // tsubasa.kick();
  // tsubasa.showInfo;
  // console.log(tsubasa.number);
  
  // const taguchi = new Player('taguchi', 32);
  // const fkoji = new Player('fkoji', 44);

  // taguchi.showInfo;
  // fkoji.showInfo;

  // Player.showVersion();

  // const a = [1, 2, 4, 5, 7];

  // const b = a.map(item => item * 2);
  // console.log(b);

  // const c = a.filter(item => item %　2 === 0);
  // console.log(c);

  // const o = {
  //   a: 1,
  //   b: 2,
  // }

  // console.log(Object.keys(o));
  // console.log(Object.values(o));
  // console.log(Object.entries(o));

  // Object.keys(o).forEach(key => {
  //   console.log(`${key}: ${o[key]}`);
  // })

  // const a = [10, 20];
  // const b = [1, 2, ...a];
  // console.log(b);
  
  // const a = [10, 20];
  // const sum = (a, b) => a + b;
  //sum関数の引数に...aを渡すと引数を受け取ってくれる
  // console.log(sum(...a));

  // const o1 = {a: 1};
  // const o2 = {...o1, b: 2};
  // console.log(o2);

  // const numbers = [1, 2];
  // const a = numbers[0];
  // const b = numbers[1];
  // const [a, b] = numbers;
  // console.log(a);
  // console.log(b);

  // const numbers = [1, 2, 3, 8, 29, 30, 222];
  // const [a, b, ...rest] = numbers;
  // console.log(a);
  // console.log(b);
  // console.log(rest);

  // const player = {
  //   name: 'taguchi',
  //   score: 55,
  //   hp: 33,
  //   mp: 22,
  // };

  // const {name, score, ...points} = player;
  // console.log(name);
  // console.log(score);
  // console.log(points);

  // const str = 'hello';

  // console.log(str.length);
  // console.log(str.substring(2, 4));
  // console.log(str[1]);

  //Math
  // console.log(Math.PI);

  //Math.random
  // console.log(Math.random());

  /*Math.random() -> 0... 0.9999;
  Math.random() * 6 -> 0... 5.9999;
  Math.random() * 6 + 1 -> 1 ... 6.9999;
  Math.floor(Math.random) * 6 + 1) -> 1 ... 6;*/

  // console.log(Math.floor(Math.random() * 6 + 1));

  // const d = new Date();
  // console.log(d.getFullYear());
  // console.log(d.getMonth());
  // console.log(d.getDate());
  // console.log(d.getDay());
  // console.log(d.getHours());
  // console.log(d.getMinutes());
  // console.log(d.getSeconds());
  // console.log(d.getMilliseconds());

  // console.log(d.getTime());

  // const d = new Date(2018, 11);
  // d.setHours(10, 20, 30);
  // d.setHours(32);

  // console.log(d);

  // const d1 = new Date(2018, 11, 1);
  // const d2 = new Date(2018, 11, 10);
  // console.log((d2 - d1) / (24 * 60 * 60 * 1000));

  // window.alert('hello');
  // const answer = confirm('Are you sure?');
  // console.log(answer);

  // setInterval(関数、m秒);
  // let i = 0;

  // const showTime = () => {
  //   console.log(new Date());
  //   i++;
  //   if (i > 2) {
  //     clearInterval(timerId);
  //   }
  // };

  // let timerId = setInterval(showTime, 1000);

  // let i = 0;

  // const showTime = () => {
  //   console.log(new Date());
  //   let timerId = setTimeout(showTime, 1000);
  //   i ++;
  //   if (i > 2) {
  //     clearTimeout(timerId);
  //   }
  // };

  // showTime();

  // const a = 5;

  // try {
  //   console.log(a.toUpperCase());
  // } catch (e) {
  //   console.log(e.message);
  // }

  // console.log('Finish!');

  // document.body.textContent = 'Hello';
  // document.title = 'Changed!';

  // document.getElementById('target');
  // document.getElementsByClassName('box');
  // document.getElementById('target').textContent = 'Changed!';
  // document.querySelector('h1').textContent = 'H1';
  // document.querySelectorAll('li:nth-child(odd)').forEach(li => {
  //   li.textContent = 'LI!';
  // });

  // const ul = document.querySelector('ul');

  // console.log(ul.parentNode);
  // console.log(ul.children);
  // console.log(ul.children[0]);

  // for (let i = 0; i < ul.children.length; i++) {
  //   console.log(ul.children[i].textContent);
  // }

  // const h1 = document.querySelector('h1');

  // console.log(h1.title);
  // h1.title = 'Changed'

  // h1.style.color = 'gray';
  // h1.style.backgroundColor = 'pink';
  
//HTMLのカスタムデータ属性

  // const h1 = document.querySelector('h1');

  // console.log(h1.dataset.appId);
  // h1.dataset.message = 'this is custom message!';

  // const div = document.querySelector('div');

  // div.className = 'box border-pink';
  
  // div.classList.add('border-pink');

  // div.classList.remove('box');

  // if (div.classList.constains('border-pink')) {
  //   div.classList.remove('border-pink');
  // } else {
  //   div.classList.add('border-pink');
  // }
//上記と同じ内容
  // div.classList.toggle('boder-pink');

  // const h1 = document.createElement('h1');
  // h1.textContent = 'Title';
  // document.body.appendChild(h1);

  // const p = document.createElement('p');
  // p.textContent = 'Hello, hello, hello...';
  // document.body.appendChild(p);

  // const h2 = document.createElement('h2');
  // h2.textContent = 'Sub Title';
  // document.body.insertBefore(h2, p);

  // // const copy = p.cloneNode(true);
  // const copy = p.cloneNode(false);
  // document.body.insertBefore(copy, h2);

  // document.body.removeChild(h2);

  // const text = document.querySelector('input[type="text"]');
  // const textarea = document.querySelector('textarea');

  // console.log(text.value);
  // console.log(textarea.value);

  // text.focus();
  // text.select();
  // text.disabled = true;

  // console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked);
  // console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked);

  // document.querySelectorAll('input[type="checkbox"]')[0].checked = true;

  // console.log(document.querySelectorAll('input[type="radio"]')[0].checked);
  // console.log(document.querySelectorAll('input[type="radio"]')[1].checked);

  // document.querySelectorAll('input[type="radio')[1].checked = true;

  // console.log(document.querySelectorAll('select > option')[0].selected);
  // console.log(document.querySelectorAll('select > option')[1].selected);
  // console.log(document.querySelectorAll('select > option')[2].selected);


  document.querySelectorAll('select > option')[2].selected = true;

  const div = document.querySelector('div');

  document.addEventListener('mousemove', e => {
    div.textContent = `${e.clientX}:${e.clientY}`
  });

  const a = document.querySelector('a');
  const span = document.querySelector('span');

  a.addEventListener('click', e => {
    //要素の既定の動作をキャンセルする。 preventDefault();
    e.preventDefault();
    a.classList.add('hidden');
    span.classList.remove('hidden');
  })

};