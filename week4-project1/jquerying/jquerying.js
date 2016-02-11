$(document).ready(function() {
	// 1. When your mouse is over the box, turn it red.
	//    Add the class 'green' when clicked (remove when clicked again).
		$("#hover").hover(function () {
			$(this).css("background-color", "#ff0000");
			}, function () {
			$(this).css("background-color", "#39b7cd");
		});

		$("#hover").on("click", function () {
			$(this).toggleClass("green");
		});

	//2. Hide me when clicked
	$(".hideMe").on("click", function () {
		$(this).hide();
	});

	//3. Click here to change color of third li
	$(".changeColor").on("click", function () {
		$("li:nth-child(3)").css("color","#8A2BE2");
	});

	//4. Click here to remove the second li
	$("#removeLi").on("click", function () {
		$("li:nth-child(2)").remove();
	});

	//5. When fourth item clicked, add item under it
	$("li:nth-child(4)").on("click", function () {
		$(this).after("<li>I'm an item beneath the fourth item!</li>");
	});

	//6. When the final item is clicked, change its font size to 40px and hide all other items.
	$("ul > li:last-child").on("click", function () {
		$(this).css("font-size","40px");
		$("li:not(:last-child").hide();
	});

	//7. When I'm clicked, make 20 more of me!
	$(".cute").on("click", function () {
		for (var i = 0; i < 20; i++) {
			$(this).clone().appendTo(".clones");
		}
	});

	//8. On a double-click anywhere on the page, turn this rounded rectangle into a square.
	$("body").on("dblclick", function () {
		$("#makeSquare").css("border-radius", "0");
		$("#makeSquare").css("width", "120px");
	});

	//9. Alert the user if they click this button
	$("#dontClick").on("click", function () {
		$(this).after("<p style='color:red'>PANDEMONIUM!</p>");
	});

	//10. On click, change the page background to match the swatch.
	$(".black").on("click", function () {
		$("body").css("background", "#000");
	});

	$(".wood").on("click", function () {
		$("body").css("background", "url('http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/03/wood-wallpaper-3.jpg')");
	});

	$(".chaos").on("click", function () {
		$("body").css("background", "url('http://www.henderson-art.co.uk/art/wallpaper/chaos.jpg')");
	});

	$(".restore").on("click", function () {
		$("body").css("background", "#fff");
	});

});