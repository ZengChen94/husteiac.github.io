$(document).ready(function(){
	repeat();	 
});	
var repeat = function(){
		$("#change1").fadeOut(2000,function(){$("#change2").fadeIn(2000,function(){
			$("#change2").fadeOut(2000,function(){$("#change3").fadeIn(2000,function(){
				$("#change3").fadeOut(2000,function(){$("#change1").fadeIn(2000,repeat);});
			});});
		});});
		}
	