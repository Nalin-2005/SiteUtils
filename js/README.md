# JavaScript
## shareutils.js
**Purpose**: Create buttons at the bottom for sharing the current URL (intended to be used for a blog post) with a message onto a social media platform.   
**Including**: ```<script src="https://cdn.nalinangrish.me/js/shareutils.js"></script>```   
**Using**: In a JavaScript file, or in a `<script>` tag in an HTML file, paste the following code:
```javascript
create_share_buttons(
	"https://www.example.com/sitemap.xml", 		// This should be a link to the sitemap of your site. 
	//	This is used to prevent the buttons from appearing on pages which were not found and raised 404 errors. 
	// 	If you want to show the buttons on the current page, then the URL of this page should also be present on the sitemap.
	"Check out this awesome blog post!"			// This should be a message that needs to be included while posting. 
	//  If you do not want to include any custom message, you should enter an empty string.
	)
// If you do not want to show the buttons on a particular page, simply do not paste the above code there, or exclude the page from the sitemap
```
**Documentation**: https://cdn.nalinangrish.me/docs/shareutils.js.html   





## time-to-read.js
**Purpose**: Get an approximation about the time taken to read an article. Might be helpful if you want the viewers to know about how much time they would need to read the article completely.   
**Including**: ```<script src="https://cdn.nalinangrish.me/js/time-to-read.js"></script>```   
**Using**: In a JavaScript file, or in a `<script>` tag in an HTML file, paste the following code:
```javascript
calculate_ttr({
    selector: "#post",		// The selector for the HTML element that contains the article content.
    dest: document.getElementById("summary"),		// [Optional] an HTML element whose textContent should be set to the representation about the time to read.
    repr_format: "{0} Minute {1} Second Read",		// [Optional] the format in which to summarize the time required. 
	//  In the format, "{0}" would be replaced by the number of minutes and "{1}" would be replaced by the number of seconds, so enter the format carefully. Both, minutes's or seconds's placeholder can be removed. Defaults to "{0} Minute Read."
    wpm: 200	// [Optional] Words per minute. This value defines how fast a person reads, and thus, this gives us the prediction.
	// According to many surveys, the average reading speed of an adult ranges from 200-300 Words Per Minute, so, the default value is set to 250.
	});
// This function returns a summary as a string variable too, so if you cannot set the "dest" parameter, you can use the value returned by the function instead.
```
**Documentation**: https://cdn.nalinangrish.me/docs/shareutils.js.html