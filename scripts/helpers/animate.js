/**
 * Collection of global helpers
 * @type {object} helpers
 */
var helpers = helpers || {};

(function(d){
	'use strict';

	/**
	 * Collection of Animations helpers
	 * @type {object} helpers.animate
	 */
	helpers.animate = helpers.animate || {};

	/**
	 * Borrowed from:
	 * http://jsfiddle.net/gabrieleromanato/cMp7s/
	 */
	helpers.animate = {
		easing: {
			linear: function(progress) {
				return progress;
			},
			quadratic: function(progress) {
				return Math.pow(progress, 2);
			},
			swing: function(progress) {
				return 0.5 - Math.cos(progress * Math.PI) / 2;
			},
			circ: function(progress) {
				return 1 - Math.sin(Math.acos(progress));
			},
			back: function(progress, x) {
				return Math.pow(progress, 2) * ((x + 1) * progress - x);
			},
			bounce: function(progress) {
				for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
					if (progress >= (7 - 4 * a) / 11) {
						return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
					}
				}
			},
			elastic: function(progress, x) {
				return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
			}
		},
		animate: function(options) {
			var start = new Date;
			var id = setInterval(function() {
				var timePassed = new Date - start;
				var progress = timePassed / options.duration;
				if (progress > 1) {
					progress = 1;
				}
				options.progress = progress;
				var delta = options.delta(progress);
				options.step(delta);
				if (progress == 1) {
					clearInterval(id);
					options.complete();
				}
			}, options.delay || 10);
		},
		fadeOut: function(element, options) {
			var to = 1;
			helpers.animate.animate({
				duration: options.duration,
				delta: function(progress) {
//					progress = this.progress;
//					return helpers.animate.easing.swing(progress);
					return progress;
				},
				complete: options.complete,
				step: function(delta) {
					element.style.opacity = to - delta;
				}
			});
		},
		fadeIn: function(element, options) {
			var to = 0;
			helpers.animate.animate({
				duration: options.duration,
				delta: function(progress) {
//					progress = this.progress;
//					return helpers.animate.easing.swing(progress);
					return progress;
				},
				complete: options.complete,
				step: function(delta) {
					element.style.opacity = to + delta;
				}
			});
		}
	};

	/**
	 * Check if animations are supported
	 * @returns {boolean}
	 */
	function isAnimationSupported() {
		// Source code: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations/Detecting_CSS_animation_support
		var animation = false,
			domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
			elm = d.createElement('p');
		if (elm.style.animationName !== undefined) { animation = true; }
		if (animation === false) {
			for (var i = 0; i < domPrefixes.length; i++) {
				if (elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined) { animation = true; break; }
			}
		}
		return animation;
	}
	helpers.animate.isAnimationSupported = isAnimationSupported;

}(document));