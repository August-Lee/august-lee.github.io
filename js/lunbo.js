var i = 0;
var len;
var timer;
$(function () {
  len = $("#show ul li").length;
  timer = setInterval("prev()", 2000);
  $("#show").mouseover(function () {
    clearInterval(timer);
  }).mouseout(function () {
    timer = setInterval("prev()", 2000);
  });
  $(".prev").click(function () {
    prev();
  });
  $(".next").click(function () {
    next();
  })
})

function show(i) {
  $(".active").removeClass("active");
  $("#show ul li").eq(i).addClass("active");
}

function next() {
  i++;
  if (i == len) {
    i = 0;
  }
  show(i);
}

function prev() {
  i--;
  if (i < 0) {
    i = len - 1;
  }
  show(i);
}


