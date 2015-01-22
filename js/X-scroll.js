$(document).ready(function(){
			var w=window.screen.width;
			var w1=-w;
			var w2=-2*w;
			var w3=-3*w;
			var cont=$("#content");

			var a=$("#a");
			var b=$("#b");
			var c=$("#c");
			var d=$("#d");

			cont.offset({top:0.14*w});
			
			a.offset({left:0});
			
			b.offset({left:w});
			
			c.offset({"left":2*w});
			
			d.offset({"left":3*w});


			$("#a").animate({left:'0px'},0,'swing');
			$("#b").animate({left:''+w+'+px'},0,'swing');
			$("#c").animate({left:''+2*w+'+px'},0,'swing');
			$("#d").animate({left:''+3*w+'+px'},0,'swing');
			$("#btnA").removeAttr("class","");
			$("#btnB").removeAttr("class","");
			$("#btnC").removeAttr("class","");
			$("#btnD").removeAttr("class","");
			$("#btnA").attr("class","active");


			a.show();
			b.hide();
			c.hide();
			d.hide();

			$("#btnA").click(function(){
				$("#a").animate({left:'0px'},600,'swing');
				$("#b").animate({left:''+w+'+px'},600,'swing');
				$("#c").animate({left:''+2*w+'+px'},600,'swing');
				$("#d").animate({left:''+3*w+'+px'},600,'swing');
				$("#btnA").removeAttr("class","");
				$("#btnB").removeAttr("class","");
				$("#btnC").removeAttr("class","");
				$("#btnD").removeAttr("class","");
				$(this).attr("class","active");
				a.show();
				b.hide();
				c.hide();
				d.hide();
			});
			$("#btnB").click(function(){
				$("#b").animate({left:'0px'},600,'swing');
				$("#a").animate({left:''+w1+'+px'},600,'swing');
				
				$("#c").animate({left:''+w+'+px'},600,'swing');
				$("#d").animate({left:''+2*w+'+px'},600,'swing');
				$("#btnA").removeAttr("class","");
				$("#btnB").removeAttr("class","");
				$("#btnC").removeAttr("class","");
				$("#btnD").removeAttr("class","");
				$(this).attr("class","active");
				a.hide();
				b.show();
				c.hide();
				d.hide();
			});
			$("#btnC").click(function(){$("#c").animate({left:'0px'},600,'swing');
				$("#a").animate({left:''+w2+'+px'},600,'swing');
				$("#b").animate({left:''+w1+'+px'},600,'swing');
				
				$("#d").animate({left:''+w+'+px'},600,'swing');
				$("#btnA").removeAttr("class","");
				$("#btnB").removeAttr("class","");
				$("#btnC").removeAttr("class","");
				$("#btnD").removeAttr("class","");
				$(this).attr("class","active");
				a.hide();
				b.hide();
				c.show();
				d.hide();
			});
			$("#btnD").click(function(){
				$("#a").animate({left:''+w3+'+px'},600,'swing');
				$("#b").animate({left:''+w2+'+px'},600,'swing');
				$("#c").animate({left:''+w1+'+px'},600,'swing');
				$("#d").animate({left:'0px'},600,'swing');
				$("#btnA").removeAttr("class","");
				$("#btnB").removeAttr("class","");
				$("#btnC").removeAttr("class","");
				$("#btnD").removeAttr("class","");
				$(this).attr("class","active");
				a.hide();
				b.hide();
				c.hide();
				d.show();
			});
		});