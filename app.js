console.log("linked.");

$(function() {

clickSubmit();
byeNote();

});

//get form input
//when submit button is clicked, retrieve input
//get input and append it to page and store in localstorage
//reset

function clickSubmit () {
	var postBlog = $("#inputSubmit");
	postBlog.click(submitPost);
}

var postsArray = [];

function submitPost(event) {
	event.preventDefault();
	var newPost = $("#blogInput").val();
	postsArray.push(newPost);

	for (var i = 0; i < postsArray.length; i++) {
	var list = "<li class='checkbox grow'>" + "<input id='trashNote' type='checkbox'>" + postsArray[i] + "</li>";
	localStorage.setItem(i, postsArray[i]);
	}

	if (newPost.length !== 0 ) {

	$("#main").append(list);
	// localStorage.post = newPost;
}

	this.form.reset();

}

function byeNote() {
$('#trashPost').on("click", function() {
	$(".checkbox input:checked").parent().remove();
});

}