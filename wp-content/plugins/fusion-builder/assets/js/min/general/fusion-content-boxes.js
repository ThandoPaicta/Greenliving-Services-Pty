! function(n) {
    "use strict";
    n.fn.animate_content_boxes = function() {
        var e, o;
        n().waypoint && (e = n(this), o = 0, e.find(".content-box-column").each(function() {
            var e, i, t = n(this),
                a = t.find(".fusion-animated");
            setTimeout(function() {
                a.css("visibility", "visible"), e = a.data("animationtype"), i = a.data("animationduration"), a.addClass(e), i && (a.css("-moz-animation-duration", i + "s"), a.css("-webkit-animation-duration", i + "s"), a.css("-ms-animation-duration", i + "s"), a.css("-o-animation-duration", i + "s"), a.css("animation-duration", i + "s")), (t.parents(".fusion-content-boxes").hasClass("content-boxes-timeline-horizontal") || t.parents(".fusion-content-boxes").hasClass("content-boxes-timeline-vertical")) && t.addClass("fusion-appear"), setTimeout(function() {
                    a.removeClass(e)
                }, 1e3 * i)
            }, o), o += parseInt(n(this).parents(".fusion-content-boxes").attr("data-animation-delay"), 10)
        }))
    }
}(jQuery), jQuery(window).on("load", function() {
    "function" == typeof jQuery.fn.equalHeights && (jQuery(".content-boxes-icon-boxed").each(function() {
        jQuery(this).find(".content-box-column .content-wrapper-boxed").equalHeights(), jQuery(this).find(".content-box-column .content-wrapper-boxed").css("overflow", "visible")
    }), jQuery(window).on("fusion-resize-horizontal", function() {
        jQuery(".content-boxes-icon-boxed").each(function() {
            jQuery(this).find(".content-box-column .content-wrapper-boxed").equalHeights(), jQuery(this).find(".content-box-column .content-wrapper-boxed").css("overflow", "visible")
        })
    }), jQuery(".content-boxes-clean-vertical").each(function() {
        jQuery(this).find(".content-box-column .col").equalHeights(), jQuery(this).find(".content-box-column .col").css("overflow", "visible")
    }), jQuery(window).on("fusion-resize-horizontal", function() {
        jQuery(".content-boxes-clean-vertical").each(function() {
            jQuery(this).find(".content-box-column .col").equalHeights(), jQuery(this).find(".content-box-column .col").css("overflow", "visible")
        })
    }), jQuery(".content-boxes-clean-horizontal").each(function() {
        jQuery(this).find(".content-box-column .col").equalHeights(), jQuery(this).find(".content-box-column .col").css("overflow", "visible")
    }), jQuery(window).on("fusion-resize-horizontal", function() {
        jQuery(".content-boxes-clean-horizontal").each(function() {
            jQuery(this).find(".content-box-column .col").equalHeights(), jQuery(this).find(".content-box-column .col").css("overflow", "visible")
        })
    })), jQuery(window).on("load", function() {
        jQuery(".fusion-modal .fusion-content-boxes").each(function() {
            jQuery(this).appear(function() {
                jQuery(this).animate_content_boxes()
            })
        })
    })
}), jQuery(document).ready(function() {
    jQuery(".link-area-box").on("click", function() {
        jQuery(this).data("link") && ("_blank" === jQuery(this).data("link-target") ? (window.open(jQuery(this).data("link"), "_blank"), jQuery(this).find(".heading-link").removeAttr("href"), jQuery(this).find(".fusion-read-more").removeAttr("href")) : jQuery("body").hasClass("fusion-builder-live") || ("#" === jQuery(this).data("link").substring(0, 1) ? jQuery(this).fusion_scroll_to_anchor_target() : window.location = jQuery(this).data("link")), jQuery(this).find(".heading-link").attr("target", ""), jQuery(this).find(".fusion-read-more").attr("target", ""))
    }), jQuery(".link-type-button").each(function() {
        var n;
        1 <= jQuery(this).parents(".content-boxes-clean-vertical").length && (n = jQuery(".fusion-read-more-button").outerHeight(), jQuery(this).find(".fusion-read-more-button").css("top", n / 2))
    }), jQuery(".link-area-link-icon .fusion-read-more-button, .link-area-link-icon .fusion-read-more, .link-area-link-icon .heading").on("mouseenter", function() {
        jQuery(this).parents(".link-area-link-icon").addClass("link-area-link-icon-hover")
    }), jQuery(".link-area-link-icon .fusion-read-more-button, .link-area-link-icon .fusion-read-more, .link-area-link-icon .heading").on("mouseleave", function() {
        jQuery(this).parents(".link-area-link-icon").removeClass("link-area-link-icon-hover")
    }), jQuery(".link-area-box").on("mouseenter", function() {
        jQuery(this).addClass("link-area-box-hover")
    }), jQuery(".link-area-box").on("mouseleave", function() {
        jQuery(this).removeClass("link-area-box-hover")
    }), jQuery(".fusion-content-boxes.content-boxes-timeline-layout, .fusion-content-boxes.fusion-delayed-animation").each(function() {
        var n = jQuery(this),
            e = getWaypointOffset(jQuery(this));
        n.waypoint(function() {
            n.animate_content_boxes(), this.destroy()
        }, {
            offset: e
        })
    })
});