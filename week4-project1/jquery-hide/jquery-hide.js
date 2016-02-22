// EXERCISE THE JQUERY

// We'll be using the html in index.html for the following jQuery exercises.
// After you've completed an exercise, comment out your code before moving to the next one.
$(document).ready( function () {
// 1. Hide all of the paragraphs on the index.html page.
	$("p").hide();

// 2. Hide all of the h1's on the page.
	$("h1").hide();

// 3. Hide all of the elements in the document.
	//$("body").hide();

// 4. Hide all links on the page
	$("a").hide();

// 5. Hide all of the odd table rows (Austin, Colin, & Jessica's rows)
	$("tr:odd").hide();

});

//6. hide all p's
$('p').on('click', function () {
	$(this).hide();
})

//7. 