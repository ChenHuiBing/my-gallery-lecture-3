(function() {
	'use strict'

	// onload function will fire when the document is loaded completely
	window.onload = function() {
		var button = document.getElementById('show');
		var closeButton = document.getElementById('close-button');
		var loadContent = document.getElementById('load-content');

		button.addEventListener('click', A, false);
		closeButton.addEventListener('click', B, false);
		loadContent.addEventListener('click', C, false);
	}
	var is_click = false;
	var is_content = false;

	// function A，B and C is called when you click corresponding element.You should rename these functions to make them more meaningful
	function A() {
		//...
		if (is_click == false) {
			document.getElementById('box').style.display = "block";
			document.getElementById('show').innerHTML = "hide";
			if (is_content) {
				 document.getElementById('box').removeChild(document.getElementById('new_span'));
				 is_content = false;
			}
			is_click = true;
		} else {
			document.getElementById('box').style.display = "none";
			document.getElementById('show').innerHTML = "show";
			is_click = false;
		}
	}

	function B() {
		//...
		A();
	}

	function C() {
		//...
		if (is_content == false) {
			var newspan = document.createElement('span');
			newspan.id = "new_span";
		    var node=document.createTextNode("You can not see me~");
		    newspan.appendChild(node);
		    var content = document.getElementById('box');
		    content.appendChild(newspan);
		    is_content = true;
		}
	}

})();
