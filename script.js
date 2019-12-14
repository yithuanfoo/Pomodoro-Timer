var minute_default = 25;
var second_default = 0;

function onclick_play_btn(){
	document.getElementById("start").src = "start128yellow.png";

}
function reset_play_btn(){
	document.getElementById("start").src = "start128.png";

}
document.getElementById("start").onmousedown = onclick_play_btn;
document.getElementById("start").onmouseout = reset_play_btn;

function onclick_stop_btn(){
	document.getElementById("stop").src = "stop128yellow.png";

}
function reset_stop_btn(){
	document.getElementById("stop").src = "stop128.png";

}
document.getElementById("stop").onmousedown = onclick_stop_btn;
document.getElementById("stop").onmouseout = reset_stop_btn;

function onclick_reset_btn(){
	document.getElementById("reset").src = "reset128yellow.png";

}
function reset_reset_btn(){
	document.getElementById("reset").src = "reset128.png";

}
document.getElementById("reset").onmousedown = onclick_reset_btn;
document.getElementById("reset").onmouseout = reset_reset_btn;


function op1_click_btn(){
	minute_default = 25;
	
	second_default = 0;
	reset_timer();

}

document.getElementById("op_1").onmousedown = op1_click_btn;

function op2_click_btn(){
	minute_default = 5;
	
	second_default = 0;
	reset_timer();

}

document.getElementById("op_2").onmousedown = op2_click_btn;

function op3_click_btn(){
	
	minute_default = parseInt(prompt("Please enter desired minute", 25));
	if (!Number.isInteger(minute_default)) {
		alert("A value that is not an integer will not be accepted. Defaulting to 25 instead.");
			
		minute_default = 25;
		
  }
	second_default = parseInt(prompt("Please enter desired second", 0));
	if (!Number.isInteger(second_default)) {
		alert("A value that is not an integer will not be accepted. Defaulting to 0 instead.");
	
		second_default = 0;
	
	
  }
	if(second_default > 59){
		second_default = 59;
		alert("A value above 59 will not be accepted. Defaulting to 59 instead.");
		
	}
	reset_timer();

}

document.getElementById("op_3").onmousedown = op3_click_btn;

function reset_minute_second(){


	minute_time_left = minute_default; //25
	second_time_left = second_default;

}

var minute_time_left = minute_default; //25
var second_time_left = second_default;

 reset_timer();
var timer_id = 0;
function reset_timer(){
	console.log("reset");
	
	document.getElementById("sound").load();	
	document.getElementById("sound").pause();
	reset_minute_second();
	document.getElementById("time").innerHTML = format_minute_second(minute_time_left, second_time_left);
	stop_timer();
}

function format_minute_second(minute, second){
var minuteString;
	if(minute > 99){
		
	minuteString = ("000" + minute).slice(-3);
	}else{

	 minuteString = ("00" + minute).slice(-2);
	}
	var secondString = ("00" + second).slice(-2);

	return minuteString + ":" + secondString;


}

function update_timer(){
	second_time_left = second_time_left - 1;
	if (second_time_left < 0){
		second_time_left = 59; //59
		minute_time_left = minute_time_left - 1;
	
	}
	
	if (minute_time_left < 0 ){
		//ring the bell
		//alert("Time's up");
		document.getElementById("sound").play();
		
		reset_minute_second();
		stop_timer();
		return
	}
	
	
	var minuteString = ("00" + minute_time_left).slice(-2);
	var secondString = ("00" + second_time_left).slice(-2);
	
	document.getElementById("time").innerHTML = format_minute_second(minute_time_left, second_time_left);
	timer_id = window.setTimeout(update_timer, 1000);
}

function start_timer(){
	console.log("start");
	
	if (timer_id == 0){
	
	
	
		timer_id = window.setTimeout(update_timer, 1000);
	}
}
function stop_timer(){
	console.log("stop");
	window.clearTimeout(timer_id);
	timer_id = 0;
	
}





