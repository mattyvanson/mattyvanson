
var input = document.getElementById("input");
var addBtn = document.getElementById("add-btn");
var display = document.getElementById("options-list");
var resultDisplay = document.getElementById("random-output");


addBtn.addEventListener("click", convergents);


function convergents() {
	
	
	var inputArr = [];
    inputArr.push(input.value);
	const array2 = inputArr[0].split(',');
	const size2 = array2.length;
	var j;
	var text2 = "";
	var text3 = "2";
	
//	console.log("convergents check");
	
	for(j=1; j<= size2; j++)
	{
//		console.log(array2.slice(0, j));
		var fraction = Complex(continuedFraction(array2.slice(0, j)));
//		console.log("TEST",fraction,fraction.re,fraction.im);
		if(fraction.im != 0)
		{
		text2 += fraction.re + "+" + fraction.im + "i"+ "<br>" ;
		}
		else
		{
		text2 += fraction.re+ "<br>" ;
		}
	}
//	console.log(text2);
	
	document.getElementById("demo").innerHTML = text2;
	
	
}

function continuedFraction(array1) {
	
	const array = array1.reverse();
	const size = array.length;
//	console.log(array,size);
    var fraction =Complex(array[0]);
	var i;
	
//	console.log(Complex("4+3i"));
//	console.log("array element",array[0],Complex(array[0]));
//	console.log("current not quite convergent",fraction);
//	console.log("testtest",i);
	
	if(size>1){
//		console.log("TEST");
		for(i = 1; i < size; i++)
		{ 
//			console.log("array element",array[i],Complex(array[i]));
			fraction = Complex(array[i]).mul(fraction).add(-1).div(fraction);
//			console.log("current convergent",fraction);
		}
	}
//	console.log(fraction);
	
	return fraction;
    	
}

//const initialInputValue = "1,2+i,3-2i,6";
//window.onload = function() {
    // Set the input value to the initial value
//    document.getElementById("input").value = initialInputValue;

    // Clear any printed data in the demo section
    //document.getElementById("demo").innerHTML = ""; // Reset to empty or set to a default message
//};















function addAnddisplay() {

    inputArr.push(input.value);

    display.textContent = inputArr;   
}
function continuedFraction2() {
	
    inputArr.push(input.value);
	const array1 = inputArr[0].split(',');
	const array = array1.reverse();
	const size = array.length;
	console.log(array,size);
    var fraction =Complex(array[0]);
	var i;
	
	console.log(Complex("4+3i"));
	console.log("array element",array[0],Complex(array[0]));
	console.log("current not quite convergent",fraction);

    for(i = 1; i < size; i++)
    { 
		console.log("array element",array[i],Complex(array[i]));
        fraction = Complex(array[i]).mul(fraction).add(-1).div(fraction);
		console.log("current convergent",fraction);
    }
	console.log(fraction);
	
	resultDisplay.textContent = fraction ;
    	
}