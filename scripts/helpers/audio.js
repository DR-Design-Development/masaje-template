/**
 * Collection of global helpers
 * @type {object} helpers
 */
var helpers = helpers || {};

(function(){
	'use strict';

	/**
	 * Collection of Audio helpers
	 * @type {object} helpers.audio
	 */
	helpers.audio = helpers.audio || {};

	/**
	 * Check for audio-tag support
	 * @returns {boolean}
	 */
	function audioTagSupport() {
		return !!(document.createElement('audio').canPlayType);
	}
	helpers.audio.audioTagSupport = audioTagSupport;

	/**
	 * Returns prefered audio file type (extension: mp3 or ogg)
	 * @returns {string}
	 */
	function preferedFileType() {
		var audio = document.createElement('audio');
		var fileType = '';

		if (audio.canPlayType) {
			// Currently canPlayType(type) returns: '', 'maybe' or 'probably'
			var canPlayMp3 = !!audio.canPlayType && '' != audio.canPlayType('audio/mpeg');
			var canPlayOgg = !!audio.canPlayType && '' != audio.canPlayType('audio/ogg; codecs="vorbis"');
		}

		if (canPlayMp3) {
			fileType = 'mp3';
		} else if (canPlayOgg) {
			fileType = 'ogg';
		}

		return fileType;
	}
	helpers.audio.preferedFileType = preferedFileType;

}());