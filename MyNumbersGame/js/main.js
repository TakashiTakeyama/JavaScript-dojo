'use strict';

{
  class Panel {
    constructor(game) {
      this.game = game;
      this.el = document.createElement('li');
      this.el.classList.add('pressed');
      this.el.addEventListener('click', () => {
        this.check();
      });
    }

    getEl() {
      return this.el;
    }

    activate(num) {
      this.el.classList.remove('pressed');
      this.el.textContent = num;
    }

    check() {
      //this.el.textContentは文字列なので、整数に直してあげる。以下の場合10進数
      if (this.game.getCurrentNum() === parseInt(this.el.textContent, 10)) {
        this.el.classList.add('pressed');
        this.game.addCurrentNum();

        if (this.game.getCurrentNum() === this.game.getLevel() ** 2) {
          clearTimeout(this.game.getTimeoutId());
        }
      }
    }
  }

  class Board {
    //BoardクラスのconstructorでGameクラスのインスタンスを受け取る。
    constructor(game) {
      this.game = game;
      this.panels = [];
      for (let i = 0; i < this.game.getLevel() ** 2; i++) {
        //Panelクラスを作る時にthis.gameを渡せばPanelクラスに渡せる。
        this.panels.push(new Panel(this.game));
      }
      this.setup();
    }

    setup() {
      const board = document.getElementById('board');
      this.panels.forEach(panel => {
        /*クラスのプロパティに外部から直接アクセスしない方が良い
        board.appendChild(panel.el); */
        board.appendChild(panel.getEl());// カプセル化
      });
    }

    activate() {
      // const nums = [0, 1, 2, 3];
      const nums = [];
      for (let i = 0; i < this.game.getLevel() ** 2; i++) {
        nums.push(i);
      }

      this.panels.forEach(panel => {
        const num = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
        panel.activate(num);
      });
    }
  }

  
  class Game {
    constructor(level) {
      this.level = level;
      //BoardクラスのconstructorにGameクラスのインスタンスを渡す。(this)
      this.board = new Board(this);
      
      this.currentNum = undefined;
      this.startTime = undefined;
      this.timeoutId = undefined;
      
      const btn = document.getElementById('btn');
      btn.addEventListener('click', () => {
        this.start();
      });
      this.setup();
      }

      setup() {
        const container = document.getElementById('container');
        const PANEL_WIDTH = 50;
        const BOARD_PADDING = 10;
        container.style.width = PANEL_WIDTH * this.level + BOARD_PADDING * 2 + 'px';
      }
      
      start() {
        if (typeof this.timeoutId !== 'undefined') {
          //既にタイマーが動作していたら止める
          clearTimeout(this.timeoutId);
        }
        
        this.currentNum = 0;
        this.board.activate();
        
        this.startTime = Date.now();
        this.runTimer();
      }
      
      runTimer() {
        const timer = document.getElementById('timer');
        timer.textContent = ((Date.now() - this.startTime) / 1000).toFixed(2);
      
      this.timeoutId = setTimeout(() => {
        this.runTimer();
      }, 10);
    }

    addCurrentNum() {
      this.currentNum++;
    }

    getCurrentNum() {
      return this.currentNum;
    }

    getTimeoutId() {
      return this.timeoutId;
    }

    getLevel() {
      return this.level;
    }
  }

  new Game(7);
}