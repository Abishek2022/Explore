jQuery(document)
    .off()
    .on("click", ".each__traveller h3", function (e) {
        jQuery(this)
            .parent(".each__traveller")
            .toggleClass("mobile-accordion-show")
            .find(".field_set")
            .slideToggle(400);
    });

jQuery(".each__traveller:first-of-type").addClass("mobile-accordion-show");

jQuery(".each__traveller:first-of-type .field_set").css({
    display: "block",
});
