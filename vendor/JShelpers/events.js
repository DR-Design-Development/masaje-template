/**
 * Collection of global helpers
 * @type {object} helpers
 */
var helpers = helpers || {};

(function(){
	'use strict';

	/**
	 * Collection of Eevents helpers
	 * @type {object} helpers.events
	 */
	helpers.events = helpers.events || {};

	/**
	 * Add `on click` listener using Legacy IE compatible method
	 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener#Compatibility
	 * @param {HTMLElement} element
	 * @param {Function} action
	 */
	function onClick(element, action){
		if (element.addEventListener) {
			element.addEventListener('click', action, false);
		} else if (element.attachEvent)  {
			element.attachEvent('onclick', action);
		}
	}
	helpers.events.onClick = onClick;

	/**
	 * Add `on change` listener using Legacy IE compatible method
	 * @param {HTMLElement} element
	 * @param {Function} action
	 */
	function onChange(element, action){
		if (element.addEventListener) {
			element.addEventListener('change', action, false);
		} else if (element.attachEvent)  {
			element.attachEvent('onchange', action);
		}
	}
	helpers.events.onChange = onChange;

	/**
	 * Add `ontouchend` event
	 * touchend instead of touchstart for a better user interaction perception
	 * @param {HTMLElement} element
	 * @param {Function} action
	 */
	function onTouchend(element, action){
		if (element.addEventListener) {
			element.addEventListener('touchend', action, false);
		}
	}
	helpers.events.onTouchend = onTouchend;

	/**
	 * Add `mouseover` event
	 * @param {HTMLElement} element
	 * @param {Function} action
	 */
	function mouseOver(element, action){
		if (element.addEventListener) {
			element.addEventListener('mouseover', action, false);
		}
	}
	helpers.events.mouseOver = mouseOver;

	/**
	 * Add `mouseOut` event
	 * @param {HTMLElement} element
	 * @param {Function} action
	 */
	function mouseOut(element, action){
		if (element.addEventListener) {
			element.addEventListener('mouseout', action, false);
		}
	}
	helpers.events.mouseOut = mouseOut;

}());

