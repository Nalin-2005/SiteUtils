## Functions

<dl>
<dt><a href="#contact_form_send">contact_form_send(appid, form_selector)</a> ⇒ <code><a href="#ContactAPIResponse">ContactAPIResponse</a></code></dt>
<dd></dd>
<dt><a href="#contact_form_send_element">contact_form_send_element(appid, form_element)</a> ⇒ <code><a href="#ContactAPIResponse">ContactAPIResponse</a></code></dt>
<dd></dd>
<dt><a href="#contact_form_send_data">contact_form_send_data(appid, formdata)</a> ⇒ <code><a href="#ContactAPIResponse">ContactAPIResponse</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ContactAPIResponse">ContactAPIResponse</a> : <code>Object</code></dt>
<dd><p>The response from the Contact API server.</p>
</dd>
</dl>

<a name="contact_form_send"></a>

## contact\_form\_send(appid, form_selector) ⇒ [<code>ContactAPIResponse</code>](#ContactAPIResponse)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| appid | <code>string</code> | The App ID registered on GitHub. |
| form_selector | <code>string</code> | A Selector for the Form. |

<a name="contact_form_send_element"></a>

## contact\_form\_send\_element(appid, form_element) ⇒ [<code>ContactAPIResponse</code>](#ContactAPIResponse)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| appid | <code>string</code> | The App ID registered on GitHub. |
| form_element | <code>HTMLFormElement</code> | The form Element in the DOM. |

<a name="contact_form_send_data"></a>

## contact\_form\_send\_data(appid, formdata) ⇒ [<code>ContactAPIResponse</code>](#ContactAPIResponse)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| appid | <code>string</code> | The App ID registered on GitHub. |
| formdata | <code>FormData</code> | The formdata that contains the data to be sent. Must include properties: "name", "email", "message" |

<a name="ContactAPIResponse"></a>

## ContactAPIResponse : <code>Object</code>
The response from the Contact API server.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | The Status of the request (success/failure). |
| statusCode | <code>number</code> | The Response's numerical code. |
| responseText | <code>string</code> | Any message (probably failure message) produced by the server. |

