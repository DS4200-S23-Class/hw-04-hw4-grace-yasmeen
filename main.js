// JS file for hw-04

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

//  add point to grid
function addPoint()
{
	// add new points
	// reverse the arithmetic
	 let xcord = (document.getElementById("x-option").value * 40) + 10
	 let ycord = ((9 - document.getElementById("y-option").value) * 40) + 30
	 let r = 8; 
	 // add point to graph
	 let g = document.getElementById("data");
	 // access the circles from the data id
	 g.innerHTML += "<circle "+" cx=" + xcord + " cy=" + ycord +  " r=" + r + "></circle>"
	 // call event listener function
	 listeners()
}

// Event listener for point
document.getElementById("addCircle").addEventListener("click",addPoint);

// event listener function
function listeners() 
{
	// get the id from the index
	let vals = document.getElementById("data");
	// create value children
	let vals_children = vals.children;

	// convert val children to array
	let circle_array = Array.from(vals_children); 

     //add event handler for each circle 
	for(let i = 0; i<circle_array.length; i++)
	{
		circle_array[i].addEventListener("click",circleClick);
	}

}
//call event listener
listeners()
