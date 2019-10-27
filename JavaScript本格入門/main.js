'use strict';
{
  /* Promiseは、非同期の状態を監視するためのオブジェクトで、
  コンストラクターには実行すべき非同期処理を関数リテラル、またはアロー関数として記述する。*/
  function asyncProcess(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 引数valueが未定義であるかどうかによって成否を判定
        if (value) {
          resolve(`入力値: $(value)`);
        } else {
          reject('入力は空です。')
        }
      }, 500);
    });
  }

  asyncxProcess('徳治郎').than(
    // 成功した時に実行される処理
    response => {
      console.log(response);
    },
    // 失敗した時に実行される処理
    error => {
      console.log(`エラー: ${error}`);
    }
  );

  /*JavaScriptはシングルスレッド、一つずつしか処理できない。
  それを解決できるのがWeb workerでマルチスレッドにする事ができ、処理を並列にすることができる。*/

  document.addEventListener('DOMcontenLoaded', function() {
    document.getElementById('btn').addEventListener('click', function(){
      var worker = new Worker('scripts/woker.js');

      worker.postMessage({
        //一般的にはパラメータ名: 値のhashで渡す事がおすすめ！
        'target': document.getElementById('target').value,
        'x': document.getElementById('x').value
      });
      document.getElementById('result').textContent = e.data;
      
      //wokerからの結果を処理するのはmessageイベントリスナーの役割、戻り値にはdateプロパティでアクセスできる！
      worker.addEventListener('message', function(e) {
        document.getElementById('result').textContent = e.data;
      }, false);
      
      worker.addEventListener('error', function(e) {
        //error情報は イベントオブジェクトのmessage/filename/lineno行番号プロパティなどで取得できる。
        document.getElementById('result').textContent = e.message;
      }, false);
    }, false);
  }, false);
    
}