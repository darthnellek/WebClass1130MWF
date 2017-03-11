/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

document.title="This is a New Title from JavaScript!!"


var style = document.createElement('style');
style.textContent =
  ".jblue {"+
  "text-align: center;"+
  "}";

var makeDiv = function(color, id, text) {
	return function() {
		var div = document.createElement('div');
    div.style.width = "100%";
		
		div.setAttribute('class', color);
		div.setAttribute('id', id);
		div.style.height = "100%";
    div.style.background = "blue";
		div.style.opacity = "0.2";
		div.style.color = "white";
    div.innerHTML = text;
		div.style.textAlign = "center";
		document.body.appendChild(div);
	}
}

var blueDiv = makeDiv('blue', 'fib', 'this a test');
blueDiv();
