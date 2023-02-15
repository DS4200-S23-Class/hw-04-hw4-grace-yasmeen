// JS file for hw-04


let vals = document.getElementById("data");
let vals_children = vals.children;

// convert val children to array
let circle_array = Array.from(vals_children); 


// function for changing border of shape and printing point
function circleClick()
{

		// add border
		this.classList.toggle("borderitem");

		//update text
		let xcord = (this.getAttribute("cx") - 10) / 40
		let ycord = 9 - ((this.getAttribute("cy") - 30) / 40)
		let newText = "Last point clicked: (" + xcord +","+ ycord + ")";	
		document.getElementById("selected-point").innerHTML = newText;

} //end of function

//  add event handler for each circle 
for(let i = 0; i<circle_array.length; i++)
{
	circle_array[i].addEventListener("click",circleClick);
}


//  add point to grid
function addPoint()
{
	// add new points
	 let xcord = (document.getElementById("x-option").value * 40) + 10
	 let ycord = ((9 - document.getElementById("y-option").value) * 40) + 30
	 let r = 8; 
	 // add point to graph
	 let g = document.getElementById("data");
	 g.innerHTML += "<circle "+" cx=" + xcord + " cy=" + ycord +  " r=" + r + "></circle>"
}


document.getElementById("addCircle").addEventListener("click",addPoint);



