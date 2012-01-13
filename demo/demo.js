$(function(){
	var imgs, t, i, len,
		txt = 'Load More Images',
		indx = 0,
		blk = $('#block'),
		btn = $('#load');
	// load image list
	$.getJSON( 'demo/images.json', function(data){
		imgs = data.images;
		len = imgs.length - 1;
		// load more
		btn.find('button')
		.prop('disabled', false) // needed for Firefox and non-shift reload
		.click(function(){
			t = '';
			for (i=0; i<5; i++){
				if (indx > len) { continue; }
				t += '<img class="loading" src="http://mottie.github.com/todaysImage/demo/images/' + imgs[indx++] + '" alt="no image">';
			}
			if (indx > len) {
				txt = 'All Loaded';
				$(this).prop('disabled', true);
			}
			$(this).text(txt);
			blk
				// add next group of images
				.append(t)
				// imagesLoaded plugin
				.find('img.loading').imagesLoaded(function(){
					// imagesLoaded callback
					// remove loading class and update span with total #
					blk.find('img.loading').removeClass('loading');
					btn.find('div').html( 'Total images loaded: <strong>' + indx + '</strong>' );
				});
		});
	});
});