(function (window) {
  function Game() {
    this.version = 1.0;
    this.map = new Map({
      color : "blue",
    });
    this.food = new Food({
      map : this.map,
    });
    this.snake = new Snake({
      map :this.map
    });
    this.timer = null;
  }
  
  Game.prototype = {
    construct : Game,
    gameStart : function () {
      //先渲染地图
      this.map.render();
      //存储this;
      var that = this;
      that.food.setPos();
      //用户渲染
      this.userControl();
      this.timer=setInterval(function(){ that.map.map.innerHTML = "";
        that.food.render();
        
        that.snake.move();
        that.snake.render();
        //碰撞检测
        that.impact();
        that.gameOver();
      },100)
      
    },
    // render:function(){
    //   this.snake.render();
    //   this.food.render();
    // },
    //碰撞检测
    impact: function () {
      var head = this.snake.body[0];
      if(head.x == this.food.x && head.y == this.food.y){
        this.snake.eat(); //吃食物
        this.food.setPos(); //食物重新随机位置
      }
    },
    //游戏结束检测
    gameOver: function () {
      var head = this.snake.body[0];
      if(head.x<0||head.y<0||head.x >this.map.col-1 || head.y > this.map.row-1){
        
        clearInterval(this.timer);
        alert("游戏结束!")
      }
    },
    
    
    //用户控制
    userControl:function () {
      var that = this;
      window.onkeydown =function (e) {
        var code = e.keyCode;
        switch (code){
         case 37:
           that.snake.direction = "left";
           break;
         case 38:
           that.snake.direction = "up";
           break;
         case 39:
           that.snake.direction = "right";
           break;
         case 40:
           that.snake.direction = "down";
           break;
         }
        
      }
      
    }
  }
  
  window.Game = Game;
  
})(window);