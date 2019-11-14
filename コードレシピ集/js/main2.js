// const btn = document.querySelector('button');
// btn.addEventListener('click', (event) => {
//   alert('こんにちは。\n今日の天気は晴れです。');
// });

// window.alert
// alert('おはようございます');

// const btn = document.querySelector('button');
// btn.addEventListener('click', (event) => {
//   const isYes = confirm('天気は晴れてきますか？');
//   document.querySelector('.log').innerHTML = isYes;
// });

// const text = prompt('どうですか？', 'デフォルト文言');
// console.log(text);

// const w = window.innerWidth;
// const h = window.innerHeight;

// window.addEventListener('resize', resizeHandler);

// function resizeHandler(event) {
//   const w = innerWidth;
//   const h = innerHeight;

//   document.querySelector('.value-width').innerHTML = `横幅は ${w}px です`;
//   document.querySelector('.value-height').innerHTML = `高さは ${h}px です`;
// }

// const dpr = window.devicePixelRatio;
// const w = 200;
// const h = 200;
// const canvas = document.querySelector('canvas');
// canvas.width = w * dpr;
// canvas.height = h * dpr;
// canvas.style.width = w + 'px';
// canvas.style.height = h + 'px';
// const context = canvas.getContext('2d');
// context.scale(dqr, dpr);
// context.fillStyle = 'red';
// context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI);

// document.querySelector('.log').innerHTML = `現在のデバイスピクセル比は ${dpr} です`;

// const isSupported = !!(
//   'ontouchstart' in window ||
//   (navigator.pointerEnabled &&
//     navigator.maxTouchPoints > 0)
// );

// console.log(location.href);
// location.href = 'another.html';

// location.reload();
// location.reload(true);
// history.back();
// history.forward();
// history.go(-1);

// const hash = location.hash;
// console.log(hash);
// location.hash = 'app';

// window.addEventListener('hashchange', handleHashChange();
// handleHashChange();
// function handleHashChange() {
//   const hash = location.hash;
//   document.querySelector('.log').innerHTML = `現在のアンカーは「${hash}」です`
// })

// const win = window.open('another.html');
// win.focus();
// const x = window.scrollX;
// const y = window.scrollY;
// console.log(x, y);

// document.querySelector('#btnApple').addEventListener('click', () => {
//   document.title = '🍎apple';
// })

// window.addEventListener('focus', () => {
//   document.querySelector('#log').innerHTML = 'フォーカスがあたっている';
// });

// window.addEventListener('blur', () => {
//   document.querySelector('#log').innerHTML = 'フォーカスが外れている';
// })

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', (event) => {
//   myRequestFullScreen(document.body);
// });

// function myRequestFullScreen(element) {
//   if (element.webkitRequestFullscreen) {
//     element.requestFullscreen();
// } else if (element.webkitRequestFullscreen) {
//   element.webkitRequestFullscreen();
// } else if (element.mozRequestFullScreen) {
//   element.mozRequestFullScreen();
// } else if (element.msRequestFullscreen) {
//   element.msRequestFullscreen();
// }
// }

// const btnExit = document.querySelector('#btnExit');
// btnExit.addEventListener('click', (event) => {
//   myCancelFullScreen();
// });

// function myCancelFullScreen() {
//   if (document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if (document.webkitCanceFullscreen) {
//     document.webkitCancelFullScreen();
//   } else if (dcoument.msExitFullscreen) {
//     document.msExitFullscreen();
//   }
// }

// const isOnline = navigator.onLine;
// if (isOnline === true) {
//   console.log('オンラインです');
// } else {
//   console.log('ネットワークに繋がっていません');
// }

// window.addEventListener('online', () => {
//   console.log('オンラインです');
// });

// window.addEventListener('offline', () => {
//   console.log('ネットワークに繋がっていません');
// });

// const button = document.querySelector('.button');
// button.addEventListener('click', onClickButton);

// function onClickButton() {
//   console.log('クリックされました');
// }

// button.addEventListener('click', () => {
//   console.log('ボタンがクリックされました');
// });

// event = '就活のバカやろー';

// button.addEventListener('click', (evetn) => {
//   console.log(event)
//   console.log(event.target);
// })

// const option = {
//   once: true
// };

// document
// .querySelector('.button')
// .addEventListener('click', onClickButton, option);

// function onClickButton() {
//   alert('ボタンが押されました');
// }

// const box = document.querySelector('.box');
// box.addEventListener('click', onClickButton);

// setTimeout(() => {
//   box.removeEventListener('click', onClickButton);
// }, 3000);

