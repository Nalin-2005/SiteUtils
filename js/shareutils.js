// shareutils.js

const svgs = {
    "facebook": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="share" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>',
    "whatsapp": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="share" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>',
    "pinterest": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="share" d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
    "copy": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="share" d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>'
}


const stylesheet = `
.tooltip {
	position: relative;
	display: inline-block;
	border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
  }
  
  /* Tooltip text */
  .tooltip .tooltiptext {
	visibility: hidden;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	padding: 5px 0;
	border-radius: 6px;
   
	/* Position the tooltip text - see examples below! */
	position: absolute;
	z-index: 1;

	bottom: 100%;
	left: 50%;
	margin-left: -60px;
  }
  
  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
	visibility: visible;
  }


  .shareElem{
	  height: 50px;
	  position: fixed;
	  bottom: 0px;
	  width: 100%;
	  color: white;
	  text-align: center;
	  display: flex;
	  align-items: center;
  }

  path.share{
	  fill: white;
  }


  .shareButton{
	  height: 100%;
	  width: 25%;
	  text-align: center;
	  vertical-align: middle;
	  border-top-left-radius: 7px ;
	  border-top-right-radius: 7px ;
	  border: none;
  }
  
  .shareButton:active{
	  border: none;
  }
`;
var Facebook = genFacebook()
var WhatsApp = genWhatsapp()
var Pinterest = genPinterest()
var Copy = genCopyElem()

window.fetch(document.location.href).then(function(response) {
    if (document.location.pathname != "/" && response.ok) {
        var style = document.createElement("style")
        style.innerText = stylesheet
        document.head.appendChild(style)


        var main = document.querySelector("div.all-container")
        var shareElem = document.createElement("div");
        shareElem.className = "shareElem"
        main.appendChild(shareElem);

        shareElem.appendChild(Facebook)
        shareElem.appendChild(WhatsApp)
        shareElem.appendChild(Pinterest)
        shareElem.appendChild(Copy)


        document.querySelector("#footer").innerHTML += "<br><br><br>"
    }
})


function genFacebook() {
    var elem = genBase();
    elem.style.backgroundColor = "#4267b2"
    elem.innerHTML = svgs["facebook"] + genTooltip("Share using FaceBook!")
    elem.onclick = function() {
        var url = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(document.location.href)
        var temp = document.createElement("a")
        temp.href = url
        temp.target = "_blank"
        temp.click()
    }
    return elem;
}

function genWhatsapp() {
    var elem = genBase();
    elem.style.backgroundColor = "#1ebea5"
    elem.innerHTML = svgs["whatsapp"] + genTooltip("Share using WhatsApp!")
    elem.onclick = function() {
        var url = "http://api.whatsapp.com/send?text=" + encodeURIComponent("Check out Nalin Angrish's Blog post on \"" + document.title + "\" here:" + document.location.href)
        var temp = document.createElement("a")
        temp.href = url
        temp.target = "_blank"
        temp.click()
    }
    return elem;
}

function genPinterest() {
    var elem = genBase();
    elem.style.backgroundColor = "#e60023"
    elem.innerHTML = svgs["pinterest"] + genTooltip("Pin it!")
    elem.onclick = function() {
        var url = "http://pinterest.com/pin/create/link/?url=" + encodeURIComponent(document.location.href) +
            "&description=" + encodeURIComponent("Check out Nalin Angrish's Blog post on " + document.title)
        var temp = document.createElement("a")
        temp.href = url
        temp.target = "_blank"
        temp.click()
    }
    return elem;
}

function genCopyElem() {
    var elem = genBase();
    elem.style.backgroundColor = "#808080"
    elem.innerHTML = svgs["copy"] + genTooltip("Copy Link!")
    elem.onclick = function() {
        navigator.clipboard.writeText(document.location.href).then(function() {
            alert("Post URL copied!")
        }, function() {
            alert("Could not copy... Please copy the URL manually: " + document.location.href)
        })
    }
    return elem;
}







function genBase() {
    var elem = document.createElement("button");
    elem.className = "tooltip shareButton"
    return elem;
}

function genTooltip(text) {
    return "<span class='tooltiptext'>" + text + "</span>";
}