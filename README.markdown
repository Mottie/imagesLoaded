# Features ([Demo](http://mottie.github.com/imagesLoaded/))

* This plugin runs a callback when targeted images have completed loading.
  * It uses the "complete" flag and looks for an image height greater than zero to signal that the image had completed loading.
  * Image height will already be set if set inline or in the css: `<img src="myimage.jpg" width="100" height="100">`.
  * Image height will be greater than zero if the image has alt text `<img src="myimage.jpg" alt="this makes the image height greater than zero">`.
  * Image load errors are ignored
  * In IE, this script uses the "fileSize" greater than zero instead of the complete flag as IE will not change the flag on load errors.
* I wrote this plugin before I knew about David DeSandro's [imagesloaded](https://github.com/desandro/imagesloaded) script.
  * His plugin uses the image load event to determine if the image has loaded.
  * I haven't done extensive testing on my plugin, so it if fails for some reason, try his plugin instead.

# Setup

Add the script tags to the `<head>` of your document

```html
<!-- jQuery (required) -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>

<!-- imagesLoaded plugin -->
<script src="js/jquery.imagesloaded.js"></script>
<script>
$(function(){
  $('.wrapper').imagesLoaded(function(){
    alert('All images inside the wrapper have completed loading');
  });
});
</script>
```

Example HTML

```html
<div class="wrapper">
  <img src="image1.jpg">
  <img src="image2.jpg">
</div>
```

# Licensing

* [MIT License](http://www.opensource.org/licenses/mit-license.php).

# Change Log

## Version 1.0 beta (1/13/2012)

* Initial post.