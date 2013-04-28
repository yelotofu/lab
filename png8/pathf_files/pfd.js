$(document).ready(function() {
    $(document).pngFix(); 
 
	/*IE6 fixes*/
	/*if ($.browser.msie && $.browser.version < 7) {*/

		/*apply a class of firstChild to elements to fake the first-child pseudo-class */
		/*$('#main > .articleWrapper:first').addClass('firstChild');*/

		/*append a non-semantic img to the bottoms of sidebar modules to add rounded corners*/
		/*$('.railBlock.highlight').append('<img src="/sites/pfd/img/chrome/blue/railHighlightB.png" width="282" height="20" alt="" style="display: block;"/>');
		$('.railBlock:not(.highlight)').append('<img src="/sites/pfd/img/chrome/blue/railB.png" width="282" height="20" alt="" style="display: block;" />');*/

	/*}*/

	/*manage the windows spawned by offsite links*/
/*	
	$('a.offsite,a.offsiteWide').click(function() {
		var link = $(this);
		var width = link.hasClass('offsiteWide') ? 1050 : 800;
		var url = link.attr('href');
		var win = window.open(url, '_blank', 'width=' + width + ',height=550,menubar,resizable,status,location,toolbar,scrollbars');
		if (win && win.focus) {
			win.focus();
			return false;
		} else {
			win = null;
			return true;
		}
	});
*/

	/*make an entire block-level element clickable*/
/*	
	$('#rail ul.sidebarNav li, ul#footerNav li.newsletter').each(function() {
		var href = $(this).contents('a').eq(0).attr("href");
		if (href) {
			$(this).click(function() {
				document.location.href = href;
			})
			.hover(
				function() {
					$(this).addClass('hover');
				},
				function() {
					$(this).removeClass('hover');
				}
			);
		}
	});
*/
});


