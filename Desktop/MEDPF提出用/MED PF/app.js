var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
// console.log(rotateValue);
var rotateSum;

upBtn.onclick = function(){
  // 時計回りに90°回転
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  // rotateValue の更新を実行
  rotateValue = rotateSum;
};

downBtn.onclick = function(){
  rotateSum = rotateValue + "rotate(+90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};