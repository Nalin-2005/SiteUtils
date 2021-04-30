## Constants

<dl>
<dt><a href="#svgs">svgs</a></dt>
<dd><p>An object that contains the svg data for the various logos of the social platforms.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#create_share_buttons">create_share_buttons(sitemap_url, message)</a></dt>
<dd><p>The main function of the script to create buttons for sharing the current webpage&#39;s URL o someone using a social media platform.</p>
</dd>
<dt><a href="#genFacebook">genFacebook()</a> ⇒ <code>HTMLButtonElement</code></dt>
<dd><p>A function to create the share button for Facebook.</p>
</dd>
<dt><a href="#genWhatsapp">genWhatsapp(message)</a> ⇒ <code>HTMLButtonElement</code></dt>
<dd><p>A function to create the share button for WhatsApp.</p>
</dd>
<dt><a href="#genPinterest">genPinterest(message)</a> ⇒ <code>HTMLButtonElement</code></dt>
<dd><p>A function to create the pin button for Pinterest.</p>
</dd>
<dt><a href="#genTwitter">genTwitter(message)</a> ⇒ <code>HTMLButtonElement</code></dt>
<dd><p>A function to create the tweet button for Twitter.</p>
</dd>
<dt><a href="#genCopyElem">genCopyElem()</a> ⇒ <code>HTMLButtonElement</code></dt>
<dd><p>A function to create the copy button.</p>
</dd>
<dt><a href="#genBase">genBase()</a> ⇒ <code>HTMLButtonElement</code></dt>
<dd><p>A function to generate a basic button that can be used in the button bar.</p>
</dd>
<dt><a href="#genTooltip">genTooltip(text)</a> ⇒ <code>string</code></dt>
<dd><p>A function to generate a tooltip for the buttons.</p>
</dd>
</dl>

<a name="svgs"></a>

## svgs
An object that contains the svg data for the various logos of the social platforms.

**Kind**: global constant  
<a name="create_share_buttons"></a>

## create\_share\_buttons(sitemap_url, message)
The main function of the script to create buttons for sharing the current webpage's URL o someone using a social media platform.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sitemap_url | <code>string</code> | The URL of the sitemap of the current site. This is used to prevent the buttons from appearing on pages which were not found and raised 404 errors. |
| message | <code>string</code> | A message that needs to be included while posting it to a platform. If you do not want to include any custom message, you should enter an empty string. |

<a name="genFacebook"></a>

## genFacebook() ⇒ <code>HTMLButtonElement</code>
A function to create the share button for Facebook.

**Kind**: global function  
**Returns**: <code>HTMLButtonElement</code> - A styled button which works as a link.  
<a name="genWhatsapp"></a>

## genWhatsapp(message) ⇒ <code>HTMLButtonElement</code>
A function to create the share button for WhatsApp.

**Kind**: global function  
**Returns**: <code>HTMLButtonElement</code> - A styled button which works as a link.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | A message that needs to be included while posting it to WhatsApp. |

<a name="genPinterest"></a>

## genPinterest(message) ⇒ <code>HTMLButtonElement</code>
A function to create the pin button for Pinterest.

**Kind**: global function  
**Returns**: <code>HTMLButtonElement</code> - A styled button which works as a link.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | A message that needs to be included while posting it to Pinterest. |

<a name="genTwitter"></a>

## genTwitter(message) ⇒ <code>HTMLButtonElement</code>
A function to create the tweet button for Twitter.

**Kind**: global function  
**Returns**: <code>HTMLButtonElement</code> - A styled button which works as a link.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | A message that needs to be included while posting it to Twitter. |

<a name="genCopyElem"></a>

## genCopyElem() ⇒ <code>HTMLButtonElement</code>
A function to create the copy button.

**Kind**: global function  
**Returns**: <code>HTMLButtonElement</code> - A styled button.  
<a name="genBase"></a>

## genBase() ⇒ <code>HTMLButtonElement</code>
A function to generate a basic button that can be used in the button bar.

**Kind**: global function  
**Returns**: <code>HTMLButtonElement</code> - the base button for every platform.  
<a name="genTooltip"></a>

## genTooltip(text) ⇒ <code>string</code>
A function to generate a tooltip for the buttons.

**Kind**: global function  
**Returns**: <code>string</code> - the HTML code of the tooltip.  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the message to show on the tooltip. |

