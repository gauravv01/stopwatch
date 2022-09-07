const start = document.getElementById('start');
const reset = document.getElementById('reset');
const display=document.getElementById('display');
display.innerText=0+'s'+''+''+00+'ms';
var set;
let milli=0; 
let seconds=0;
const Play =()=>{
	if(start.innerText=='Stop'){
		if(set)
		clearInterval(set);
		start.innerText=start.innerText=='Start'?"Stop":"Start";
		return;
	}
		
set= setInterval(()=>{
	milli++;
	if(milli==100){milli=0;
	seconds++}
display.innerText=seconds+'s'+milli+'ms'
},10)
start.innerText=start.innerText=='Start'?"Stop":"Start";


}

const Resetfunc=()=>{
	seconds=0;
	milli=0;
	if(set){
		clearInterval(set);
		display.innerText=seconds+'s'+milli+'ms';
		start.innerText='Start';
	}
}

start.addEventListener('click',Play);
reset.addEventListener('click',Resetfunc)