$(document).ready(function(){$("#hover").hover(function(){$(this).css("background-color","#ff0000")},function(){$(this).css("background-color","#39b7cd")}),$("#hover").on("click",function(){$(this).toggleClass("green")}),$(".hideMe").on("click",function(){$(this).hide()}),$(".changeColor").on("click",function(){$("li:nth-child(3)").css("color","#8A2BE2")}),$("#removeLi").on("click",function(){$("li:nth-child(2)").remove()}),$("li:nth-child(4)").on("click",function(){$(this).after("<li>I'm an item beneath the fourth item!</li>")}),$("ul > li:last-child").on("click",function(){$(this).css("font-size","40px"),$("li:not(:last-child").hide()}),$(".cute").on("click",function(){for(var c=0;20>c;c++)$(this).clone().appendTo(".clones")}),$("body").on("dblclick",function(){$("#makeSquare").css("border-radius","0"),$("#makeSquare").css("width","120px")}),$("#dontClick").on("click",function(){$(this).after("<p style='color:red'>PANDEMONIUM!</p>")}),$(".black").on("click",function(){$("body").css("background","#000")}),$(".wood").on("click",function(){$("body").css("background","url('http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/03/wood-wallpaper-3.jpg')")}),$(".chaos").on("click",function(){$("body").css("background","url('http://www.henderson-art.co.uk/art/wallpaper/chaos.jpg')")}),$(".restore").on("click",function(){$("body").css("background","#fff")})});