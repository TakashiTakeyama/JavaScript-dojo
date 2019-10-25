//0~25までの乱数を格納する配列
var rand =  new Array();
//問題の文字列を格納
var mondai = "",
//何問目か格納
var count = 0;
//問題数
var queNum = 150;

/*------------------------------*/

//キー状態管理変数の定義
var KEYS = new Array(256);
// キーの状態を false (押されていない)で初期化
for (var i = 0; i < KEYS.length; i++) {
  KEYS[i] = false;
}

//キーが押された時に呼び出される処理を指定
window.onkeydown = function(e) {
  //キーボードによる自動スクロール防止
  e.preventDefault();
  //キーを押された状態に更新
  KEYS[e.keyCode] = true;
  typeGame();
};

//キーが話された時に呼び出される処理を指定
window.onkeyup = function(e) {
  //キーを離された状態に更新
  KEYS[e.keyCode] = false;
};

//キーコードを格納する配列
var kCode = new Array(65,66, 67,68,69,70,71,72,73,
  74,75,76,77,78,79,80,81,82,83,84,
  85,86,87,88,89,90);
  //文字を格納する配列
var Alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

/*---------------------------*/

//タイピングゲームの問題をセットする
function gameSet() {
  //問題文とカウント数をクリアする
  mondai = ""
  count = 0;
  //0~25までの乱数を　queNum　個作成して配列randに格納する
  for (var i = 0; i < quoNum; i++) {
    rand[i] = Math.floor( Math.random() * 26);
  }

  //問題点の作成
  for ( var i = 0; i < queNum; i++) {
    mondai = mondai + Alphabet[rand[i]];
  }

  //問題枠に表示する
  document.getElementById("frame").innerHTML = mondai;
}

//キーを入力を受け取る
function typeGame() {
  //入力されたキーコードと、問題文のキーコードを比較
  if(KEYS[kCode[rand[count]]]) {
    //カウント数を+1にする
    count++;

    //全文字入力したか確認
    if (count < queNum) {
      //問題文の頭の一文字を切り取る
      mondai = mondai.substring(1, mondai, Length);
      //問題枠に表示する
      document.getElementById('frame').innerHTML = mondai;
    } else {
      //問題枠にゲーム終了を表示
      document.getElementById("frame").innerHTML = "終了します";
    }
  }
}