/*
 * jQuery fadeToggle
 *
 * Copyright (c) 2008 Ca-Phun Ung <caphun at yelotofu dot com>
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://yelotofu.com/labs/jquery/snippets/fadetoggle/
 */
 
(function($){

	$.fn.fadeToggle = function(s, fn){
		return (this.is(":visible")) ? this.fadeOut(s, fn) : this.fadeIn(s, fn);
	};
	
})(jQuery);