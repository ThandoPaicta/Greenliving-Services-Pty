! function(e) {
    e.fn.hoverIntent = function(t, n, o) {
        var r, v, i, u, s = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        s = "object" == typeof t ? e.extend(s, t) : e.isFunction(n) ? e.extend(s, {
            over: t,
            out: n,
            selector: o
        }) : e.extend(s, {
            over: t,
            out: t,
            selector: n
        });
        var h = function(e) {
                r = e.pageX, v = e.pageY
            },
            a = function(t, n) {
                if (n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.abs(i - r) + Math.abs(u - v) < s.sensitivity) return e(n).off("mousemove.hoverIntent", h), n.hoverIntent_s = 1, s.over.apply(n, [t]);
                i = r, u = v, n.hoverIntent_t = setTimeout(function() {
                    a(t, n)
                }, s.interval)
            },
            I = function(t) {
                var n = jQuery.extend({}, t),
                    o = this;
                o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" == t.type ? (i = n.pageX, u = n.pageY, e(o).on("mousemove.hoverIntent", h), 1 != o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {
                    a(n, o)
                }, s.interval))) : (e(o).off("mousemove.hoverIntent", h), 1 == o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {
                    ! function(e, t) {
                        t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, s.out.apply(t, [e])
                    }(n, o)
                }, s.timeout)))
            };
        return this.on({
            "mouseenter.hoverIntent": I,
            "mouseleave.hoverIntent": I
        }, s.selector)
    }
}(jQuery);