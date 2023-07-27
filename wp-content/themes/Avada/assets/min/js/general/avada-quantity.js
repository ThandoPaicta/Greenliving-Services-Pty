function avadaAddQuantityBoxes(t, a) {
    var e = !1;
    t || (t = ".qty"), a || (a = jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").find(t)), a.length && (jQuery.each(a, function(t, a) {
        "date" === jQuery(a).prop("type") || "hidden" === jQuery(a).prop("type") || jQuery(a).parent().parent().hasClass("tribe-block__tickets__item__quantity__number") || jQuery(a).parent().hasClass("buttons_added") || (jQuery(a).parent().addClass("buttons_added").prepend('<input type="button" value="-" class="minus" />'), jQuery(a).addClass("input-text").after('<input type="button" value="+" class="plus" />'), e = !0)
    }), e && (jQuery("input" + t + ":not(.product-quantity input" + t + ")").each(function() {
        var t = parseFloat(jQuery(this).attr("min"));
        t && 0 < t && parseFloat(jQuery(this).val()) < t && jQuery(this).val(t)
    }), jQuery(".plus, .minus").off("click"), jQuery(".plus, .minus").on("click", function() {
        var a = jQuery(this).parent().find(t),
            e = parseFloat(a.val()),
            n = parseFloat(a.attr("max")),
            i = parseFloat(a.attr("min")),
            o = a.attr("step");
        e && "" !== e && "NaN" !== e || (e = 0), "" !== n && "NaN" !== n || (n = ""), "" !== i && "NaN" !== i || (i = 0), "any" !== o && "" !== o && void 0 !== o && "NaN" !== parseFloat(o) || (o = 1), jQuery(this).is(".plus") ? n && (n == e || e > n) ? a.val(n) : a.val(e + parseFloat(o)) : i && (i == e || e < i) ? a.val(i) : 0 < e && a.val(e - parseFloat(o)), a.trigger("change")
    })))
}

function compositeAddQuantityBoxes() {
    avadaAddQuantityBoxes()
}
jQuery(window).on("load fusion-element-render-fusion_tb_woo_cart", function() {
    avadaAddQuantityBoxes()
}), jQuery(document).ajaxComplete(function() {
    avadaAddQuantityBoxes()
}), jQuery(document).ready(function() {
    jQuery(".yith-wacp-mini-cart-icon").on("click", function() {
        setTimeout(function() {
            avadaAddQuantityBoxes()
        }, 100)
    })
}), jQuery(".composite_data").length && jQuery(".composite_data").on("wc-composite-initializing", function(t, a) {
    a.actions.add_action("component_selection_details_animated", compositeAddQuantityBoxes, 10)
});