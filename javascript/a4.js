window.addEventListener("load",function(event){

function foo(){
var currentTime = new Date();
var i;
var timeNow = (currentTime.getHours()%12)+":"+currentTime.getMinutes();
	
	var temp = document.getElementsByTagName("td");
	for(i=0;i<temp.length;i++)
	{
		if(temp[i].innerHTML == timeNow)
		{
			temp[i].style.backgroundColor = 'red';

		}
		else
		{
		    temp[i].style.backgroundColor = 'white';
		}
	
		
	}
	
}

function start(){
timerId = setInterval(foo,60000);

}

foo();
start();
})