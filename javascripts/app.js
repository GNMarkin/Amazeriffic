var main = function () {
    "use strict";
    var makeTabActive = function (tabNumber) {
        //сконструируем селектор из tabNumber
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        //делаем все вкладки не активными
        $(".tabs span").removeClass("active");
        //делаем активной первой вкладку
        $(tabSelector).addClass("active");
        //очищаем основное содержимое, чтобы переопределить его
        $("main .content").empty();
        //возвращается false, т.к. мы не переходим по ссылке
    }

    $(".tabs a:nth-child(1)").on("click", function () {
        makeTabActive(1);
        return false;
    });

    $(".tabs a:nth-child(2)").on("click", function () {
        makeTabActive(2);
        return false;
    });

    $(".tabs a:nth-child(3)").on("click", function () {
        makeTabActive(3);
        return false;
    });

};
$(document).ready(main);