// function onClickButton() {
//   alert('boxがクリックされました');
// } 

// window.addEventListener('DOMContentLoaded', () => {
//   const boxNum = document.querySelectorAll('.box').length;
//   console.log(`.box要素の数は${boxNum}です`);
// })

// document.querySelector('.button').addEventListener('click', () => {
  // alert('ボタンがクリックされました');
// })

// const logArea = document.querySelector('#log2');

// logArea.addEventListener('mousedown', () => {
//   logArea.innerHTML = `マウスボタンを押した`;
// });

// logArea.addEventListener('mouseup', () => {
//   logArea.innerHTML = `マウスボタンを離した`;
// });

// logArea.addEventListener('mousemove', () => {
//   logArea.innerHTML = `マウスを移動した`;
// })

// document.querySelector('.box').addEventListener('mouseover', () => {
//   console.log('.box要素上にポインティングデバイスが乗った');
// });

// document.querySelector('.box').addEventListener('mouseout', () => {
//   console.log('.box要素上にポインティングデバイスが乗った');
//   log('.inner要素にマウスが乗った');
// });

// function log(message) {
//   console.log(message);
// }

// targetBox.addEventListenr('mouseover', (event) => {
//   console.log(event.clientX, event.clientY);
// })

// const charcter = document.querySelector('.character');
// document.addEventListener('mousedown', () => {
//   document.addEventListener('mousemove', onMouseMove);
//   document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', onMouseMove);
//   });
// });

// function onMouseMove(event) {
//   character.style.left = `${event.clientX - 100}px`;
//   character.style.top = `${event.clientY - 100}px`;
// }

// window.addEventListener('scroll', () => {
//   console.log('スクロール', window.scrollX, window.scrollY);
// });

// detocument.querySelector('.paragraph').addEventListener('selectstart', () => {
//   console.log('テキストが選択されました');
// })

// const balloon = document.querySelector('#balloon');
// const paragraph = document.querySelector('.paragraph');

// paragraph.addEventListener('selctstart', () => {
//   paragraph.addEventListener(
//     'mouseup',
//     (event) => {
//     const selectionCharacters = window.getSelection().toString();

//       if (selectionCharacters.length > 0) {
//         balloon.innerHTML = selectionCharacters;
//         balloon.classList.add('on');
//         balloon.style.left = `${event.clientX - balloon.clientWidth / 2}px`;
//         balloon.style.top = `${event.clientY - balloon.clientHeight * 2}px`;
//       } else {
//         removePopup();
//       }
//     },
//     {
//       once: true
//     }
//   )
// });

// balloon.addEventListener('click', removePopup);

// function removePopup() {
//   balloon.classList.remove('on');
// }

// const targetBox = document.querySelector('.box');
// const logArea = document.querySelector('.log');

// targetBox.addEventListener('touchstart', () => {
//   logArea.innerHTML = 'タッチ開始';
// });

// targetBox.addEventListener('touchmove', () => {
//   logArea.innerHTML = 'タッチ位置移動';
// })

// targetBox.addEventListener('touchend', () => {
//   logArea.innerHTML = 'タッチ終了';
// })

// const box = document.querySelector('.box');
// box.addEventListener('touchstart', (event) => {
//   console.log(event.changeTouches);
// })

// document.querySelector('.textarea').addEventListener('keydown', () => {
//   'keydown', () => {
//     console.log('キーが押された');
//   }
// })

// document.querySelector('.textarea').addEventListener('keydown', () => {
//   'keypress', () => {
//     console.log('文字が入力された');
//   }
// })

// document.querySelector('.textarea').addEventListener('keydown', () => {
//   'keyup', () => {
//     console.log('キーが離された');
//   }
// })

// const textarea = document.querySelector('.textarea');
// const string_num = document.querySelector('.string_num');

// textarea.addEventListener('keyup', onKeyUp);

// function onKeyUp() {
//   const inputText = textarea.value;
//   string_num.innerText = inputText.length;
// }

// const textarea = document.querySelector('.textarea');

// textarea.addEventListener('keyup', (event) => {
//   console.log(event.key);
//   console.log(event.code);
//   console.log(event.altkey);
//   console.log(event.ctrkey);
//   console.log(event.shiftkey);
//   console.log(event.metakey);
//   console.log(event.repeat);
//   console.log(event.isComposing);
// });

// window.addEventListener('keydown', handlekeydown);

// function handlekeydown(event) {
//   const keycode = event.keyCode;
//   if (keyCode === 40) {
//     console.log('下キーが押されました');
//   }
// }

