var main = function () {
    "use strict";
    var tabNumber;
    for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(tabSelector).on("click", function () {
            //делаем все вкладки не активными
            $(".tabs span").removeClass("active");
            $(this).addClass("active");
            return false;
        });
    }
};
$(document).ready(main);