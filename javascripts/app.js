var main = function () {
    "use strict";
    var toDos = [
        "Закончить писать книгу",
        "Вывести Грейси на прогулку в парк",
        "Ответить на письма нанимателей в LinkedIn",
        "Подготовиться к лекции в понедельник",
        "Обновить несколько новых задач",
        "Купить продукты"
    ];
    $(".tabs a span").toArray().forEach(function (Element) {
        $(Element).on("click", function () {
            var $element = $(Element),
                $content;
            $(".tabs span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                var index;
                for (index = toDos.length - 1; index >= 0; index = index - 1){
                    $content.append($("<li>").text(toDos[index]));
                }
                $("main .content").append($content);
                console.log("Щелчок на первой вкладке!");

            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);
                console.log("Щелчок на второй вкладке");
                
            } else if ($element.parent().is(":nth-child(3)")) {
                console.log("Щелчок на третьей вкладке");
            };
            return false;
        });
    });
    $(".tabs a:first-child span").trigger("click");
};
$(document).ready(main);