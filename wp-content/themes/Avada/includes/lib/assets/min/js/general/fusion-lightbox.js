function avadaLightBoxInitializeLightbox() {
    window.$ilInstances && jQuery.each(window.$ilInstances, function(t, i) {
        window.$ilInstances[t].destroy()
    }), window.avadaLightBox.initialize_lightbox()
}
window.avadaLightBox = {}, void 0 === window.$ilInstances && (window.$ilInstances = {}), window.avadaLightBox.initialize_lightbox = function() {
    "use strict";
    1 === Number(fusionLightboxVars.status_lightbox) && (window.avadaLightBox.set_title_and_caption(), window.avadaLightBox.activate_lightbox())
}, window.avadaLightBox.activate_lightbox = function(t) {
    "use strict";
    var i, e = [],
        o = 1;
    void 0 === t && (t = jQuery("body")), t.find('[data-rel^="prettyPhoto["], [rel^="prettyPhoto["], [data-rel^="iLightbox["], [rel^="iLightbox["]').each(function() {
        var t, i, o, a, n = ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe", "svg", "mp4", "ogg", "webm", "webp"],
            r = 0,
            s = jQuery(this).attr("href");
        for (void 0 === s && (s = ""), t = 0; t < n.length; t++) r += String(s).toLowerCase().indexOf("." + n[t]);
        i = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/, s.match(i) && (r = 1), i = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, s.match(i) && (r = 1), -1 * n.length === parseInt(r, 10) && (jQuery(this).addClass("fusion-no-lightbox"), jQuery(this).removeAttr("data-rel rel")), jQuery(this).hasClass("fusion-no-lightbox") || (null != (o = this.getAttribute("data-rel")) && -1 === jQuery.inArray(o, e) && e.push(o), null != (a = this.getAttribute("data-rel")) && (jQuery(this).parents(".gallery").length && (a = a.replace("postimages", jQuery(this).parents(".gallery").attr("id")), jQuery(this).attr("data-rel", a)), -1 === jQuery.inArray(a, e) && e.push(a)))
    }), i = 1, t.find(".tiled-gallery").each(function() {
        jQuery(this).find(".tiled-gallery-item > a").each(function() {
            var t = this.getAttribute("data-rel");
            null == t && (t = "iLightbox[tiled-gallery-" + i + "]", jQuery(this).attr("data-rel", t)), -1 === jQuery.inArray(t, e) && e.push(t)
        }), i++
    }), jQuery.each(e, function(t, i) {
        o++, 1 === jQuery('[data-rel="' + i + '"], [rel="' + i + '"]').length ? window.$ilInstances[i] = jQuery('[data-rel="' + i + '"], [rel="' + i + '"]').iLightBox(window.avadaLightBox.prepare_options(i, !1)) : window.$ilInstances[i] = jQuery('[data-rel="' + i + '"], [rel="' + i + '"]').iLightBox(window.avadaLightBox.prepare_options(i))
    }), t.find('a[rel="prettyPhoto"], a[data-rel="prettyPhoto"], a[rel="iLightbox"], a[data-rel="iLightbox"]').each(function() {
        var t = jQuery(this).attr("href");
        "" !== t && void 0 !== t && (window.$ilInstances["single_" + o] = jQuery(this).iLightBox(window.avadaLightBox.prepare_options("single")), o++)
    }), t.find("#lightbox-link, .lightbox-link, .fusion-lightbox-link").each(function() {
        var t = jQuery(this).attr("href");
        "" !== t && void 0 !== t && (window.$ilInstances["single_" + o] = jQuery(this).iLightBox(window.avadaLightBox.prepare_options("single")), o++)
    }), fusionLightboxVars.lightbox_post_images && t.find(".type-post .post-content a, #posts-container .post .post-content a, .fusion-blog-shortcode .post .post-content a, .type-avada_portfolio .project-content a, .fusion-portfolio .fusion-portfolio-wrapper .fusion-post-content, .summary-container .post-content a, .woocommerce-tabs .post-content a").has("img").each(function() {
        var t, i = ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe", "svg", "mp4", "ogg", "webm", "webp"],
            e = 0;
        for (t = 0; t < i.length; t++) e += String(jQuery(this).attr("href")).toLowerCase().indexOf("." + i[t]); - 1 * i.length === parseInt(e, 10) && (jQuery(this).addClass("fusion-no-lightbox"), jQuery(this).removeAttr("data-rel rel")), -1 !== String(jQuery(this).attr("rel")).indexOf("prettyPhoto") || -1 !== String(jQuery(this).attr("data-rel")).indexOf("prettyPhoto") || -1 !== String(jQuery(this).attr("rel")).indexOf("iLightbox") || -1 !== String(jQuery(this).attr("data-rel")).indexOf("iLightbox") || jQuery(this).hasClass("fusion-no-lightbox") || (jQuery(this).attr("data-caption", jQuery(this).parent().find("p.wp-caption-text").text()), window.$ilInstances["single_" + o] = jQuery(this).iLightBox(window.avadaLightBox.prepare_options("post")), o++)
    })
}, window.avadaLightBox.set_title_and_caption = function() {
    "use strict";
    jQuery('a[rel^="prettyPhoto"], a[data-rel^="prettyPhoto"]').each(function() {
        jQuery(this).attr("data-caption") || (jQuery(this).attr("title") ? jQuery(this).attr("data-caption", jQuery(this).attr("title")) : jQuery(this).attr("data-caption", jQuery(this).parents(".gallery-item").find(".gallery-caption").text())), jQuery(this).attr("data-title") || jQuery(this).attr("data-title", jQuery(this).find("img").attr("alt"))
    }), jQuery('a[rel^="iLightbox"], a[data-rel^="iLightbox"]').each(function() {
        jQuery(this).attr("data-caption") || jQuery(this).attr("data-caption", jQuery(this).parents(".gallery-item").find(".gallery-caption").text())
    })
}, window.avadaLightBox.prepare_options = function(t, i) {
    "use strict";
    var e, o, a = !0;
    return void 0 === i && (i = fusionLightboxVars.lightbox_gallery, a = !(!0 === fusionLightboxVars.lightbox_autoplay || "true" === fusionLightboxVars.lightbox_autoplay || 1 === fusionLightboxVars.lightbox_autoplay || "1" === fusionLightboxVars.lightbox_autoplay)), e = {
        fast: 100,
        slow: 800,
        normal: 400
    }, o = {
        skin: fusionLightboxVars.lightbox_skin,
        smartRecognition: !1,
        minScale: .075,
        show: {
            title: fusionLightboxVars.lightbox_title,
            speed: e[fusionLightboxVars.lightbox_animation_speed.toLowerCase()]
        },
        path: fusionLightboxVars.lightbox_path,
        controls: {
            slideshow: i,
            arrows: fusionLightboxVars.lightbox_arrows
        },
        slideshow: {
            pauseTime: fusionLightboxVars.lightbox_slideshow_speed,
            pauseOnHover: !1,
            startPaused: a
        },
        overlay: {
            opacity: fusionLightboxVars.lightbox_opacity
        },
        caption: {
            start: fusionLightboxVars.lightbox_desc,
            show: "",
            hide: ""
        },
        isMobile: !0,
        callback: {
            onShow: function(t, i) {
                var e = jQuery(t.currentElement).find('iframe[src*="youtube.com"]');
                jQuery('.ilightbox-container iframe[src*="youtube.com"]').not(e).each(function() {
                    this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                }), jQuery(t.currentElement).trapFocus()
            },
            onAfterChange: function(t) {
                var i = jQuery(t.currentElement).find('iframe[src*="youtube.com"]'),
                    e = i.length ? i.attr("src") : "";
                jQuery('.ilightbox-container iframe[src*="youtube.com"]').not(i).each(function() {
                    this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                }), i.length && -1 !== e.indexOf("autoplay=1") && i[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            },
            onHide: function(t) {
                jQuery(document).off(".fusionLightbox")
            }
        }
    }, fusionLightboxVars.lightbox_social && (o.social = {
        buttons: {
            facebook: !0,
            twitter: !0,
            reddit: !0,
            digg: !0,
            delicious: !0
        }
    }), Number(fusionLightboxVars.lightbox_deeplinking) && (o.linkId = t), o.text = window.fusionLightboxVars.l10n, o
}, window.avadaLightBox.refresh_lightbox = function() {
    "use strict";
    window.avadaLightBox.set_title_and_caption(), jQuery.each(window.$ilInstances, function(t, i) {
        i.hasOwnProperty("refresh") && i.refresh()
    })
}, void 0 === window.$ilInstances && (window.$ilInstances = {}), jQuery(document).ajaxComplete(function(t, i, e) {
    "use strict"; - 1 === e.url.indexOf("https://vimeo.com/api/oembed.json") && window.avadaLightBox.refresh_lightbox()
}), jQuery(window).on("load", function() {
    "use strict";
    window.avadaLightBox.initialize_lightbox()
}), jQuery.fn.trapFocus = function() {
    var t, i, e = jQuery(this).find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    e.length && (t = e[0], i = e[e.length - 1], jQuery(document).on("keydown.fusionLightbox", function(e) {
        ("Tab" === e.key || 9 === e.keyCode) && (e.shiftKey ? t === document.activeElement && (i.focus(), e.preventDefault()) : i === document.activeElement && (t.focus(), e.preventDefault()))
    }), t.focus())
};