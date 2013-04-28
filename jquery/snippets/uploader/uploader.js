/*
 * jQuery uploader
 *
 * Copyright (c) 2009 Ca-Phun Ung <caphun at yelotofu dot com>
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://yelotofu.com/labs/jquery/snippets/uploader/
 *
 * File upload using an iframe with an indeterminate progress bar.
 */

(function($) {
	
	$.fn.uploader = function(options) {
		
		var options = $.extend({
			'successLabel': 'OK',
			'success': null,
			'fail': null,
			'uploadScript': 'backend.php'
		}, options);
		
		return $.each(this, function() {
			var self = $(this),
				form = self.wrap('<form enctype="multipart/form-data" method="post" action="'+ options.uploadScript +'" target="iframeUploadFile"></form>').parent();
			
			self
				.bind('change', function() {
					form.find('.spinner').show();
					form.submit();
					return false;
				})
				.closest('form')
					.append('<img src="indicator.gif" width="16" height="16" class="spinner" style="display:none" />')
					.append('<iframe name="iframeUploadFile" src="'+ options.uploadScript +'" width="400" height="100" style="display:none"></iframe>')
					.find('iframe')
						.bind('load', function() {
							var json = eval($(this)[0].contentWindow.document.body.innerHTML);
							if (json && json.length > 0) {
								if (json[0].status == options.successLabel) {

									form.hide();
									$('<span style="display:none"><a target="_blank" class="file"></a> <a href="#" class="remove"><img src="trash_on.gif" alt="remove" width="10" height="11" border="0" /></a> <input type="hidden" /></span>')
										.insertAfter(form)
										.find('a.remove')
											.bind('click', function() {
												$(this).parent().remove();
												$.post('remove.php', json[0].response, function(data) {
													// TODO: handle success or failure notification
													//console.log(data);
												});
												form.show();
												return false;
											})
										.end()
										.find('a.file')
											.attr('href', '.'+json[0].response.url)
											.html(json[0].response.filename)
										.end()
										.find('input:hidden')
											.attr('name', self[0].name)
											.attr('value', json[0].response.filename)
										.end()
										.show();

								} else if ( json[0].reponse ) {
									$('<span class="error">'+ json[0].response +'</span><br />').insertBefore(form);
								}
							}
							form.find('.spinner').hide().end().find('input:file').val('');
						});
		});
	}
	
	
})(jQuery);