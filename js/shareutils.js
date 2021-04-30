// shareutils.js


/**
 * An object that contains the svg data for the various logos of the social platforms.
 */
const svgs = {
    "twitter": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="share" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>',
    "facebook": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="share" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>',
    "whatsapp": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="share" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>',
    "pinterest": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="share" d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
    "copy": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="share" d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>'
}


/**
 * The main function of the script to create buttons for sharing the current webpage's URL o someone using a social media platform. 
 * @param {string} sitemap_url The URL of the sitemap of the current site. This is used to prevent the buttons from appearing on pages which were not found and raised 404 errors. 
 * @param {string} message A message that needs to be included while posting it to a platform. If you do not want to include any custom message, you should enter an empty string.
 */
function create_share_buttons(sitemap_url, message) {
    message = encodeURIComponent(message);
    var Facebook = genFacebook();
    var WhatsApp = genWhatsapp(message);
    var Pinterest = genPinterest(message);
    var Twitter = genTwitter(message);
    var Copy = genCopyElem();

    window.fetch(sitemap_url).then(function(response) {
        response.text().then(function(content) {
            if (content.toLowerCase().includes(document.location.href)) {
                if (document.location.pathname != "/" && response.ok) {
                    var style = document.createElement("link");
                    style.href = "https://cdn.nalinangrish.me/css/shareutils.css";
                    style.rel = "stylesheet";


                    var main = document.querySelector("body");
                    var shareElem = document.createElement("div");
                    shareElem.className = "shareElem";
                    main.appendChild(style);
                    main.appendChild(shareElem);

                    shareElem.appendChild(Facebook);
                    shareElem.appendChild(WhatsApp);
                    shareElem.appendChild(Pinterest);
                    shareElem.appendChild(Twitter);
                    shareElem.appendChild(Copy);
                }
            }
        });
    });
}


/**
 * A function to create the share button for Facebook.
 * @returns {HTMLButtonElement} A styled button which works as a link.
 */
function genFacebook() {
    var elem = genBase();
    elem.style.backgroundColor = "#4267b2";
    elem.innerHTML = svgs["facebook"] + genTooltip("Share using FaceBook!");
    elem.onclick = function() {
        var url = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(document.location.href);
        var temp = document.createElement("a");
        temp.href = url;
        temp.target = "_blank";
        temp.click();
    }
    return elem;
}

/**
 * A function to create the share button for WhatsApp.
 * @param {string} message A message that needs to be included while posting it to WhatsApp.
 * @returns {HTMLButtonElement} A styled button which works as a link.
 */
function genWhatsapp(message) {
    var elem = genBase();
    elem.style.backgroundColor = "#1ebea5";
    elem.innerHTML = svgs["whatsapp"] + genTooltip("Share using WhatsApp!");
    elem.onclick = function() {
        var url = "http://api.whatsapp.com/send?text=" + message + encodeURIComponent("\n " + document.location.href)
        var temp = document.createElement("a");
        temp.href = url;
        temp.target = "_blank";
        temp.click();
    }
    return elem;
}


/**
 * A function to create the pin button for Pinterest.
 * @param {string} message A message that needs to be included while posting it to Pinterest.
 * @returns {HTMLButtonElement} A styled button which works as a link.
 */
function genPinterest(message) {
    var elem = genBase();
    elem.style.backgroundColor = "#e60023";
    elem.innerHTML = svgs["pinterest"] + genTooltip("Pin it!");
    elem.onclick = function() {
        var url = "http://pinterest.com/pin/create/link/?url=" + encodeURIComponent(document.location.href) +
            "&description=" + message;
        var temp = document.createElement("a");
        temp.href = url;
        temp.target = "_blank";
        temp.click();
    }
    return elem;
}


/**
 * A function to create the tweet button for Twitter.
 * @param {string} message A message that needs to be included while posting it to Twitter.
 * @returns {HTMLButtonElement} A styled button which works as a link.
 */
function genTwitter(message) {
    var elem = genBase();
    elem.style.backgroundColor = "#00a2f3";
    elem.innerHTML = svgs["twitter"] + genTooltip("Tweet it!");
    elem.onclick = function() {
        var url = "http://twitter.com/intent/tweet?url=" + encodeURIComponent(document.location.href) +
            "&text=" + message;
        var temp = document.createElement("a");
        temp.href = url;
        temp.target = "_blank";
        temp.click();
    }
    return elem;
}


/**
 * A function to create the copy button.
 * @returns {HTMLButtonElement} A styled button.
 */
function genCopyElem() {
    var elem = genBase();
    elem.style.backgroundColor = "#808080";
    elem.innerHTML = svgs["copy"] + genTooltip("Copy Link!");
    elem.onclick = function() {
        navigator.clipboard.writeText(document.location.href).then(function() {
            alert("Post URL copied!");
        }, function() {
            alert("Could not copy... Please copy the URL manually: " + document.location.href);
        })
    }
    return elem;
}







/**
 * A function to generate a basic button that can be used in the button bar.
 * @returns {HTMLButtonElement} the base button for every platform.
 */
function genBase() {
    var elem = document.createElement("button");
    elem.className = "tooltip shareButton";
    return elem;
}


/**
 * A function to generate a tooltip for the buttons.
 * @param {string} text the message to show on the tooltip.
 * @returns {string} the HTML code of the tooltip.
 */
function genTooltip(text) {
    return "<span class='tooltiptext'>" + text + "</span>";
}