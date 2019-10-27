describe('Jusmineの基本', function() {
  var area;
  
  //beforeEachメソッドは、個々のテストケースが実行される前に呼び出されるメソッド
  beforeEach(function() {
    area = new MyArea(10, 5);
  });

  //事後処理用のafterEachメソッド
  afterEach(function() {

  });

  //itメソッドが、個々のテストケース
  it('getTriangleメソッドのテスト', function() {
    //戻り値が25に等しい
    expect(area.getTriangle()).toEqual(25);
  });

  it('getSquareメソッドのテスト', function() {
    //tobeTruthyはMatcher結果確認の為のアサーションメソッド
    expect(area.getSquare() === 50).toBeTruthy();
  });
});