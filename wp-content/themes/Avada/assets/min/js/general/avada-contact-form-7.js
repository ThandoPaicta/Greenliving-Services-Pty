jQuery(document).ready(function() {
    jQuery('<div class="fusion-slider-loading"></div>').insertAfter(".wpcf7 .ajax-loader"), jQuery(".wpcf7 .ajax-loader").remove(), jQuery(".wpcf7 > form").each(function() {
        jQuery(this).on("wpcf7submit", function(e) {
            var s = this,
                t = jQuery(e.currentTarget).data("status"),
                a = "";
            setTimeout(function() {
                jQuery(s).find(".wpcf7-response-output").each(function() {
                    "invalid" !== t && "unaccepted" !== t && "spam" !== t && "failed" !== t || jQuery(this).find(".alert-icon").length || (jQuery(this).addClass("fusion-alert error fusion-danger"), jQuery(this).hasClass("alert-dismissable") && (a = '<button class="close toggle-alert" aria-hidden="true" data-dismiss="alert" type="button">&times;</button>'), a += '<div class="fusion-alert-content-wrapper"><span class="alert-icon"><i class="fa-lg fa fa-exclamation-triangle" aria-hidden="true"></i></span><span class="fusion-alert-content">' + jQuery(this).html() + "</span>", jQuery(this).html(a)), "sent" !== t || jQuery(this).find(".alert-icon").length || (jQuery(this).addClass("fusion-alert success fusion-success"), jQuery(this).hasClass("alert-dismissable") && (a = '<button class="close toggle-alert" aria-hidden="true" data-dismiss="alert" type="button">&times;</button>'), a += '<div class="fusion-alert-content-wrapper"><span class="alert-icon"><i class="fa-lg fa fa-check-circle" aria-hidden="true"></i></span><span class="fusion-alert-content">' + jQuery(this).html() + "</span>", jQuery(this).html(a))
                }), jQuery(s).find(".wpcf7-response-output.fusion-alert .close").on("click", function(e) {
                    e.preventDefault(), jQuery(this).parent().slideUp()
                })
            }, 100)
        })
    })
});