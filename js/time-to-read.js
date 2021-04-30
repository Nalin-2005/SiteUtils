// time-to-read.js



/**
 * @typedef {Object} TTR_Input The type of object to send as input to the function for calculating the Time-To-Read of the article.
 * @property {string} selector - [Required] The selector of the element that contains the text of the article. This is important to exclude text present on the footer, navbar, etc.
 * @property {number} wpm - [Optional] The words-per-minute to estimate the time taken to read. Defaults to 250.
 * @property {string} repr_format - [Optional] The format in which to present the summary. <tt>{0}</tt> in the text would be replaced with the minutes taken, and <tt>{1}</tt> with the seconds. Defaults to "{0} Minute Read.".
 * @property {HTMLElement|null} dest - [Optional] The destination element which should contain the summary. Defaults to null.
 */


/**
 * A function to calculate the Time-To-Read of an article.
 * @param {TTR_Input} args an Object that contains the required parameters as defined in <tt>TTR_Input</tt>. 
 * @returns {string} The summarized form of the amount of time taken.
 */
function calculate_ttr({
    selector,
    wpm = 250,
    repr_format = "{0} Minute Read.",
    dest = null
}) {
    var wps = wpm / 60;
    var contentbox = document.querySelector(selector);
    var content = contentbox.innerText;
    var words = countWords(content);
    var seconds_taken = Math.floor(words / wps);
    var minutes_taken = Math.floor(seconds_taken / 60);
    var seconds_left = seconds_taken - (minutes_taken * 60);

    var summary = repr_format.format([minutes_taken, seconds_left]);
    if (dest != null) {
        dest.textContent = summary
    }
    return summary;
}


/**
 * A function to format the given list into the string by replacing <tt>{i}</tt> in the string with the <tt>i</tt>'th element of <tt>p</tt>.
 * @param {list} p The list that contains the values to format into the string.
 * @returns {string} the formatted string.
 */
String.prototype.format = function(p) {
    var s = this
    var r = function(v, i) {
        s = s.replace(new RegExp("\\{" + i + "\\}", "g"), v);
    };
    p.forEach(r);
    return s;
}


/**
 * A function to count the nnumber of words in the given string.
 * @param {string} str the string to count the words from.
 * @returns {number} the number of words
 */
function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");
    return str.split(' ').length;
}