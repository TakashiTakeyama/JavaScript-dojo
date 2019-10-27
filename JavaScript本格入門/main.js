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
}