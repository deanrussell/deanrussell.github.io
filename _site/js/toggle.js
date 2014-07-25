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
    $("#bio-click").click(function(){
        $("#bio-click-return").toggleClass("bio-button__sprite");
        $("#bio-click-return").toggleClass("bio-button__sprite-x");
        $("#b1").toggleClass("bio-hide01");
        $("#b2").toggleClass("bio-hide02");
        $("#b3").toggleClass("bio-hide03");
        $("#b4").toggleClass("bio-hide04");
        $("#b5").toggleClass("bio-hide05");
        $("#b6").toggleClass("bio-hide06");
    });
    window.onload=function (){
        $(".off-left").removeClass("no-disp");
        $(".off-right").removeClass("no-disp");
    };
});