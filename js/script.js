var mouse = {
		x: 0,
		y: 0
	},
	pos = {
		x: 0,
		y: 0
	},
	ratio = .4,
	active = !1,
	pointer = document.getElementById("pointer");
TweenLite.set(pointer, {
	xPercent: -50,
	yPercent: -50
});
document.addEventListener("mousemove", mouseMove);

function mouseMove(a) {
	mouse.x = a.pageX;
	mouse.y = a.pageY
}
TweenLite.ticker.addEventListener("tick", updatePosition);

function updatePosition() {
	active || (pos.x += (mouse.x - pos.x) * ratio, pos.y += (mouse.y - pos.y) * ratio, TweenLite.set(pointer, {
		x: pos.x,
		y: pos.y - $(document).scrollTop()
	}))
}
$("a.logo").mouseenter(function (a) {
	TweenMax.to(pointer, .3, {
		scale: 4
	});
	active = !0
}).mouseleave(function (a) {
	TweenMax.to(pointer, .3, {
		scale: 1
	});
	active = !1
}).mousemove(function (a) {
	parallaxCursor(a, this, 1);
	callParallax(a, this)
});
$(".nav-item").mouseenter(function (a) {
	TweenMax.to(this, .3, {
		scale: 2
	});
	TweenMax.to(pointer, .3, {
		scale: 4
	});
	active = !0
}).mouseleave(function (a) {
	TweenMax.to(this, .3, {
		scale: 1
	});
	TweenMax.to(pointer, .3, {
		scale: 1
	});
	TweenMax.to(this.querySelector(".nav-link"), .2, {
		x: 0,
		y: 0
	});
	active = !1
}).mousemove(function (a) {
	parallaxCursor(a, this, 1);
	callParallax(a, this)
});
$(".works a").mouseenter(function (a) {
	TweenMax.to(this, .3, {
		scale: 1.1
	});
	TweenMax.to(pointer, .3, {
		scale: 14
	});
	a = $(this).data("bg");
	TweenMax.set(pointer, {
		css: {
			backgroundImage: "url(" + a + ")"
		}
	});
	active = !0
}).mouseleave(function (a) {
	TweenMax.to(this, .3, {
		scale: 1
	});
	TweenMax.to(pointer, .3, {
		scale: 1
	});
	TweenMax.set(pointer, {
		css: {
			backgroundImage: "url()"
		}
	});
	active = !1
}).mousemove(function (a) {
	parallaxCursor(a, this, 1);
	parallaxIt(a, this, this, 25)
});
$(".nextProject a").mouseenter(function (a) {
	TweenMax.to(this, .3, {
		scale: 1.1
	});
	TweenMax.to(pointer, .3, {
		scale: 4
	});
	active = !0
}).mouseleave(function (a) {
	TweenMax.to(this, .3, {
		scale: 1
	});
	TweenMax.to(pointer, .3, {
		scale: 1
	});
	active = !1
}).mousemove(function (a) {
	parallaxCursor(a, this, 1);
	parallaxIt(a, this, this, 25)
});
$(".text-1 a, .text-2 a").mouseenter(function (a) {
	TweenMax.to(pointer, .3, {
		scale: 4
	});
	active = !0
}).mouseleave(function (a) {
	TweenMax.to(pointer, .3, {
		scale: 1
	});
	active = !1
}).mousemove(function (a) {
	parallaxCursor(a, this, 1);
	parallaxIt(a, this, this, 25)
});

function callParallax(a, b) {
	parallaxIt(a, b, b.querySelector(".text-hover"), 25)
}

function parallaxIt(a, b, c, d) {
	b = b.getBoundingClientRect();
	var e = a.pageX - b.left;
	a = a.pageY - b.top - $(document).scrollTop();
	TweenMax.to(c, .3, {
		x: (e - b.width / 2) / b.width * d,
		y: (a - b.height / 2) / b.height * d,
		ease: Power2.easeOut
	})
}

function parallaxCursor(a, b, c) {
	b = b.getBoundingClientRect();
	var d = a.pageY - b.top;
	pos.x = b.left + b.width / 2 + (a.pageX - b.left - b.width / 2) / c;
	pos.y = b.top + b.height / 2 + (d - b.height / 2) / c;
	TweenMax.to(pointer, .3, {
		x: pos.x,
		y: pos.y - $(document).scrollTop()
	})
}

var num = 200;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar').addClass('fixed-top bg-white');
    } else {
        $('.navbar').removeClass('fixed-top bg-white');
    }
});
