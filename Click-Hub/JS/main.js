let copy = document.getElementById("copy-year");
let clock = new Date();




function copyright(){
	copy.innerHTML= clock.getFullYear();
	
}
copyright();

 /*Clock with running seconds*/
function wallClock(){
	let wall = document.getElementById("clock");
	let watch = new Date();
	let hrs = watch.getHours();
	let secs = watch.getSeconds();
	let mins = watch.getMinutes();
	let mills = watch.getMilliseconds();
	let mils  = mills/10;
	let centi = mils.toFixed();
	
	cent =(centi<10)?`0${centi}`:`${centi}`;
	hr =(hrs<10)?`0${hrs}`:`${hrs}`;
	min =(mins<10)?`0${mins}`:`${mins}`;
	sec =(secs<10)?`0${secs}`:`${secs}`;


	
	wall.innerHTML = `${hr}:${min}:${sec}:${cent}`;
	setInterval(wallClock, 10);
}
setInterval(wallClock, 10);


