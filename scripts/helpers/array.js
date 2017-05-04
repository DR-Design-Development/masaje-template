/**
 * Collection of global helpers
 * @type {object} helpers
 */
var helpers = helpers || {};

(function(){
	'use strict';

	/**
	 * Collection of Array helpers
	 * @type {object} helpers.array
	 */
	helpers.array = helpers.array || {};

	/**
	 *
	 * @param {NodeList} collection
	 * @param {Function} action
	 */
	function forEach(collection, action){
		if(collection !== null){
			for(var index = 0, length = collection.length; index < length; index++){
				action(collection[index], index);
			}
			return;
		}
		return false;
	}
	helpers.array.forEach = forEach;

	/**
	 * Compare two arrays and return differences
	 *
	 * @param arrayOne
	 * @param arrayTwo
	 * @returns {*|Array|null}
	 */
	function arrayDiff(arrayOne, arrayTwo) {
		return arrayTwo.filter(function(i) {
			return arrayOne.indexOf(i) < 0;
		});
	}
	helpers.array.arrayDiff = arrayDiff;

}());