
setInterval("big()",100);
function big(){
  var father =$('#show').height();
  var son = $('#show li').height();
  $('#show').height(son);
}
$(function(){
  setTimeout(function(){
    $(".contactPhone div").css("display","block");
    $(".contactPhone div").addClass("bounceInLeft");
  },2000)
})
$(document).scroll(function(){
  if($("body").scrollTop()>1){$(".kecheng").css("display","block");}
  if($("body").scrollTop()>1){$(".f1div").css("display","block");}
  if($("body").scrollTop()>1){$(".son").css("display","block");}
  if($("body").scrollTop()>1){$(".f2div").css("display","block");}
})