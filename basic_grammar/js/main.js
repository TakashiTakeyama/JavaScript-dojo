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

  const a = 5;

  try {
    console.log(a.toUpperCase());
  } catch (e) {
    console.log(e.message);
  }
  
  console.log('Finish!');
};