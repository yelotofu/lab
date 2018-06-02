/**
 * This script contains IE fixes for the CSS Drop Down menu.
 * @copyright (C) 2006 Lemon Foundation.
 */
function sfHover() {
	var e = document.getElementById("nav");
	if (e) {
		var sfEls = e.getElementsByTagName("LI");
		var length = sfEls.length;
		var over = sfHoverOver;
		var out = sfHoverOut;
		for (var i=0; i<length; i++) {
			sfEls[i].onmouseover=over;
			sfEls[i].onmouseout=out;
		}
	}
}
function sfHoverOver() {
	this.className+=" sfhover";	
}
function sfHoverOut() {
	this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
}
if (window.attachEvent) window.attachEvent("onload", sfHover);