// document.addEventListener('visibilitychange', () => {
//   if (document.visibilityState === 'visible') {
//     console.log('コンテンツが表示されました');
//     return;
//   }

//   if (document.visibilityState === 'hidden') {
//     console.log('コンテンツがバックグラウンドになりました');s
//   }
// });pl

// if (document.visibilityState === 'visible') {
//   playSound();
// }

// document.addEventListener('visibilitychange', () => {
//   if (document.visibilityState === 'visible') {
//     playSound();
//     return;
//   }
  
//   if (document.visibilityState === 'hidden') {
//     stopSound();
//   }
// });

// function playSound() {

// };

// function stopSound() {

// };

// window.addEventListener('resize', () => {
//   console.log('ブラウザーがリサイズされました');
// });

// const widthLog = document.querySelector('#widthLog');
// const heightLog = document.querySelector('#heightLog');

// window.addEventListener('resize', () => {
//     widthLog.innerText = '${window.innerWidth}px';
//     heightLog.innerText = '${window.innerHeight}px';
// });

// let resizeTimer;

// window.addEventListener('resize', () => {
//   if (resizeTimer != null) {
//     clearTimeout(resizeTimer);
//   }

//   resizeTimer = setTimeout(() => {
//     onResize();
//   })
// });

// const mediaQueryList = matchMedia('(min-width: 500px)');
// console.log(mediaQueryList);

// const mediaQueryList = matchMedia('orientation: portrait');
// mediaQueryList.addListener(() => {
//   console.log('デバイスの向きが変更された');
// });

// const mediaQueryList = matchMedia('(min-width: 600px');
// mediaQueryList.addListener(onMediaQueryChange);

// function onMediaQueryChange(mediaQueryList) {
//   if (mediaQueryList.matches === true) {
//     rectAngle.classList.add('big-size');
//     console.log('ウィンドウサイズが600pxを超えました')
//   } else {
//     rectAngle.classList.remove('big-size');
//     console.log('ウィンドウサイズが600pxを下回りました')
//   }
// }

// onMediaQueryChange(mediaQueryList);

// const boxElement = document.querySelector('#myBox');

// boxElement.addEventListener('click', () => {
//   boxElement.innerHTML = 'クリックされました';
// });

// setTimeout(() => {
//   boxElement.dispatchEvent(new Event('click'));
//   boxElement.click();
// }, 1000);

// document.querySelector('.foo').addEventListener('wheel', (event) => {
//   event.preventDefault();
// });

// document.documentElement.addEventListener('touchstart', (event) => {
//   event.preventDefault();
// });

// let enableMouseWheel = true;
// document
// .querySelector('#mousewheelToggle')
// .addEventListener('click', (event) => {
//   enableMouseWheel = event.target.checked === false;
// });

// document
// .querySelector('.scrollable-element')
// .addEventListener('wheel', (event) => {
//   if (enableMouseWheel === true) {
//     return;
//   }

//   event.preventDefault();
// });

// const character = document.querySelector('.character');
// character.addEventListener('dragstart', () => {
//   console.log('dragstartイベント');
// });

// character.addEventListener('drag', () => {
//   console.log('dragイベント');
// });

// character.addEventListener('dragend', () => {
//   console.log('dragendイベント');
// });

// const box = document.querySelector('.box');
// box.addEventListener('dragenter', () => {
//   console.log('dragenterイベント');
// });

// box.addEventListener('dragover', () => {
//   console.log('dragoverイベント');
// });

// box.addEventListener('dragleave', () => {
//   console.log('dragleaveイベント');
// });

// const myBox = document.querySelector('.box');
// myBox.innerHTML = 'こんにちは';

// document.querySelector('#foo');
// document.querySelector('.list .item:nth-child(2)');
// const element = document.getElementById('foo');
// const nodeList = document.querySelectorAll('.box');
// nodeList.forEach((targetBox) => {
//   console.log(boxList[index]);
// });

// const boxList = document.querySelectorAll('.box');
// const boxLength = boxList.length;

// for (let index = 0; index < boxLength; index++) {
//   console.log(boxList[index]);
// }

// document.querySelectorAll('.box').forEach((targetBox) => {
//   targetBox.addEventListener('click', () => {
//     alert(`${targetBox.textContent}がクリックされました`);
//   });
// });

// document.getElementsByClassName('box');
// const boxList = dcument.getElementByClassName('box');
// const boxLength = boxList.length;

