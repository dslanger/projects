$(document).ready(function(){
// 1. When 'Submit' is clicked, add the contents of the textbox below the button in a h3 element.
$("#submitBtn").on("click", function () {
	var contents = $(".textInput").val();
	$(this).after("<h3>" + contents + "</h3>");
});

//2. When the checkbox is clicked, reveal a hidden message...
$("input[type='checkbox']").on("click", function () {
	$("h2").removeClass("hidden");

});
//3. Add a new cat to the table.
$("tr").last().after("<tr><td>Fritz</td><td>35</td><td>Hangry</td></tr>");

//4. Make 'hangry' red and 'content' green
$("td:contains('Hangry')").css("color", "red");
$("td:contains('Content')").css("color", "green");

//5. When clicked, only display cats weighing 10+ lbs

$("button:contains('Heavy Cats')").on("click", function () {
	$("td").each(function () {
		if($(this).text() < 10) {
			$(this).parent().hide();
		}
	});
});

//6. When clicked, uppercase all cat names
$("button:contains('YELL NAMES')").on("click", function () {
	$("tr td:first-child").css("text-transform","uppercase");
	
});

//7. Show and hide the table with this button:
$("button:contains('Toggle Table')").on("click", function () {
	$("table").toggle();
});

//8. Turn this array into a list arranged alphabetically and then append it to the page

var arrayForEight = ["rope", "string", "cord", "twine"];
var sortedArray = arrayForEight.sort();
for (var i = 0; i < sortedArray.length; i++) {
	var temp = sortedArray[i];
	$("h4").append("<li>" + temp + "</li>");
}
$("h4 + li:first-child").before("<ul>");
$("h4 + li:last-child").after("</ul>");

//9. Disable the input field, the checkbox, and the link to Google
$("#disableUs input").prop('disabled', true);
// $("#disableUs a").attr("disabled", "disabled");
$("#disableUs a").on("click", function (e) {
	e.preventDefault();
});

//10. Select the third option from the dropdown, and append it to the page.
// var wahoo = $("option:nth-child(4)").text();
// $(".dropdown").after("<h3>" + wahoo + "</h3>");

$("select[class='dropdown']").change(function () {
	
	if ($(this).val() === "Wahoo!!!") {
		var target = $(this).val();
		$(this).after("<h3>" + target + "</h3>");
	}
});

//11. Alert the user how many items are in the list
$("#alertList").after( "<h3>There are " + $( "#alertList li" ).size() + " items in the list</h3>");


//12. Create buttons that add and remove list items
$("#add").on("click", function () {
	$("#add-remove").append("<li>Item Added!!</li>");
});

$("#remove").on("click", function () {
	$("#add-remove li:last-child").remove();
});

//13. Create a counter that displays the length of the list.
$("#remove").after( "<p>There are " + $( "#add-remove li" ).size() + " items!</p>");

});


