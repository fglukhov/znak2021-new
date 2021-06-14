if ($("#mobile-indicator").css("display") == "none") {

	var is_mobile = false;

} else {

	var is_mobile = true;

}

var animMultiplier = 0.75;

function animateAll() {

	if ($("#mobile-indicator").css("display") == "none" && !$("body").hasClass("animated")) {

		$("body").addClass("animated");

		var controller = new ScrollMagic.Controller();

		$(".section-top-header .anim, .section-top-descr .anim").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).data("anim-index") * .4 * animMultiplier + .5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".section-top-pic-1").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: 2 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".section-top-pic-2").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: 2 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});


		$(".about-arrow").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: 2
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: $(".section-top"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});


		$(".about-num").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).closest(".col").prevAll().length * .5
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".about-nums"),
				offset: -200,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});
		$(".mark-tmb").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).closest(".col").prevAll().length * .5
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".mark-list"),
				offset: -200,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});
		$(".webinars-arrow").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).prevAll().length * 1
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".webinars-wrapper"),
				offset: -200,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});
		$(".webinar-tmb").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).closest(".col").prevAll().length * 1 + .5
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".webinars-wrapper"),
				offset: -200,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});
		$(".task-wrapper *[data-anim-index]").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).data("anim-index") * .5
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".task-wrapper"),
				offset: -200,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});


		$(".stage-tmb").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).prevAll().length * .7 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

			if ($(element).hasClass("stage-tmb-4")) {

				TweenMax.to($(".stages-arrow"), .7 * animMultiplier, {
					x: 0,
					y: 0,
					opacity: 1,
					ease: Sine.easeOut,
					// overwrite: "none",
					delay:  $(element).prevAll().length * .7 * animMultiplier + .7 * animMultiplier
				});

			}

		});



		$(".prizes-col").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).data("index") * .7 * animMultiplier + .7 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".timer-arrow").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: 1
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});



	} else if ($("#mobile-indicator").css("display") == "block") {

		$("body").removeClass("animated");

		//controller = controller.enabled(false);
		//controller = controller.destroy(true);

	}

}

$(window).on("resize", function () {

	animateAll();

});

$(document).ready(function () {

	animateAll();

});

