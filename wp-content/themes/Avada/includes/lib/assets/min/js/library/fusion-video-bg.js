var $youtubeBGVideos = {};

function _fbRowGetAllElementsWithAttribute(e) {
    var t, i, a = [],
        o = document.getElementsByTagName("*");
    for (t = 0, i = o.length; t < i; t++) o[t].getAttribute(e) && !jQuery(o[t]).parents(".tfs-slider").length && a.push(o[t]);
    return a
}

function _fbRowOnPlayerReady(e) {
    var t, i, a = e.target,
        o = 0,
        n = !0;
    a.playVideo(), a.isMute && a.mute(), 0 !== jQuery("[data-youtube-video-id=" + a.getVideoData().video_id + "]").data("loop") && (t = a.getCurrentTime(), i = +new Date / 1e3, a.loopInterval = setInterval(function() {
        void 0 !== a.loopTimeout && clearTimeout(a.loopTimeout), t === a.getCurrentTime() ? o = t + (+new Date / 1e3 - i) : (o = a.getCurrentTime(), i = +new Date / 1e3), t = a.getCurrentTime(), o + (n ? .45 : .21) >= a.getDuration() && (a.pauseVideo(), a.seekTo(0), a.playVideo(), n = !1)
    }, 150))
}

function _fbRowOnPlayerStateChange(e) {
    e.data === YT.PlayerState.ENDED ? (void 0 !== e.target.loopTimeout && clearTimeout(e.target.loopTimeout), 0 !== jQuery("[data-youtube-video-id=" + e.target.getVideoData().video_id + "]").data("loop") && e.target.seekTo(0)) : e.data === YT.PlayerState.PLAYING && jQuery(e.target.getIframe()).parent().css("opacity", "1")
}

function resizeVideo(e) {
    var t, i, a, o, n, d, s, r, u, f, l, v, c, y, m, p = e.parent();
    p.find("iframe").hasClass("fusion-hidden") && p.find("iframe").attr("data-privacy-src") || (null !== p.find("iframe").width() ? ((t = e).css({
        width: "auto",
        height: "auto",
        left: "auto",
        top: "auto"
    }), t.css("position", "absolute"), y = p.find("> div").data("display"), o = p.width(), n = p.height(), i = p.outerWidth(), a = p.outerHeight(), r = [16, 9], void 0 !== e.attr("data-video-aspect-ratio") && -1 !== e.attr("data-video-aspect-ratio").indexOf(":") && ((r = e.attr("data-video-aspect-ratio").split(":"))[0] = parseFloat(r[0]), r[1] = parseFloat(r[1])), s = a, d = r[0] / r[1] * a, "contain" === y ? (p.css("paddingTop", p.parent("li").find(".slide-content-container").css("paddingTop")), s >= a && (u = a, f = r[0] / r[1] * a), f >= i && (f = i, u = r[1] / r[0] * i)) : d >= i && s >= a ? (u = a, f = r[0] / r[1] * a) : (f = i, u = r[1] / r[0] * i), l = -(u - n) / 2, p.hasClass("fusion-flex-container") ? (v = "auto", c = "auto") : (v = -(f - o) / 2, c = "0"), 1 > p.find(".fusion-video-cover").length && p.find("iframe").parent().prepend('<div class="fusion-video-cover">&nbsp;</div>'), p.is(":visible") && (p.find(".fusion-video-cover").css({
        "z-index": 0,
        width: f,
        height: u,
        position: "absolute"
    }), m = "iframe", p.hasClass("video-background") && (m = "iframe.fusion-container-video-bg"), jQuery("body").hasClass("rtl") ? p.find(m).parent().css({
        marginRight: v,
        marginLeft: c,
        marginTop: l
    }) : p.find(m).parent().css({
        marginRight: c,
        marginLeft: v,
        marginTop: l
    }), p.find(m).css({
        width: f,
        height: u,
        "z-index": -1
    }))) : setTimeout(function() {
        resizeVideo(e)
    }, 500))
}
if (Number(fusionVideoBgVars.status_yt)) var onYouTubeIframeAPIReady = function() {
    var e, t, i, a, o, n = _fbRowGetAllElementsWithAttribute("data-youtube-video-id");
    if ("function" != typeof fusionGetConsent || fusionGetConsent("youtube"))
        for (e = 0; e < n.length; e++) {
            for (t = n[e].getAttribute("data-youtube-video-id"), i = "", a = 0; a < n[e].childNodes.length; a++)
                if (/div/i.test(n[e].childNodes[a].tagName)) {
                    i = n[e].childNodes[a].getAttribute("id");
                    break
                }
            "" !== i && ((o = new YT.Player(i, {
                height: "auto",
                width: "auto",
                videoId: t,
                playerVars: {
                    autohide: 1,
                    autoplay: 1,
                    fs: 0,
                    showinfo: 0,
                    modestBranding: 1,
                    start: 0,
                    controls: 0,
                    rel: 0,
                    disablekb: 1,
                    iv_load_policy: 3,
                    wmode: "transparent"
                },
                events: {
                    onReady: _fbRowOnPlayerReady,
                    onStateChange: _fbRowOnPlayerStateChange
                }
            })).isMute = !1, "yes" === n[e].getAttribute("data-mute") && (o.isMute = !0), "true" === n[e].getAttribute("data-youtube-video-id") && o.setPlaybackQuality("hd720"), setTimeout(function() {
                jQuery("#" + i).css("visibility", "visible")
            }, 500))
        }
};

