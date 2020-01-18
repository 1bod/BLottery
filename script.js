$(document).ready(function () {
    $(".hist").hide();
    $("td").click(function () {
        $(".hist").show();
        $(this).toggleClass("checked");
        $(this).addClass("LP");
        $(".lastPressed").html($(".LP").html());
        $(this).removeClass("LP");
    });
});