// for (let index = 0; i < boxLength; i++) {
//   console.log(boxList[index]);
// }

// const scriptElement = document.createElement('script');
// scriptElement.src = 'script/new-script.js';
// document.head.appendChild(scriptElement);

// console.dir(document.body);

// const parentElement = document.querySelector('#parent');
// console.log(parentElement.children);
// const firstElementChild = parentElement.firstElementChild;
// console.log(firstElementChild);
// console.log(firstElementChild.nextElementSibling);
// console.log(firstElementChild.parentNode);

// const container = document.querySelector('.container');
// const myBox = document.querySelector('#myBox');

// setTimeout(() => {
//   container.appendChild(mybox);
// }, 3000);

// const container = documentquerySelector('.container');
// const myBox1 = document.querySelector('#myBox1');
// const myBox1 = document.querySelector('#myBox2');
// const box2 = document.querySelector('#box2');

// setTimeout(() => {
//   container.insertBefore(myBox1, container.firstElementChild);
// }, 3000);

// setTimeout(() => {
//   container.insertBefore(myBox2, box2);
// }, 4000);

// const myBox1 = document.querySelector('#myBox1');
// const myBox2 = document.querySelector('#myBox2');
// const target = document.querySelector('#targetBox');

// setTimeout(() => {
//   targetBox.before(myBox1);
// }, 3000);

// setTimeout(() => {
//   targetBox.after(myBox2);
// }, 4000);

// const container = document.querySelector('.container');
// const newBox = `<div class="new-box box">.new-box要素</div>;`

// setTimeout(() => {
//   container.insertAdjacentHTML('afterbegin', newBox);
// })

// setTimeout(() => {
//   const parentElement = document.querySelector('#parent');
//   const childElement = document.querySelector('#child');

//   parentElement.removeChild(childElement);
// }, 3000);

// const divElement = document.createElement('div');
// const anchorElement = document.createElement('a');

// const divElement = document.createElement('div');
// divElement.innerHTML = 'これは動的に生成された要素です';
// document.body.appendChild(divElement);

// document
// .querySelector('#create-modal-button')
// .addEventListener('click', displayModalWindow);

// function displayModalwindow() {
//   const modalElement = document.createElementElement('div');
//   modalElement.classList.add('modal');

//   const innerElement = document.createElement('div');
//   innerElement.classList.add('inner');
//   innerElement.innerHTML = `
//   <p>モーダルウィンドウの中身です</p>
//   <div class="character"></div>`;

//   modalElement.appendChild(innerElement);
//   document.body.appendChild(modalElement);

//   innerElement.addEventListener('click', () => {
//     closeModalWindow(modalElement);
//   });

//   function closeModalWindow(modalElement) {
//     document.body.removeChild(modalElement);
//   }
// }

// document
// .querySelector('#crate-modal-buttton')
// .addEeventListener('click', displayModalWindow);

// function displayModalWindow() {
//   const modalElement = document.createElement('div');
//   modalElement.classList.add('modal');

//   const innerElement = document.createElement('div');
//   innerElement.classList.add('inner');
//   innerElement.innerHTML = `<p>モーダルウィンドウの中身です</p>
//   <div class="character"></div>`
// };

// modalElement.appendeChild(innerElement);
// document.body.appendChild(modalElement);

// innerElement.addEventListener('click', () => {
//   closeModalWindow(modalElement);
// })

// function closeModalWindow() {
//   document.body.removeChild(modalElement);
// }

// setTimeout(() => {
//   const clonedBox = document.querySelector('#myBox').cloneNode(true);
//   document.querySelector('.container').appendChild(clonedBox);
// }, 3000);

// setTimeout(() => {
//   const container = document.querySelector('.container');
//   const oldBox = document.querySelector('.old-box');
//   const newBox = document.createElement('div');
//   newBox.classList.add('new-box', 'box');
//   container.replaceChild(newBox, oldBox);
// }, 3000);

// const weatherInformation = document.querySelector('#weather-information');
// console.log(weatherInformation.textContent);

// const weatherElement = document.querySelector('#weather');

// setTimeout(() => {
//   weatherElement.textContent = `気温は24°cの予想です。`
// }, 3000);

// const weatherInformation = document.querySelector('#weather-infomation');
// console.log(weatherInformation.innerHTML);
// <p id="wather">明日は雪が降るでしょう</p>

const weatherElement = document.querySelector('#weather');

setTimeout (() => {
  weatherElement.innerHTML = `気温は<strong>-3°c</strong>の予想です。`
}, 3000);