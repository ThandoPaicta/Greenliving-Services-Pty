! function(t) {
    "use strict";
    t.fn.equalHeights = function(i, n) {
        var e, s = t(this).parents().find(".fusion-portfolio-wrapper"),
            o = t(this).closest(".fusion-row").hasClass("fusion-builder-row-inner") ? ".fusion-column-content-centered" : ".fusion-column-content-centered:not(.fusion-builder-row-inner .fusion-column-content-centered)";
        if (e = i = i || 0, this.each(function() {
                t(this).css({
                    "min-height": "0",
                    height: "auto"
                }), t(this).find(o).css({
                    "min-height": "0",
                    height: "auto"
                })
            }), Modernizr.mq("only screen and (min-width: " + (parseInt(fusionEqualHeightVars.content_break_point, 10) + 1) + "px)") || Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)")) {
            if (t(this).parents("#main").length && t("body").hasClass("tax-portfolio_category")) return;
            return this.each(function() {
                e = Math.max(t(this).outerHeight(), e)
            }), n && (e = Math.min(n, e)), this.each(function() {
                var i = e,
                    n = t(this).find(o);
                0 === parseInt(i, 10) && t(this).attr("data-empty-column", "true"), n.length && (i = e - (t(this).outerHeight() - t(this).height())), t(this).css("min-height", i), n.length && n.css("min-height", i), t("body").hasClass("fusion-builder-live") && !t(this).parent().hasClass("fusion-column-no-min-height") && t(this).parent().is(":visible") && t(this).parent().next(".fusion-column-spacer").height(i), cssua.ua.ie && 8 < cssua.ua.ie && n.css("height", i)
            })
        }
        s.data("isotope") && !s.data("relayout") && (s.isotope("layout"), s.data("relayout", !0))
    }
}(jQuery);