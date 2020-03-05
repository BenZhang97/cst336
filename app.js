/*global $*/
let buildGallery = function(){
	$("#images").empty();
	var url = "https://openlibrary.org/api/books/" + $("#number-images").val();
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(data){
			data.message.forEach(function(src){
				$("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\""+src+"\"></div>");
			});
		},
		error: function(err){
			console.log(err);
		}
	});
}