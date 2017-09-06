//首先绘制地图,使用沙箱模式
(function (window) {
  function Map(option) {
    this.color = option.color || "pink";
    this.row = option.row || 20;
    this.col = option.col || 30;
    this.size = option.size || 25;
    this.map = null;
  }
  //渲染
  Map.prototype.render = function () {
    var div = document.createElement("div");
    this.map = div;
    div.style.background = this.color;
    div.style.position = "relative";
    div.style.height = this.row*this.size + "px";
    div.style.width = this.col*this.size + "px";
    window.document.body.appendChild(div);
  }
  
  window.Map = Map;
})(window)