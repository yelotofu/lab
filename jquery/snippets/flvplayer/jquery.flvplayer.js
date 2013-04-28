/*
 * jQuery flvPlayer
 *
 * Copyright (c) 2009 Ca-Phun Ung <caphun at yelotofu dot com>
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://yelotofu.com/labs/jquery/snippets/flvplayer/
 *
 * Slimmed down FLV player using external interface to delegate UI controls to HTML
 *
 */

(function($){

	$.fn.flvPlayer = function(options){
		options = $.extend({}, options);
		return this.each(function(){
			if ($(this).is('a')) {
				options.videoUrl = this.href;
				$(this).css('display', 'none').wrap('<div class="ui-flvplayer '+ this.className +' ui-widget ui-widget-content" />');
				new $.flvPlayer($(this).parent(), options);
			} else {
				new $.flvPlayer(this, options);
			}
		});
	};
	
	var defaults = {
		width: 384,
		height: 198,
		player: '../flvplayer.swf',
		buffer: 30,
		flashVersion: "8.0.0"
	}
	
	$.flvPlayer = function(elem, o){
		var self = this;
		self.options = $.extend({}, defaults, o || {});
		self.element = $(elem);
		
		// get/set id
		if (self.element.attr('id') == '') self.element.attr('id', 'flvplayer');
		self.id = self.element[0].id;
		
		var movieId = self.id + '-movie';
		var url = self.options.player +'?buffer='+ self.options.buffer +'&videoUrl='+ self.options.videoUrl;
		
		// append flash movie object (must have SWFObject installed)
		// TODO : remove SWFObject dependency
		if (typeof swfobject == 'object') {
			self.element.append('<div id="'+movieId+'" />');
			swfobject.embedSWF(url, movieId, this.options.width, this.options.height, this.options.flashVersion, false, {}, {menu: false}, {});
		}
		
		self.element
			/*.append($.browser.msie && $.browser.version <= 7 ? '<embed class="movie" quality="high" menu="false" wmode="transparent"></embed>' : '<object class="movie"><param name="menu" value="false"/><param name="wmode" value="transparent"/></object>')
				.find('.movie')
					.attr({
						id: movieId,
						name: movieId,
						type: 'application/x-shockwave-flash',
						src: url,
						data: url,
						width: self.options.width,
						height: self.options.height
					})
					.css('display', 'block')
				.end()
			*/
			.append('<div class="ui-flvplayer-controls"><div class="ui-flvplayer-buttons ui-buttonset"></div></div>')
				.find('.ui-flvplayer-buttons')
					.append('<button type="button" class="ui-flvplayer-rewind ui-button ui-button-seek-prev">Rewind</button>')
						.find('.ui-flvplayer-rewind')
							.bind('click',function(e){
								$('#'+movieId, self.element)[0].rewind();
							})
						.end()
					.append('<button type="button" class="ui-flvplayer-pause ui-button ui-button-pause">Pause</button>')
						.find('.ui-flvplayer-pause')
							.bind('click',function(e){
								paused = $('#'+movieId, self.element)[0].pause();
								$(this).css('backgroundPosition', (paused)?'0 -17px':'0 0');
							})
						.end()
					.append('<button type="button" class="ui-flvplayer-volume ui-button ui-button-volume-on">Mute</button>')
						.find('.ui-flvplayer-volume')
							.bind('click',function(e){
								muted = $('#'+movieId, self.element)[0].mute();
								$(this).toggleClass('ui-button-volume-off', 'ui-button-volume-on');
							})
						.end()
					.append('<button type="button" class="ui-flvplayer-fastforward ui-button ui-button-seek-next">Fast Forward</button>')
						.find('.ui-flvplayer-fastforward')
							.bind('click',function(e){
								$('#'+movieId, self.element)[0].ff();
							})
						.end()
					.buttonset()
					.buttonset('option','orientation','i')
				.end();
				
	}
	
})(jQuery);