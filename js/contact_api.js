/**
 * @typedef {Object} ContactAPIResponse The response from the Contact API server.
 * @property {string} status - The Status of the request (success/failure).
 * @property {number} statusCode - The Response's numerical code.
 * @property {string} responseText - Any message (probably failure message) produced by the server.
 */


/**
 * 
 * @param {string} appid - The App ID registered on GitHub. 
 * @param {string} form_selector - A Selector for the Form.  
 * @returns {ContactAPIResponse}
 */
async function contact_form_send(appid, form_selector){
	return contact_form_send_element(appid, document.querySelector(form_selector))
}

/**
 * 
 * @param {string} appid - The App ID registered on GitHub. 
 * @param {HTMLFormElement} form_element - The form Element in the DOM.  
 * @returns {ContactAPIResponse}
 */
async function contact_form_send_element(appid, form_element){
	return contact_form_send_data(appid, new FormData(form_element))
}

/**
 * 
 * @param {string} appid - The App ID registered on GitHub. 
 * @param {FormData} formdata - The formdata that contains the data to be sent. Must include properties: "name", "email", "message"  
 * @returns {ContactAPIResponse}
 */
async function contact_form_send_data(appid, formdata){
	formdata.append("appid", appid)
	let resp = await window.fetch("https://www.nalinangrish.me/api/contact", {
		method:"POST",
		body:formdata
	})
	console.log(resp)
	let json = await resp.json()
	let response = {
		status:json.status,
		statusCode:resp.status,
		responseText:json.message
	}
	return response
}