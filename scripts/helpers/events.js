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

	/**
	 * Add `DOMReady` listener to the document
	 * @param {Function} action
	 */
	function DOMReady(action){
		if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', action, false);
		} else if (document.attachEvent) {
			document.attachEvent('onreadystatechange', function() {
				if (document.readyState === 'complete') {
					action();
				}
			});
		}
	}
	helpers.events.DOMReady = DOMReady;

	/**
	 * Add `load` listener to the window
	 * @param {Function} action
	 */
	function load(action){
		if (window.addEventListener) {
			window.addEventListener('load', action, false);
		} else if (window.attachEvent) {
			window.attachEvent('onload', action);
		} else if ( window.onLoad ) {
			window.onload = action;
		}
	}
	helpers.events.load = load;

	/**
	 * Add `hashChange` event
	 * @param action
	 */
	function hashChange(action) {
		if (window.addEventListener) {
			window.addEventListener('hashchange', action, false);
		} else if (window.attachEvent ) {
			window.attachEvent('hashchange', action);
		}
	}
	helpers.events.hashChange = hashChange;

	/**
	 * Add the appropriate vendor prefix to an event
	 * @param {Function} action
	 */
	var prefixes = ['webkit', 'moz', 'MS', 'o', ''];
	function prefixedEvent(element, event, callback) {
		for (var i = 0; i < prefixes.length; i++) {
			if (!prefixes[i]) {
				event = event.toLowerCase();
			}
			element.addEventListener(prefixes[i] + event, callback, false);
		}
	}
	helpers.events.prefixedEvent = prefixedEvent;

	/**
	 * Debounce function - http://remysharp.com/2010/07/21/throttling-function-calls/
	 *
	 * @param function
	 * @param delay
	 * @returns {Function}
	 */
	function debounce(fn, delay) {
		var timer = null;
		return function () {
			var context = this, args = arguments;
			clearTimeout(timer);
			timer = setTimeout(function () {
				fn.apply(context, args);
			}, delay);
		};
	}
	helpers.events.debounce = debounce;

}());