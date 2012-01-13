/*
 imagesLoaded v1.0 beta
 http://github.com/Mottie/imagesLoaded
 by Rob Garrison (aka Mottie)
 MIT license

 Check if all images are loaded
 - Callback occurs when all images are loaded
 - image load errors are IGNORED (complete property will be true)
 - Use:
   $('.wrap img').imagesLoaded(function(){
     alert('all images loaded');
   });
*/
;(function($){
	$.fn.extend({
		imagesLoaded: function( callback, cycling ) {
			var i, ic,
				c = true, // complete flag
				$this = $(this),
				t = $this.find('img').andSelf(),
				l = t.length,
				img = []; // array of images that didn't complete
			for ( i = 0; i < l; i++ ) {
				if (t[i].tagName === "IMG") {
					// IE: fileSize property = -1 before image has loaded & if image load error, so if false is returned
					// 10x, then just assume it's an error & call it complete - it's what Firefox & webkit does
					ic = ('fileSize' in t[i] && t[i].fileSize < 0 && t[i].count > 10) ? true : t[i].complete;
					// complete flag, checks previous flag status, complete flag & image height
					// image height may need to be > 20 (or whatever the line-height is) because the alt text is included
					c = (c && ic && t[i].height !== 0); // complete flag
					// save non-complete images for next iteration
					if (ic === false) {
						img.push(t[i]);
						// iteration count for IE
						t[i].count = (t[i].count || 0) + 1;
					}
				}
			}
			if (c) {
				// all complete, run the callback
				if (typeof callback === "function") { callback(); }
			} else {
				// some images not loaded, rinse & repeat
				setTimeout(function(){
					$(img).imagesLoaded( callback, true );
				}, 200);
			}
			// maintain chainability
			if (!cycling) { return $this; }
		}
	});
})(jQuery);