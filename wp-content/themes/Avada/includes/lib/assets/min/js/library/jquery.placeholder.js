! function(e, a, t) {
    var l, r, o = "placeholder" in a.createElement("input"),
        d = "placeholder" in a.createElement("textarea"),
        c = t.fn,
        i = t.valHooks,
        h = t.propHooks;

    function n(e, a) {
        var l = t(this);
        if (this.value == l.attr("placeholder") && l.hasClass("placeholder"))
            if (l.data("placeholder-password")) {
                if (l = l.hide().next().show().attr("id", l.removeAttr("id").data("placeholder-id")), !0 === e) return l[0].value = a;
                l.focus()
            } else this.value = "", l.removeClass("placeholder"), this == u() && this.select()
    }

    function s() {
        var e, a, l, r, o = t(this),
            d = this.id;
        if ("" == this.value) {
            if ("password" == this.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        e = o.clone().attr({
                            type: "text"
                        })
                    } catch (o) {
                        e = t("<input>").attr(t.extend((a = this, l = {}, r = /^jQuery\d+$/, t.each(a.attributes, function(e, a) {
                            a.specified && !r.test(a.name) && (l[a.name] = a.value)
                        }), l), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": o,
                        "placeholder-id": d
                    }).bind("focus.placeholder", n), o.data({
                        "placeholder-textinput": e,
                        "placeholder-id": d
                    }).before(e)
                }
                o = o.removeAttr("id").hide().prev().attr("id", d).show()
            }
            o.addClass("placeholder"), o[0].value = o.attr("placeholder")
        } else o.removeClass("placeholder")
    }

    function u() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    o && d ? (r = c.placeholder = function() {
        return this
    }).input = r.textarea = !0 : ((r = c.placeholder = function() {
        return this.filter((o ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": n,
            "blur.placeholder": s
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), this
    }).input = o, r.textarea = d, l = {
        get: function(e) {
            var a = t(e),
                l = a.data("placeholder-password");
            return l ? l[0].value : a.data("placeholder-enabled") && a.hasClass("placeholder") ? "" : e.value
        },
        set: function(e, a) {
            var l = t(e),
                r = l.data("placeholder-password");
            return r ? r[0].value = a : l.data("placeholder-enabled") ? ("" == a ? (e.value = a, e != u() && s.call(e)) : l.hasClass("placeholder") && n.call(e, !0, a) || (e.value = a), l) : e.value = a
        }
    }, o || (i.input = l, h.value = l), d || (i.textarea = l, h.value = l), t(function() {
        t(a).delegate("form", "submit.placeholder", function() {
            var e = t(".placeholder", this).each(n);
            setTimeout(function() {
                e.each(s)
            }, 10)
        })
    }), t(e).bind("beforeunload.placeholder", function() {
        t(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery);