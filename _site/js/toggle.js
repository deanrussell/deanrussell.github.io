// jQuery for Toggle!

$(document).ready(function(){
	$(".button__page-right").click(function(){
        $(".page").toggleClass("mv__page-right");
        $(".cover").toggleClass("cover__page-right");
        $(".off-left").toggleClass("on-right");
    });
    $(".button__page-left").click(function(){
        $(".page").toggleClass("mv__page-left");
        $(".cover").toggleClass("cover__page-left");
        $(".off-right").toggleClass("on-left");
    });
});