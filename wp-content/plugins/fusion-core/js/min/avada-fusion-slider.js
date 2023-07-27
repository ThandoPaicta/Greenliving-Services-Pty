function updateVideoTag() {
    jQuery(".fusion-slider-self-hosted-video-placeholder").each(function(e, i) {
        0 < jQuery(i).next("video").length || jQuery(i).after(function() {
            var e = 'width="1800" height="700"',
                t = "";
            return jQuery(i.attributes).each(function(i, s) {
                switch (s.name) {
                    case "class":
                        break;
                    case "data-ogg":
                        t += s.nodeValue ? '<source src="' + s.nodeValue + '" type="video/ogg">' : "";
                        break;
                    case "data-webm":
                        t += s.nodeValue ? '<source src="' + s.nodeValue + '" type="video/webm">' : "";
                        break;
                    case "data-mp4":
                        t += s.nodeValue ? '<source src="' + s.nodeValue + '" type="video/mp4">' : "";
                        break;
                    default:
                        e += " " + s.name + '="' + s.nodeValue + '"'
                }
            }), "<video " + e + ">" + t + "</video>"
        })
    })
}

function avadaFusionSlider(e) {
    e && (this.$el = jQuery(e), this.isPostContent = 1 <= this.$el.parents(".post-content").length, this.percentageWidth = !1, this.isParallax = !(cssua.ua.mobile || this.breakpointReached() || this.isPostContent) && 1 === parseInt(this.$el.data("parallax")), this.isFullHeight = 1 === parseInt(this.$el.parent().data("full_height")), this.isFullScreen = this.isFullHeight || !this.isPostContent && 1 === parseInt(this.$el.data("full_screen")), this.isShortcode = 0 === this.$el.parent("#sliders-container").length, this.headerHeight = jQuery(".fusion-header-wrapper").height(), this.resizeWidth = jQuery(window).width(), this.fullHeightOffset = this.$el.parent().data("offset"), jQuery("body").hasClass("fusion-builder-live") && !jQuery("body").hasClass("fusion-builder-live-preview-only") && (this.$el.css("width", ""), this.$el.css("margin-left", ""), this.$el.css("margin-right", ""), this.$el.css("left", "")), this.setResponsiveTypography(), !this.isShortcode && this.isParallax && jQuery(".fusion-header").addClass("fusion-header-backface"), this.isFullScreen && (this.$el.css("max-width", "100%"), this.$el.find(".slides, .background").css("width", "100%")), this.updateXPosition(), this.initFlexslider(), jQuery(window).on("fusion-resize-horizontal fusion-resize-vertical fusion-column-resized", this.sliderResize.bind(this)), jQuery(window).on("scroll", this.windowScroll.bind(this)))
}
avadaFusionSlider.prototype.fusionReanimateSlider = function(e) {
    var i = e.find(".slide-content"),
        t = e.siblings(".tfs-scroll-down-indicator");
    jQuery(i).each(function() {
        jQuery(this).stop(!0, !0), jQuery(this).css("margin-top", "50px"), jQuery(this).animate({
            opacity: "1",
            "margin-top": "0"
        }, 1e3)
    }), jQuery(t).each(function() {
        var e = jQuery(this);
        e.stop(!0, !0), e.css("opacity", "0"), i.offset().top + i.height() + 25 < e.offset().top && (e.css("padding-bottom", "50px"), setTimeout(function() {
            e.animate({
                opacity: "1",
                "padding-bottom": "0"
            }, 500, "easeOutCubic")
        }, 500))
    })
}, avadaFusionSlider.prototype.getHeaderHeight = function() {
    return this.isShortcode && this.isFullHeight ? this.fullHeightOffset ? fusion.getHeight(this.fullHeightOffset) : 0 : jQuery(".fusion-tb-header").length ? jQuery(".fusion-tb-header").height() : this.breakpointReached() && jQuery("#side-header").length ? jQuery("#side-header").outerHeight() : jQuery(".fusion-header-wrapper").height()
}, avadaFusionSlider.prototype.getWpAdminBarHeight = function() {
    var e = 0;
    return "object" == typeof fusion && "function" == typeof fusion.getAdminbarHeight ? e = fusion.getAdminbarHeight() : jQuery("#wpadminbar").length && (e = jQuery("#wpadminbar").height()), e
}, avadaFusionSlider.prototype.removeLoader = function() {
    this.$el.parent().find(".fusion-slider-loading").remove()
}, avadaFusionSlider.prototype.getMaxHeight = function() {
    return Math.max.apply(null, this.$el.find(".slide-content").map(function() {
        return jQuery(this).outerHeight()
    }).get()) + 40
}, avadaFusionSlider.prototype.removeTitleSeparators = function(e) {
    "function" == typeof jQuery.fn.fusion_responsive_title_shortcode && jQuery(e.slides.eq(e.currentSlide)).find(".fusion-title").fusion_responsive_title_shortcode()
}, avadaFusionSlider.prototype.getHeightOnFS = function() {
    var e = !1;
    return this.breakpointReached() ? e = !(1 == avadaFusionSliderVars.mobile_header_transparency && "below" === avadaFusionSliderVars.slider_position.toLowerCase()) : this.isParallax || jQuery("#side-header").length ? "above" !== avadaFusionSliderVars.slider_position.toLowerCase() || jQuery("#side-header").length || (e = !0) : e = !(1 == avadaFusionSliderVars.header_transparency && "below" === avadaFusionSliderVars.slider_position.toLowerCase()), jQuery(window).height() - this.getWpAdminBarHeight() - (e ? this.getHeaderHeight() : 0)
}, avadaFusionSlider.prototype.getWidth = function() {
    var e = this.$el.data("slider_width"),
        i = jQuery(this.$el.find("li").get(0));
    return -1 !== e.indexOf("%") ? (e = (e = (e = (e = i.find(".background-image").data("imgwidth")) || cssua.ua.mobile ? e : i.find("video").width()) || 940) < this.$el.data("slider_width") ? this.$el.data("slider_width") : e, this.percentageWidth = !0) : e = parseInt(e, 10), e
}, avadaFusionSlider.prototype.getHeight = function(e) {
    var i, t = parseInt(this.$el.data("slider_height"), 10),
        s = t / e;
    return .5 > s && (s = .5), i = this.$el.parent().parent().parent().width(), 1 <= this.$el.parents(".post-content").length && (i = this.$el.width(), this.$el.parents(".tab-content").length && (i = this.$el.parents(".tab-content").width() - 60)), (t = s * i) > parseInt(this.$el.data("slider_height"), 10) && (t = parseInt(this.$el.data("slider_height"), 10)), 200 > t && (t = 200), t
}, avadaFusionSlider.prototype.fusionFixZindex = function() {
    jQuery("body").hasClass("fusion-builder-live") && !jQuery("body").hasClass("fusion-builder-live-preview-only") || ("absolute" !== jQuery(".fusion-header-wrapper").css("position") && jQuery(".fusion-header-wrapper").css("position", "relative"), jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("position", "relative"), jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("z-index", "3"), jQuery(".fusion-header-wrapper").css("z-index", "5"))
}, avadaFusionSlider.prototype.parallaxAdjustments = function() {
    var e, i, t, s = this;
    this.breakpointReached() ? this.breakpointReached() && (this.$el.css("position", "relative"), this.$el.css("left", "0"), this.$el.css("margin-left", "0"), this.fusionFixZindex(), jQuery(".fusion-header-wrapper").css("height", "auto"), this.$el.parents(".fusion-slider-container").css("margin-top", ""), this.$el.find(".flex-direction-nav li a").css("margin-top", ""), this.$el.find(".flex-control-nav").css("bottom", 0), 0 !== avadaFusionSliderVars.header_transparency && "0" !== avadaFusionSliderVars.header_transparency && !1 !== avadaFusionSliderVars.header_transparency || "below" !== avadaFusionSliderVars.slider_position.toLowerCase() || this.$el.find(".slide-content-container").each(function() {
        jQuery(this).css("padding-top", "")
    })) : (this.$el.css("position", "fixed"), "absolute" !== jQuery(".fusion-header-wrapper").css("position") ? (jQuery(".fusion-header-wrapper").css("position", "relative"), t = this.getHeaderHeight() / 2 + "px", "below" === avadaFusionSliderVars.slider_position.toLowerCase() && this.$el.parents(".fusion-slider-container").css("margin-top", "-" + this.getHeaderHeight() + "px")) : t = "0", this.$el.find(".flex-direction-nav li a").css("margin-top", t), jQuery(".fusion-header-wrapper").css("height", this.getHeaderHeight()), this.fusionFixZindex(), 1 == this.$el.data("full_screen") ? this.$el.find(".flex-control-nav").css("bottom", this.getHeaderHeight() / 2) : this.$el.find(".flex-control-nav").css("bottom", 0), this.$el.hasClass("fixed-width-slider") && ("left" === avadaFusionSliderVars.header_position || "right" === avadaFusionSliderVars.header_position ? ((e = this.isShortcode ? jQuery("#main") : jQuery("#sliders-container")).width() < parseFloat(this.$el.parent().css("max-width")) ? this.$el.css("max-width", e.width()) : this.$el.css("max-width", this.$el.parent().css("max-width")), -1 * (i = "left" === avadaFusionSliderVars.header_position ? "-" + (this.$el.width() - jQuery("#side-header").width()) / 2 + "px" : "-" + (this.$el.width() + jQuery("#side-header").width()) / 2 + "px") > this.$el.width() && (i = -1 * this.$el.width())) : i = "-" + this.$el.width() / 2 + "px", this.$el.css("left", "50%"), this.$el.css("margin-left", i)), 0 !== avadaFusionSliderVars.header_transparency && "0" !== avadaFusionSliderVars.header_transparency && !1 !== avadaFusionSliderVars.header_transparency || "below" !== avadaFusionSliderVars.slider_position.toLowerCase() || this.$el.find(".slide-content-container").each(function() {
        jQuery(this).css("padding-top", s.getHeaderHeight() + "px")
    }))
}, avadaFusionSlider.prototype.updateVideoContainers = function(e, i, t) {
    var s = this;
    (void 0 !== t ? t : this.$el.find("video")).each(function() {
        var t, a, n, r;
        jQuery(this).removeAttr("style"), (n = jQuery(this).width() / jQuery(this).height() * e) < i && !s.$el.hasClass("full-width-slider") && (n = i), t = "-" + (n - s.$el.width()) / 2 + "px", a = s.$el.parent().parent().parent().width(), 1 <= s.$el.parents(".post-content").length && (a = s.$el.width()), a > n && !0 === s.percentageWidth && !s.isFullScreen ? (n = "100%", t = 0) : s.isFullScreen && (a > n ? (n = "100%", t = 0, r = "static") : r = "absolute"), jQuery(this).width(n), jQuery(this).css("left", t), r && jQuery(this).css("position", r)
    })
}, avadaFusionSlider.prototype.breakpointReached = function(e) {
    switch (e) {
        case "content":
            return Modernizr.mq("only screen and (max-width: " + avadaFusionSliderVars.content_break_point + "px)");
        case "header":
        default:
            return Modernizr.mq("only screen and (max-width: " + avadaFusionSliderVars.side_header_break_point + "px)")
    }
}, avadaFusionSlider.prototype.updateHeight = function(e) {
    this.$el.parents(".fusion-slider-container").css("max-height", e), this.$el.parents(".fusion-slider-container").css("height", e), this.$el.css("height", e), this.$el.find(".background, .mobile_video_image").css("height", e)
}, avadaFusionSlider.prototype.updateXPosition = function() {
    "left" !== avadaFusionSliderVars.header_position && "right" !== avadaFusionSliderVars.header_position || this.$el.hasClass("fixed-width-slider") || !this.isParallax || (this.$el.css("max-width", jQuery("#wrapper").width()), jQuery("body").hasClass("side-header-left") ? this.$el.css({
        left: "50%",
        transform: "translateX(calc(" + jQuery("#side-header").width() + "px / 2 - 50%))"
    }) : jQuery("body").hasClass("side-header-right") && this.$el.css({
        left: "50%",
        transform: "translateX(calc(" + jQuery("#side-header").width() + "px / -2 - 50%))"
    }))
}, avadaFusionSlider.prototype.maybeUpdateButtons = function() {
    cssua.ua.mobile && this.$el.find(".fusion-button").each(function() {
        jQuery(this).removeClass("button-xlarge button-large button-medium"), jQuery(this).addClass("button-small")
    }), this.$el.find("a.button").each(function() {
        jQuery(this).data("old", jQuery(this).attr("class"))
    }), this.breakpointReached("content") ? this.$el.find(".fusion-button").each(function() {
        jQuery(this).data("old", jQuery(this).attr("class")), jQuery(this).removeClass("button-xlarge button-large button-medium"), jQuery(this).addClass("button-small")
    }) : this.$el.find("a.button").each(function() {
        jQuery(this).attr("class", jQuery(this).data("old"))
    })
}, avadaFusionSlider.prototype.initFlexslider = function() {
    var e = this,
        i = {
            animation: this.$el.data("animation"),
            slideshow: this.$el.data("autoplay"),
            slideshowSpeed: this.$el.data("slideshow_speed"),
            animationSpeed: this.$el.data("animation_speed"),
            controlNav: Boolean("pagination_circles" === this.$el.data("slider_indicator")),
            directionNav: Boolean(Number(this.$el.data("nav_arrows"))),
            animationLoop: Boolean(Number(this.$el.data("loop"))),
            smoothHeight: !0,
            pauseOnHover: !1,
            useCSS: !0,
            video: !0,
            touch: !0,
            prevText: "&#xe61e;",
            nextText: "&#xe620;",
            start: function(i) {
                var t, s;
                e.removeLoader(), jQuery(i.slides.eq(i.currentSlide)).find(".slide-content-container").show(), jQuery(i.slides.eq(i.currentSlide)).find(".tfs-scroll-down-indicator").show(), e.removeTitleSeparators(), t = e.isFullScreen ? 0 : e.getWidth(), s = e.isFullScreen ? e.getHeightOnFS() : e.getHeight(t), e.isFullScreen && jQuery(".fusion-top-frame").length && (s = s - jQuery(".fusion-top-frame").height() - jQuery(".fusion-bottom-frame").height()), s < e.getMaxHeight() && (s = e.getMaxHeight()), setTimeout(function() {
                    e.$el.find("video").each(function() {
                        jQuery(this).hide(), e.updateVideoContainers(s, t, jQuery(this)), jQuery(this).show(), jQuery(this).on("loadeddata", function() {
                            jQuery(this).hide(), e.updateVideoContainers(s, t, jQuery(this)), jQuery(this).show()
                        })
                    })
                }, 500), e.updateHeight(s), e.maybeUpdateButtons(), e.isParallax && e.parallaxAdjustments(), jQuery(i.slides.eq(i.currentSlide)).find("video").each(function() {
                    "yes" === jQuery(this).parents("li").attr("data-autoplay") && "function" == typeof jQuery(this)[0].play && jQuery(this)[0].play()
                }), e.isPostContent || "left" !== avadaFusionSliderVars.header_position && "right" !== avadaFusionSliderVars.header_position || this.isShortcode || e.$el.parents("#sliders-container").find(".slide-content-container").each(function() {
                    e.breakpointReached() || (jQuery(this).hasClass("slide-content-right") ? jQuery(this).find(".slide-content").css("margin-right", "100px") : jQuery(this).hasClass("slide-content-left") && jQuery(this).find(".slide-content").css("margin-left", "100px"))
                }), e.fusionReanimateSlider(e.$el.find(".slide-content-container")), void 0 !== i.slides && 0 !== i.slides.eq(i.currentSlide).find("iframe").length && playVideoAndPauseOthers(i), e.$el.find(".overlay-link").hide(), jQuery(i.slides.eq(i.currentSlide)).find(".overlay-link").show(), e.$el.find("[data-youtube-video-id], [data-vimeo-video-id]").each(function() {
                    var e = jQuery(this);
                    setTimeout(function() {
                        resizeVideo(e)
                    }, 500)
                }), Waypoint.refreshAll()
            },
            before: function() {
                e.$el.find(".slide-content-container").hide(), e.$el.find(".tfs-scroll-down-indicator").hide()
            },
            after: function(i) {
                jQuery(i.slides.eq(i.currentSlide)).find(".slide-content-container").show(), jQuery(i.slides.eq(i.currentSlide)).find(".tfs-scroll-down-indicator").show(), "function" == typeof jQuery.fn.fusion_responsive_title_shortcode && jQuery(i.slides.eq(i.currentSlide)).find(".fusion-title").fusion_responsive_title_shortcode(), e.fusionReanimateSlider(e.$el.find(".slide-content-container")), e.$el.find(".overlay-link").hide(), jQuery(i.slides.eq(i.currentSlide)).find(".overlay-link").show(), jQuery(i.slides.eq(i.currentSlide)).find("[data-youtube-video-id], [data-vimeo-video-id]").each(function() {
                    resizeVideo(jQuery(this))
                }), playVideoAndPauseOthers(i), jQuery('[data-spy="scroll"]').each(function() {
                    jQuery(this).scrollspy("refresh")
                })
            }
        };
    this.$el.flexslider(i)
}, avadaFusionSlider.prototype.sliderResize = function(e, i) {
    var t, s, a, n, r = this;
    s = (t = r.$el.find(".flex-active-slide")).find(".tfs-scroll-down-indicator"), a = r.isFullScreen ? 0 : r.getWidth(), n = r.isFullScreen ? r.getHeightOnFS() : r.getHeight(a), void 0 !== s.offset() && t.find(".slide-content").offset().top + t.find(".slide-content").height() + 25 < s.offset().top ? s.css("opacity", "1") : s.css("opacity", "0"), r.isFullScreen && jQuery(".fusion-top-frame").length && (n = n - jQuery(".fusion-top-frame").height() - jQuery(".fusion-bottom-frame").height()), n < r.getMaxHeight() && (n = r.getMaxHeight()), setTimeout(function() {
        r.updateVideoContainers(n, a)
    }, 100), r.updateXPosition(), r.updateHeight(n), r.maybeUpdateButtons(), r.isParallax && r.parallaxAdjustments(), Modernizr.mq("only screen and (max-width: 640px)") ? (r.$el.parents(".fusion-slider-container").css("height", n), r.$el.css("height", n), r.$el.find(".background, .mobile_video_image").css("height", n)) : (r.breakpointReached(), r.$el.parents(".fusion-slider-container").css("height", n), r.$el.css("height", n), r.$el.find(".background, .mobile_video_image").css("height", n))
}, avadaFusionSlider.prototype.windowScroll = function() {
    this.isParallax && (this.$el.parents("#sliders-container").length && jQuery(window).scrollTop() >= jQuery("#sliders-container").position().top + jQuery("#sliders-container").height() ? (cssua.ua.mobile || Modernizr.mq("only screen and (max-width: " + avadaFusionSliderVars.side_header_break_point + "px)") || this.$el.css("position", "static"), this.$el.css("visibility", "hidden")) : (cssua.ua.mobile || Modernizr.mq("only screen and (max-width: " + avadaFusionSliderVars.side_header_break_point + "px)") || this.$el.css("position", "fixed"), this.$el.css("visibility", "visible")))
}, avadaFusionSlider.prototype.setResponsiveTypography = function() {
    var e;
    "function" == typeof fusionSetOriginalTypographyData && (e = "fusion-slider-" + (e = this.$el.parent().data("id")) !== this.$el.parent().attr("id") ? ".fusion-slider-" + e : "#fusion-slider-" + e, void 0 === jQuery(e).data("has-rendered") && (fusionSetOriginalTypographyData(e + " h1, " + e + " h2, " + e + " h3, " + e + " h4, " + e + " h5, " + e + " h6"), jQuery(e).data("has-rendered", !0)))
}, jQuery(document).on("ready fusion-element-render-fusion_fusionslider fusion-partial-header_position fusion-partial-wooslider fusion-partial-fusion_tax_wooslider fusion-partial-slider_type fusion-column-resized", function(e, i) {
    "ready" === e.type && jQuery("body").hasClass("fusion-builder-live-preview") && void 0 !== i || (cssua.ua.mobile || updateVideoTag(), void 0 !== i ? new avadaFusionSlider(jQuery('div[data-cid="' + i + '"]').find(".tfs-slider")[0]) : jQuery(".tfs-slider").each(function() {
        new avadaFusionSlider(this)
    }))
});