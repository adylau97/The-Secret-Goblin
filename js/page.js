$(document).on("scroll",function(){
	var scrollTop=document.body.scrollTop;
	if($(document).scrollTop() > 0){
		$(".toolbar").addClass("anim");
	}
	if($(document).scrollTop() <= 0){
		$(".toolbar").removeClass("anim");
	}
});
