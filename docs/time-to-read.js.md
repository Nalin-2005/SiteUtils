## Functions

<dl>
<dt><a href="#calculate_ttr">calculate_ttr(args)</a> ⇒ <code>string</code></dt>
<dd><p>A function to calculate the Time-To-Read of an article.</p>
</dd>
<dt><a href="#countWords">countWords(str)</a> ⇒ <code>number</code></dt>
<dd><p>A function to count the nnumber of words in the given string.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#TTR_Input">TTR_Input</a> : <code>Object</code></dt>
<dd><p>The type of object to send as input to the function for calculating the Time-To-Read of the article.</p>
</dd>
</dl>

<a name="calculate_ttr"></a>

## calculate\_ttr(args) ⇒ <code>string</code>
A function to calculate the Time-To-Read of an article.

**Kind**: global function  
**Returns**: <code>string</code> - The summarized form of the amount of time taken.  

| Param | Type | Description |
| --- | --- | --- |
| args | [<code>TTR\_Input</code>](#TTR_Input) | an Object that contains the required parameters as defined in <tt>TTR_Input</tt>. |

<a name="countWords"></a>

## countWords(str) ⇒ <code>number</code>
A function to count the nnumber of words in the given string.

**Kind**: global function  
**Returns**: <code>number</code> - the number of words  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to count the words from. |

<a name="TTR_Input"></a>

## TTR\_Input : <code>Object</code>
The type of object to send as input to the function for calculating the Time-To-Read of the article.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | [Required] The selector of the element that contains the text of the article. This is important to exclude text present on the footer, navbar, etc. |
| wpm | <code>number</code> | [Optional] The words-per-minute to estimate the time taken to read. Defaults to 250. |
| repr_format | <code>string</code> | [Optional] The format in which to present the summary. <tt>{0}</tt> in the text would be replaced with the minutes taken, and <tt>{1}</tt> with the seconds. Defaults to "{0} Minute Read.". |
| dest | <code>HTMLElement</code> \| <code>null</code> | [Optional] The destination element which should contain the summary. Defaults to null. |

