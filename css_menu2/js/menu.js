/**
 * This script contains IE6 fixes for the CSS Drop Down menu.
 * Code optimisation and Objectification by Ca Phun Ung
 *
 * @copyright (C) 2006 Lemon Foundation <http://www.lemonfoundation.com>
 * @author Original author Unknown
 * @author Ca Phun Ung
 */
 
/* PRELOAD IMAGES */
function simplePreload() { 
  var args = simplePreload.arguments;
  document.imageArray = new Array(args.length);
  for(var i=0; i<args.length; i++) {
    document.imageArray[i] = new Image;
    document.imageArray[i].src = args[i];
  }
}
simplePreload(
	 '/images/menu/menu-bg.gif'
	,'/images/menu/tab_end_on.gif'
);

var LemonConfig = {
	 id 		: "menu"
	,hover 		: "lemHover"
	,firstChild : "lemFirstChild"	
	,lastChild 	: "lemLastChild"
}

var LemonCssJsMenu = {
	register : function(id)
	{
		if(document.all && document.getElementById){
			var oldonload=window.onload;
			var parent=this;
			if (typeof window.onload != 'function') {
				window.onload=function(){ parent.init(id); }
			} else {
				window.onload=function(){
					if(oldonload){ oldonload(); }
					parent.init(id);									
				}
			}
		}
	}
	
	,init : function(id) {
		var root=document.getElementById(id);
		if (root){
			this.parseChildNodes(root);
		}
	}

	,parseChildNodes : function(parent) {	
		var length=parent.childNodes.length;
		for (var i=0; i<length; i++) {
			var node = parent.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=lemonMouseOver;
				node.onmouseout=lemonMouseOut;
				// insert some needed selectors
				if (i==0) {
					node.className+=' '+LemonConfig.firstChild;
				} else if (i==length-1) {
					node.className+=' '+LemonConfig.lastChild;
				}				
			}
			this.parseChildNodes(node);
		}		
	}
}

function lemonMouseOver() {
	this.className+=' '+LemonConfig.hover;
}

function lemonMouseOut() {
	this.className=this.className.replace(' '+LemonConfig.hover, '');
}	

// Register dropdown menu
LemonCssJsMenu.register(LemonConfig.id);