function vimeoReady(e) {
    var t, i = jQuery("#" + e).parents("[data-vimeo-video-id]").first();
    ("function" != typeof fusionGetConsent || fusionGetConsent("vimeo")) && (t = new Vimeo.Player(e), "yes" === i.data("mute") && t.setVolume(0), "no" === i.data("mute") && t.setVolume(1), t.on("timeupdate", function(e) {
        i.css("opacity", "1"), t.off("timeupdate")
    }), jQuery("#" + e).attr("data-privacy-src") && resizeVideo(i))
}

function fusionInitVimeoPlayers() {
    var e, t, i, a, o;
    if (("function" != typeof fusionGetConsent || fusionGetConsent("vimeo")) && Number(fusionVideoBgVars.status_vimeo) && 0 < (e = jQuery("[data-vimeo-video-id]")).length)
        for (i = (t = e.find('> iframe, iframe[data-privacy-type="vimeo"]')).length, o = 0; o < i; o++) a = t[o], jQuery("html").hasClass("ua-ie-11") && jQuery(a).parent().css("opacity", "1"), "function" == typeof vimeoReady && vimeoReady(a.getAttribute("id"))
}
jQuery(document).ready(function(e) {
    e("body").hasClass("vc_editor") || (e(".bg-parallax.video, .fusion-bg-parallax.video").each(function() {
        e(this).prependTo(e(this).next().addClass("video")), e(this).css({
            opacity: Math.abs(parseFloat(e(this).attr("data-opacity")) / 100)
        })
    }), e("[data-youtube-video-id], [data-vimeo-video-id]").parent().css("overflow", "hidden"), e("[data-youtube-video-id], [data-vimeo-video-id]").each(function() {
        var t = e(this);
        setTimeout(function() {
            resizeVideo(t)
        }, 100)
    }), e("[data-youtube-video-id], [data-vimeo-video-id]").each(function() {
        var t = e(this);
        setTimeout(function() {
            resizeVideo(t)
        }, 1e3)
    }), e(window).on("resize", function() {
        e("[data-youtube-video-id], [data-vimeo-video-id]").each(function() {
            var t = e(this);
            setTimeout(function() {
                resizeVideo(t)
            }, 2)
        })
    }), fusionInitVimeoPlayers())
}), jQuery(window).on("load fusion-element-render-fusion_builder_container", function(e, t) {
    var i = void 0 !== t ? jQuery('div[data-cid="' + t + '"]').find("[data-youtube-video-id], [data-vimeo-video-id]") : jQuery("[data-youtube-video-id], [data-vimeo-video-id]");
    void 0 !== t && Number(fusionVideoBgVars.status_yt) && onYouTubeIframeAPIReady(), i.each(function() {
        var e = jQuery(this);
        setTimeout(function() {
            resizeVideo(e)
        }, 500)
    })
});