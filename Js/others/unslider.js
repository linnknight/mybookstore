(function(c, b) {
    var a = function() {
        var d = this;
        d.o = { speed: 500, delay: 3000, init: 0, pause: !b, loop: !b, keys: b, dots: b, arrows: b, prev: "←", next: "→", fluid: b, starting: b, complete: b, items: ">ul", item: ">li", easing: "swing" };
        d.init = function(i, j) { d.o = c.extend(d.o, j);
            d.el = i;
            d.ul = i.find(d.o.items);
            d.max = [i.outerWidth() | 0, i.outerHeight() | 0];
            d.li = d.ul.find(d.o.item).each(function(l) {
                var n = c(this),
                    m = n.outerWidth(),
                    k = n.outerHeight();
                if (m > d.max[0]) { d.max[0] = m }
                if (k > d.max[1]) { d.max[1] = k } });
            var j = d.o,
                h = d.ul,
                g = d.li,
                f = g.length;
            d.i = 0;
            i.css({ width: d.max[0], height: g.first().outerHeight(), overflow: "hidden" });
            h.css({ position: "relative", left: 0, width: (f * 100) + "%" });
            g.css({ "float": "left", width: (d.max[0]) + "px" });
            setTimeout(function() {
                if (j.delay | 0) { d.play();
                    if (j.pause) { i.on("mouseover mouseout", function(k) { d.stop();
                            k.type == "mouseout" && d.play() }) } } }, j.init | 0);
            if (j.keys) { c(document).keydown(function(l) {
                    var k = l.which;
                    if (k == 37) { d.prev() } else {
                        if (k == 39) { d.next() } else {
                            if (k == 27) { d.stop() } } } }) }
            j.dots && e("dot");
            j.arrows && e("arrow");
            if (j.fluid) { c(window).resize(function() { d.r && clearTimeout(d.r);
                    d.r = setTimeout(function() {
                        var l = { height: g.eq(d.i).outerHeight() },
                            k = i.outerWidth();
                        h.css(l);
                        l.width = Math.min(Math.round((k / i.parent().width()) * 100), 100) + "%";
                        i.css(l) }, 50) }).resize() }
            if (c.event.special.swipe || c.Event("swipe")) { i.on("swipeleft swiperight swipeLeft swipeRight", function(k) { k.type.toLowerCase() == "swipeleft" ? d.next() : d.prev() }) }
            return d };
        d.to = function(j, q) {
            if (d.t) { d.stop();
                d.play() }
            var f = d.o,
                g = d.el,
                m = d.ul,
                p = d.li,
                k = d.i,
                l = p.eq(j);
            c.isFunction(f.starting) && !q && f.starting(g, p.eq(k));
            if ((!l.length || j < 0) && f.loop == b) {
                return }
            if (!l.length) { j = 0 }
            if (j < 0) { j = p.length - 1 }
            l = p.eq(j);
            var h = q ? 5 : f.speed | 0,
                n = f.easing,
                i = { height: l.outerHeight() };
            if (!m.queue("fx").length) { g.find(".dot").eq(j).addClass("active").siblings().removeClass("active");
                g.animate(i, h, n) && m.animate(c.extend({ left: "-" + j + "00%" }, i), h, n, function(o) { d.i = j;
                    c.isFunction(f.complete) && !q && f.complete(g, l) }) } };
        d.play = function() { d.t = setInterval(function() { d.to(d.i + 1) }, d.o.delay | 0) };
        d.stop = function() { d.t = clearInterval(d.t);
            return d };
        d.next = function() {
            return d.stop().to(d.i + 1) };
        d.prev = function() {
            return d.stop().to(d.i - 1) };

        function e(f, g) {
            if (f == "dot") { g = '<ol class="dots">';
                c.each(d.li, function(h) { g += '<li class="' + (h == d.i ? f + " active" : f) + '">' + (++h) + "</li>" });
                g += "</ol>" } else { g = '<div class="';
                g = g + f + 's">' + g + f + ' prev">' + d.o.prev + "</div>" + g + f + ' next">' + d.o.next + "</div></div>" }
            d.el.addClass("has-" + f + "s").append(g).find("." + f).click(function() {
                var h = c(this);
                h.hasClass("dot") ? d.stop().to(h.index()) : h.hasClass("prev") ? d.prev() : d.next() }) } };
    c.fn.unslider = function(e) {
        var d = this.length;
        return this.each(function(g) {
            var i = c(this),
                h = "unslider" + (d > 1 ? "-" + (++g) : ""),
                f = (new a).init(i, e);
            i.data(h, f).data("key", h) }) };
    a.version = "1.0.0" })(jQuery, false);
