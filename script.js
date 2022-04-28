$(".submit").hide();

$("button").click(function() {
    let variable1 = $(".a").val();
    let variable2 = $(".b").val();
    let variable3 = $(".c").val();

    let variable4 = variable3 * 52 * 1;

    $(".fortune-display").append("<p>" + "You were born in " + variable1 + "." + "You started going to school in " + variable2 + "." + "You will go to school " + variable4 + "  mores times by 2023." + "</p>");
    $(".submit").show();

    console.log(variable1, variable2, variable3);
});