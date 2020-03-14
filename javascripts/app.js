var main = function () {
    "use strict";
    $(".tabs a span").toArray().forEach(function(Element) {
        $(Element).on("click", function () {
            $(".tabs span").removeClass("active");
            $(Element).addClass("active");
            $("main .content").empty();
            return false;
        });
    });
};
$(document).ready(main);