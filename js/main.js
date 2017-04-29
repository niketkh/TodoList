// Check off specific todo list item
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todo list item
$("ul").on("click", "li span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// Prevent Event Bubbling
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		if(todoText.trim() !== ''){
			var todo = "<li><span><i class='fa fa-trash'></i></span> " + todoText.trim() + "</li>";
			$('ul').append(todo);
			$(this).val('');
		}
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
