$(document).ready(function () {
    $(".saveBtn").click(function () {
        userInput = $(this).siblings(".text-area").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".time-block").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    });
})


$("#9ClearBtn").click(function () {
    $("#9").val("");
    localStorage.setItem(9,"");
});

$("#10ClearBtn").click(function () {
    $("#10").val("");
    localStorage.setItem(10,"");
});

$("#11ClearBtn").click(function () {
    $("#11").val("");
    localStorage.setItem(11,"");
});


$("#12ClearBtn").click(function () {
    $("#12").val("");
    localStorage.setItem(12,"");
});


$("#1ClearBtn").click(function () {
    $("#1").val("");
    localStorage.setItem(1,"");
});

$("#2ClearBtn").click(function () {
    $("#2").val("");
    localStorage.setItem(2,"");
});

$("#3ClearBtn").click(function () {
    $("#3").val("");
    localStorage.setItem(3,"");
});

$("#4ClearBtn").click(function () {
    $("#4").val("");
    localStorage.setItem(4,"");
});