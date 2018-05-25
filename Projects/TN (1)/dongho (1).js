$(document).ready(function(){
    $("#hide").click(function(){
        $("#div1").hide(2000);
		$("#div2").hide(3000);
    });
    $("#show").click(function(){
		$("#div1").show(2000);
        $("#div2").show(3000);
    });
	$("#hide").click(function(){
		$("#video").fadeIn(10);
	});
	$("#show").click(function(){
		$("#video").fadeOut(10);
	});
	
});
