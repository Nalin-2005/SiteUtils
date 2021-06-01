# JavaScript
## contact_api.js
**Purpose**: Create a simple contact form without building a backend for it.   
**Including**: ```<script src="https://cdn.nalinangrish.me/js/contact_api.js"></script>```   
**Using**: 
1. Create a form in your HTML and ensure that it contains three inputs with the names `name`, `email` and `message` respectively.
2. Fork [this](http://github.com/Nalin-2005/NAPI) repository and edit the `data/contact_api.json` file by adding a JSON element with the key as a unique name related to your project, and the value as an email address to which you want to receive the form responses.
3. After you have added the contact data, submit a pull request.
4. Create another script element and add a function inside it as:
```javascript
function submitForm(){
	// Show a loader
	contact_form_send("<appid>", "<form_selector>").then((resp)=>{
		// Hide the loader and do something with the response.
	}).catch((error)=>{
		// Hide the loader and do something with the error.
	})
}
```
Here, replace `<appid>` with the key of the element you added to `data/contact_api.json`, and `<form_selector>` with a selector of your form. Note that both of these should be string values.    
5. Create a button in your form and set its `onclick` attribute to trigger the `submitForm` function.     
**Documentation**: https://cdn.nalinangrish.me/docs/contact_api.js.html   





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