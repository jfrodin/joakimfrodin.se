$(document).ready(function () {
    // Display alert message after toggle paragraphs
    $(".toggle-btn").click(function () {
        $("p").toggle(2000, function () {
        });
    });
});
