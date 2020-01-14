var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units
var show_day =  new Date(target_date);
labes =  document.getElementById('countdown');
show_message = document.getElementById('Finish');
// show_message.style.visibility ='hidden';
var countdown = document.getElementById("tiles"); // get tag element

getCountdown();
 
interval =  setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
  var dt = new Date();
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  console.log(seconds_left);
  // console.log(target_date);
  // console.log(dt);
  // console.log(show_day);

  if(seconds_left < 0 ) { 
   console.log("Happy new year");
   console.log(labes);
   console.log(show_message);
    show_message.style.transition  = "opacity 0.33s linear";
    show_message.style.visibility = 'visible';
    show_message.innerText = "Happy New Year 2020";
    
   clearInterval(interval);
    
    
  window.labes.style.display = 'none';
  }
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

