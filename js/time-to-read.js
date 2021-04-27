// time-to-read.js

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

String.prototype.format = function(p) {
    var s = this
    var r = function(v, i) {
        s = s.replace(new RegExp("\\{" + i + "\\}", "g"), v);
    };
    p.forEach(r);
    return s;
}

function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");
    return str.split(' ').length;
}