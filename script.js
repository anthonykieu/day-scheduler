$("#currentDay").append(moment().format("llll"));

$(function () {
    $("#button9").click(function () {
        var text = $("#text9").val();
        localStorage.setItem("textarea9", JSON.stringify(text));
    });
});

var nine = moment();
nine.set({ hour: 9, minute: 0, second: 0, millisecond: 0 });
var now = moment();
if (nine.diff(now, "hours") < 0) {
    $("#text9").css("background-color", "grey");
}
else if (nine.diff(now, "hours") > 1) {
    $("#text9").css("background-color", "green");
}
else {
    $("#text9").css("background-color", "red");
};

$(function () {
    $("#button10").click(function () {
        var text = $("#text10").val();
        localStorage.setItem("textarea10", JSON.stringify(text));
    });
});

var ten = moment();
ten.set({ hour: 10, minute: 0, second: 0, millisecond: 0 });
var now = moment();
if (ten.diff(now, "hours") < 0) {
    $("#text10").css("background-color", "grey");
}
else if (ten.diff(now, "hours") > 1) {
    $("#text10").css("background-color", "green");
}
else {
    $("#text10").css("background-color", "red");
};

$(function () {
    $("#button11").click(function () {
        var text = $("#text11").val();
        localStorage.setItem("textarea11", JSON.stringify(text));
    });
});

var eleven = moment();
eleven.set({ hour: 11, minute: 0, second: 0, millisecond: 0 });
var now = moment();
if (eleven.diff(now, "hours") < 0) {
    $("#text11").css("background-color", "grey");
}
else if (eleven.diff(now, "hours") > 1) {
    $("#text11").css("background-color", "green");
}
else {
    $("#text11").css("background-color", "red");
};

$(function () {
    $("#button12").click(function () {
        var text = $("#text12").val();
        localStorage.setItem("textarea12", JSON.stringify(text));
    });
});

var twelve = moment();
twelve.set({ hour: 12, minute: 0, second: 0, millisecond: 0 });
var now = moment();
if (twelve.diff(now, "hours") < 0) {
    $("#text12").css("background-color", "grey");
}
else if (twelve.diff(now, "hours") > 1) {
    $("#text12").css("background-color", "green");
}
else {
    $("#text12").css("background-color", "red");
};

$(function () {
    $("#button13").click(function () {
        var text = $("#text13").val();
        localStorage.setItem("textarea13", JSON.stringify(text));
    });
});

var one = moment();
one.set({ hour: 13, minute: 0, second: 0, millisecond: 0 });
var now = moment();
if (one.diff(now, "hours") < 0) {
    $("#text13").css("background-color", "grey");
}
else if (one.diff(now, "hours") > 1) {
    $("#text13").css("background-color", "green");
}
else {
    $("#text13").css("background-color", "red");
};

$(function () {
    $("#button14").click(function () {
        var text = $("#text14").val();
        localStorage.setItem("textarea14", JSON.stringify(text));
    });
});

var two = moment();
two.set({ hour: 14, minute: 0, second: 0, millisecond: 0 });
var now = moment();
if (two.diff(now, "hours") < 0) {
    $("#text14").css("background-color", "grey");
}
else if (two.diff(now, "hours") > 1) {
    $("#text14").css("background-color", "green");
}
else {
    $("#text14").css("background-color", "red");
};
$(function () {
    $("#button15").click(function () {
        var text = $("#text15").val();
        localStorage.setItem("textarea15", JSON.stringify(text));
    });
});

var three = moment();
three.set({ hour: 15, minute: 0, second: 0, millisecond: 0 });
var now = moment();
if (three.diff(now, "hours") < 0) {
    $("#text15").css("background-color", "grey");
}
else if (three.diff(now, "hours") > 1) {
    $("#text15").css("background-color", "green");
}
else {
    $("#text15").css("background-color", "red");
};

$(function () {
    $("#button16").click(function () {
        var text = $("#text16").val();
        localStorage.setItem("textarea16", JSON.stringify(text));
    });
});

var four = moment();
four.set({ hour: 16, minute: 0, second: 0, millisecond: 0 });
var now = moment();
if (four.diff(now, "hours") < 0) {
    $("#text16").css("background-color", "grey");
}
else if (four.diff(now, "hours") > 1) {
    $("#text16").css("background-color", "green");
}
else {
    $("#text16").css("background-color", "red");
};

$(function () {
    $("#button17").click(function () {
        var text = $("#text17").val();
        localStorage.setItem("textarea17", JSON.stringify(text));
    });
});

var five = moment();
five.set({ hour: 17, minute: 0, second: 0, millisecond: 0 });
var now = moment();
if (five.diff(now, "hours") < 0) {
    $("#text17").css("background-color", "grey");
}
else if (five.diff(now, "hours") > 1) {
    $("#text17").css("background-color", "green");
}
else {
    $("#text17").css("background-color", "red");
};


$(document).ready(function () {
    document.getElementById("text9").value = JSON.parse(localStorage.getItem("textarea9"));
});
$(document).ready(function () {
    document.getElementById("text10").value = JSON.parse(localStorage.getItem("textarea10"));
});
$(document).ready(function () {
    document.getElementById("text11").value = JSON.parse(localStorage.getItem("textarea11"));
});
$(document).ready(function () {
    document.getElementById("text12").value = JSON.parse(localStorage.getItem("textarea12"));
});
$(document).ready(function () {
    document.getElementById("text13").value = JSON.parse(localStorage.getItem("textarea13"));
});
$(document).ready(function () {
    document.getElementById("text14").value = JSON.parse(localStorage.getItem("textarea14"));
});
$(document).ready(function () {
    document.getElementById("text15").value = JSON.parse(localStorage.getItem("textarea15"));
});
$(document).ready(function () {
    document.getElementById("text16").value = JSON.parse(localStorage.getItem("textarea16"));
});
$(document).ready(function () {
    document.getElementById("text17").value = JSON.parse(localStorage.getItem("textarea17"));
});