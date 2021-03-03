var f = function()
{
	var eventHandler = function(event)
	{
		var divelement  = document.getElementsByClassName('main')[0];
		mainElement.textContent = 'W=' + window.innerWidth + 'H=' + window.innerHeight;
		console.log(event.cancelable);
		console.log(event.bubbles);
	};
	window.addEventListener('resize',eventHandler,false);
};
document.addEventListener('DOMContentLoaded',f,false);

function validate()
{
	var name=document.form1.name.value;
	var email=document.form1.email.value;
	var npattern="[A-Za-z\s]{3,10}";
	var epattern="[_$#.-\w]{2,10}[@]{1}[a-z]{4,7}[.]{1}[com]{3}";	
	if(!name.match(npattern))	
	{
			alert("Enter valid name");
	}
	else if(!email.match(epattern))
	{
		alert("Enter valid email");
	}
	else
	{
		alert("YOUR INFORMATION IS SAVED SUCCESSFULLY!!");
	}
}