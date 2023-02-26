var dt = new Date();

function renderDate() {
    // to get the end date of a month
    var prev_Date = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();

    var month = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
    ];

    document.getElementById("mon").innerHTML = month[dt.getMonth()];
    document.getElementById("date_str").innerHTML = dt.toDateString();

    var today = new Date();

    var cells = "";
    dt.setDate(1);
    var day = dt.getDay();
    for (var x = day; x > 0; x--) {
        cells += "<div class='prev_month'>" + (prev_Date - x + 1) + "</div>";
    }
    for (var i = 1; i <= endDate; i++) {
        if (i == today.getDate() && today.getMonth() == dt.getMonth()) {
            cells += "<div class='today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }
    }

    document.getElementsByClassName("dates")[0].innerHTML = cells;
}

function moveDate(para) {
    if (para == "prev") {
        dt.setMonth(dt.getMonth() - 1);
    } else {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}
