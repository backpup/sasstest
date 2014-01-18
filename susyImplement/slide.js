$(document).ready(function(){
	$("#imageList img").on("mouseover", function(){
		$(this).stop(true).animate({top:-15}, "fast");
		var that = $(this);
		
		$("#currentImage img").stop(true).fadeOut(300, 
			function(){
				$(this).attr("src", that.attr("src")).fadeIn(400);
			});
		//$("#currentImage img").attr("src", $(this).attr("src")).fadeIn(1000);
	}).on("mouseout", function(){
		$(this).stop(true).animate({top:0},"fast");
	})
});