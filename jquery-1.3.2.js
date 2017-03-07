(function($){	
	$.fn.exchange = function(options) {  
		
		var defaults = {
		};
		var options = $.extend(defaults, options);
		(readCookie('css')) ? exchangeCSS(readCookie('css')) : "";
		
		
		
		function createCookie(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		}
		
			
	
		
	};
})(jQuery);
	
