var fibnum=0;
var pelnum=0;
var trinum=0;

// var btn = document.createElement("BUTTON");
//   document.getElementById('topbar').appendChild(btn);

function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = fibHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = fibHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}
var fib = function (n, node) {
	var tree = fibHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}
//////////////////////////////////////////////////////////

function pelHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'pel(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = pelHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = pelHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'pel(' + n + ') = ' + (2*value);
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}
var pel = function (n, node) {
	var tree = pelHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}

/////////////////////////////////////////////////////////////

function triHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'tri(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = triHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = triHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'tri(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}
var tri = function (n, node) {
	var tree = triHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}

////////////////////////////////////////////////////////////////////

var style = document.createElement('style');
style.textContent = 
	"#fib {" +
	"	display: inline-block;" +
	"	width: 20300%;" +
	"}" +
	"" +
	".fib {" +
	"	background-color: rgba(0,0,255,0.1);" +
	"}" +
	"" +
	".fib-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".fib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}" +
	".stuff-box {" +
	"	font-family: 'helvetica neue', helvetica, sans-serif;" +
	"	letter-spacing: 1px;" +
	"	text-transform: capitalize;" +
	"	text-align: center;" +
	"	padding: 3px 10px;" +
	"	margin: 10px;" +
	"	cursor: pointer;" +
	"	border-radius: 10px;" +
	"	border-width: 2px;" +
	"	border-style: solid;" +
	"}" +
	"" +
	".red {" +
	"	border-color: rgb(255,0,0);" +
	"	background:   rgb(180,60,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
	"}" +
	"" +
	".yellow {" +
	"	border-color: rgb(255,255,0);" +
	"	background:   rgb(180,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
	"}" +
	"" +
	".blue {" +
	"	border-color: rgb(0,0,255);" +
	"	background:   rgb(60,60,180);" +
	"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
	"}" +
	"" +
	".green {" +
	"	border-color: rgb(0,255,0);" +
	"	background:   rgb(60,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
	"}";





// divMakerMaker() is a function which returns a function
// divMakerMaker() takes two arguments and creates a function which requires
// no arguments of its own, but upon invocation "remembers" the functions it
// was created with
var divMakerMaker = function(color, id) {
	return function() {
		var div = document.createElement('div');
		div.setAttribute('class', color + ' shadowed stuff-box');
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
}

var blueDiv = divMakerMaker('blue', 'fib');
var yellowDiv = divMakerMaker('yellow', 'yomama');




function fibBarNumber() {
    var x = document.getElementById("fibBarRange").value;
    document.getElementById("demo").innerHTML = x;
}
function fibBarChange(val){
		document.getElementById('fibBarStatus').innerHTML=val;
		fibnum=val;
}


function pellBarNumber() {
    var x = document.getElementById("pellBarRange").value;
    document.getElementById("demo").innerHTML = x;
    
}
function pellBarChange(val){
		document.getElementById('pellBarStatus').innerHTML=val;
		pelnum=val;
}




function triBarNumber() {
    var x = document.getElementById("triBarRange").value;
    document.getElementById("demo").innerHTML = x;
}
function triBarChange(val){
		document.getElementById('triBarStatus').innerHTML=val;
		trinum=val
}



function startFibBtn() {
	document.getElementById("fib").remove();
	
	document.querySelector('body').appendChild(style);
( function(color, id) {
	var div = document.createElement('div');
	div.setAttribute('class', color + ' shadowed stuff-box');
	div.setAttribute('id', id);
	document.body.appendChild(div);
}('red', 'fib'));

	fib(fibnum, document.querySelector('.red'))
}


function startPelBtn() {
	document.getElementById("fib").remove();
	
	document.querySelector('body').appendChild(style);
( function(color, id) {
	var div = document.createElement('div');
	div.setAttribute('class', color + ' shadowed stuff-box');
	div.setAttribute('id', id);
	document.body.appendChild(div);
}('red', 'fib'));

	pel(pelnum, document.querySelector('.red'))
}


function starttriBtn() {
	document.getElementById("fib").remove();
	
	document.querySelector('body').appendChild(style);
( function(color, id) {
	var div = document.createElement('div');
	div.setAttribute('class', color + ' shadowed stuff-box');
	div.setAttribute('id', id);
	document.body.appendChild(div);
}('red', 'fib'));

	tri(trinum, document.querySelector('.red'))
}





// blueDiv();
// yellowDiv();

// fib(10, document.querySelector('.blue'))
// fib(11, document.querySelector('.yellow'))