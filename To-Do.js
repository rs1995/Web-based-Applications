// To check off the todos
$("ul").on("click", "li", function(){
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color: "rgb(0, 0, 0)",
	// 		textDecoration: "none"
	// 	})
	// }
	// else{
	// 	$(this).css({
	// 		color: "rgb(128, 128, 128)",
	// 		textDecoration: "line-through"
	// 	})
	// }

	$(this).toggleClass("completed");
});


// to delete the todos with fade-out effect
$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});


//adding new todos
$("input[type=text").keypress(function(event){
	if(event.which===13){
		var newText= $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + " " + newText + "</li>");
	}
});


//Toggling input space
$(".fa-plus").click(function(){
	$("input[type=text]").fadeToggle(300);
});