$(window).on("scroll touchmove", function() {

	fixedHeader();

	var scrollPos = $(window).scrollTop();

	if ($("#md-indicator").css("display") == "block") {
		var yDiff = $("header").outerHeight();
	} else {
		var yDiff = $("header").outerHeight();
	}

	$("a[name]").each(function() {
		if (scrollPos > $(this).offset().top - yDiff - 100) {
			$(".navbar-nav a").removeClass("active");
			$(".navbar-nav a[href='#" + $(this).attr("name") + "']").addClass("active");
		}
	});

});

$(document).ready(function() {

	fixedHeader();

	$("body").on("click", function(e) {
		if ($("#md-indicator").css("display") == "block" && !$(e.target).hasClass("navbar-wrapper-inner") && !$(e.target).parents().hasClass("navbar-wrapper-inner") && !$(e.target).hasClass("navbar-trigger") && !$(e.target).parents().hasClass("navbar-trigger")) {
			$(".navbar-wrapper").fadeOut(150);
			$("body").removeClass("menu-open");
			$(".navbar-trigger").removeClass("active");
		}
	});

	$(".navbar-trigger").click(function() {
		$(this).toggleClass("active");
		$(".navbar-wrapper").fadeToggle(150);
		$("body").toggleClass("menu-open");
	});



	$(".navbar-nav a").click(function() {

		if ($("#md-indicator").css("display") == "block") {

			$(".navbar-wrapper").fadeOut(150);
			$("body").removeClass("menu-open");
			$(".navbar-trigger").removeClass("active");

		}

	});

	// $(".navbar-wrapper").click(function(e) {
	// 	if (!$(e.target).hasClass("navbar-wrapper-inner") && !$(e.target).parents().hasClass("navbar-wrapper-inner")) {
	// 		$(".navbar-wrapper").fadeOut(150);
	// 		$("body").removeClass("menu-open");
	// 		$(".navbar-trigger").removeClass("active");
	// 	}
	// });

	// $("body").on("click", function (e) {
	//
	// 	if ($("#md-indicator").css("display") != "block") {
	//
	// 		if (!$(e.target).hasClass("navbar-trigger") && !$(e.target).parents().hasClass("navbar-trigger") && !$(e.target).hasClass("navbar-wrapper") && !$(e.target).parents().hasClass("navbar-wrapper") && $(".navbar-trigger").hasClass("active")) {
	//
	// 			$(".navbar-wrapper").fadeOut(150);
	//
	// 			$(".navbar-trigger").removeClass("active");
	//
	// 		}
	//
	// 	}
	//
	// });

	$("body").on("click", ".navbar-nav a", function() {

		var curLink = $(this);

		if ($("#mobile-indicator").css("display") == "block") {
			var yDiff = $("header").outerHeight();
		} else {
			var yDiff = $("header").outerHeight();
		}

		$("html,body").animate({
			scrollTop: $("a[name='" + curLink.attr("href").replace("#","") + "']").offset().top - yDiff - 50
		},1000,function () {
			//curLink.addClass("active")
		});

		return false;

	});

	// Countdown

	var endDate = new Date(2021, 5, 28, 0, 0, 0, 0);

	$(".countdown").each(function() {
		$(this).countdown({
			until: endDate,
			layout : "<div class='cd-section cd-section-days'><div class='cd-num'>{dnn}</div><div class='cd-ttl'>{dl}</div></div><div class='cd-section cd-section-hours'><div class='cd-num'>{hnn}</div><div class='cd-ttl'>{hl}</div></div><div class='cd-section cd-section-minutes'><div class='cd-num'>{mnn}</div><div class='cd-ttl'>{ml}</div></div>"
		});
	});

	// Countdown END

	// FAQ

	$("body").on("click", ".faq-item-ttl", function () {

		if (!$(this).closest(".faq-item").hasClass("active")) {

			var faqItemActive = $(".faq-item.active"),
				faqItemCur = $(this).closest(".faq-item");

			faqItemActive.find(".faq-item-content").slideUp("250", function () {

				faqItemActive.removeClass("active");

			});

			faqItemCur.find(".faq-item-content").slideDown("250", function () {

				faqItemCur.addClass("active");

			});

			//$(".faq-answer").html(faqItemCur.find(".faq-item-content").html());

		} else {

			var faqItemCur = $(this).closest(".faq-item");

			faqItemCur.find(".faq-item-content").slideUp("250", function () {

				faqItemCur.removeClass("active");

			});

		}

	});

	// FAQ END

});

function fixedHeader() {

	var scrollPos = $(window).scrollTop();

	if (scrollPos > $(".section-top").outerHeight()) {

		$("header").addClass("header-fixed");

	} else {

		$("header").removeClass("header-fixed");

	}

}