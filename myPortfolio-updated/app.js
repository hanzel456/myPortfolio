var left = document.querySelector(".left");
var header = document.querySelector(".header");
var rectangles = document.querySelectorAll(".rectangle");

left.addEventListener("mousemove", function(event){
  var move = (event.clientX*0.05)+4;
  var move2 = (event.clientX*0.003);
  header.style.transform = `translateX(-${move2}%)`;

  rectangles.forEach(function(rectangle){
    rectangle.style.transform = `translateX(${move}%)`;
  });
});
