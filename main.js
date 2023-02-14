// JS file for hw-04

// function for changing border of shape and printing point
function circleClick()
{
	let vals = document.getElementsByClassName("data");
	for(let i = 0; i< vals.length; i++)
	{
		// if clicked
		if(vals[i].checked){
			console.log(vals[i].value)
			// add border color
			//add border
			document.getElementById("data").style.border.toggle = "green"; 

			// update text
			let newText = "Last point clicked: " + "(" + vals[i].value + ")";
			document.getElementById("selected-point").innerHTML = newText;
		}
	}
}

// add event handler for circle click function
document.getElementsByClassName(vals[i].addEventListener("click", circleClick))


// add point to grid
function addPoint()
{


}

document.getElementById("addCircle").addEventListener("click",addPoint())