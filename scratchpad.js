/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var div = document.createElement('div');
    div.style.hight = "100px";
    document.body.appendChild(div);


var div = document.createElement('div');
    div.setAttribute('id', 'myDiv');
    div.style.width = "2000px";
    div.style.background = "red";
	  div.style.color = "white";
	  div.style.textAlign = "center";
    document.body.appendChild(div);



var mydiv = document.getElementById("myDiv");
var aTag = document.createElement('a');
aTag.setAttribute('href',"https://oeis.org/A000073");
aTag.innerHTML = "Tribonacci";
mydiv.appendChild(aTag);

var mydiv = document.getElementById("myDiv");
var aTag = document.createElement('a');
aTag.setAttribute('href',"https://oeis.org/A000129");
aTag.innerHTML = "Pell ";
mydiv.appendChild(aTag);

var mydiv = document.getElementById("myDiv");
var aTag = document.createElement('a');
aTag.setAttribute('href',"https://oeis.org/A000045");
aTag.innerHTML = "Fibonacci";
mydiv.appendChild(aTag);


var n=12; // varrible for the array



// making the array for the Fibonacci
var fibArray=[];
fibArray[0] = 0;
fibArray[1] = 1;
for(i=2; i<=n; i++)
{
    fibArray[i] = fibArray[i-2] + fibArray[i-1];
    console.log(fibArray[i]);
}


// creating the first div
var div = document.createElement('div');
    div.setAttribute('class', 'start');
    div.style.width = "2000px";
    div.style.background = "gray";
	div.style.color = "white";
	div.style.textAlign = "center";
document.body.appendChild(div);
div.innerHTML = fibArray[12];



// crearting the recursive div for Fibonacci
var recursiveFib=function(k,position,n){
    
	
	 
		var divTest = document.createElement('div');
        divTest.style.width = "50%";
		    divTest.style.height = "100%";
        divTest.style.background = "blue";
		    divTest.style.opacity = "0.2";
		    divTest.style.color = "white";
        divTest.style.float = position;
        divTest.innerHTML =fibArray[n];
		    divTest.style.textAlign = "center";
		div.appendChild(divTest);
	if(n!=0) {
		
			var startDiv = recursiveFib('k/2','left',(n-1));
startDiv();
	
	var startDiv = recursiveFib('k/2','right',(n-2));
startDiv();
}

}

// starting the Fibonacci
var startDiv = recursiveFib(50,'center',(n-1));
startDiv();


///////////////////////////////////////////////////////////////////////////
var p=12;
// making the array for the pell
var pellArray=[];
pellArray[0] = 0;
pellArray[1] = 1;
for(i=2; i<=p; i++)
{
    pellArray[i] = (pellArray[i-2] + pellArray[i-1])*2;
    console.log(pellArray[i]);
}

div();
// creating the first div
var divpell = document.createElement('div');
    divpell.setAttribute('class', 'start');
    divpell.style.width = "2000px";
    divpell.style.background = "gray";
	divpell.style.color = "white";
	divpell.style.textAlign = "center";
document.body.appendChild(divpell);
divpell.innerHTML = pellArray[12];



// crearting the recursive div for Fibonacci
var recursivepell=function(k,position,p){
    
	
	 
		var divTest = document.createElement('div');
        divTest.style.width = "50%";
		    divTest.style.height = "100%";
        divTest.style.background = "red";
		    divTest.style.opacity = "0.2";
		    divTest.style.color = "white";
        divTest.style.float = position;
        divTest.innerHTML =pellArray[p];
		    divTest.style.textAlign = "center";
		div.appendChild(divTest);
	if(p!=0) {
		
			var startDivpell = recursivepell('k/2','left',(p-1));
startDivpell();
	
	var startDivpell = recursivepell('k/2','right',(p-2));
startDivpell();
}

}

// starting the Fibonacci
var startDivpell = recursivepell(50,'center',(p-1));
startDivpell();


////////////////////////////////////////////////////////////////////////////////////////
var t=12;
// making the array for the Tribonacci
var TribonacciArray=[];
TribonacciArray[0] = 0;
TribonacciArray[1] = 1;
TribonacciArray[2] = 1;
for(i=3; i<=t; i++)
{
    TribonacciArray[i] = (TribonacciArray[i-2] + TribonacciArray[i-1]+TribonacciArray[i-3] );
    console.log(TribonacciArray[i]);
}

div();
// creating the first div
var divTribonacci = document.createElement('div');
    divTribonacci.setAttribute('class', 'start');
    divTribonacci.style.width = "2000px";
    divTribonacci.style.background = "gray";
	divTribonacci.style.color = "white";
	divTribonacci.style.textAlign = "center";
document.body.appendChild(divTribonacci);
divTribonacci.innerHTML = pellArray[12];



// crearting the recursive div for Tribonacci
var recursiveTribonacci=function(k,position,t){
    
	
	 
		var divTest = document.createElement('div');
        divTest.style.width = "50%";
		    divTest.style.height = "100%";
        divTest.style.background = "red";
		    divTest.style.opacity = "0.2";
		    divTest.style.color = "white";
        divTest.style.float = position;
        divTest.innerHTML =pellArray[t];
		    divTest.style.textAlign = "center";
		div.appendChild(divTest);
	if(p!=0) {
		
			var startDivTribonacci = recursiveTribonacci('k/2','left',(t-1));
startDivTribonacci();
	
	var startDivTribonacci = recursiveTribonacci('k/2','right',(p-2));
startDivTribonacci();
}

}

// starting the Tribonacci
var startDivTribonacci = recursiveTribonacci(50,'center',(p-1));
startDivTribonacci();
