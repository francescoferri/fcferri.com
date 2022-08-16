var elems = document.getElementsByClassName("job");

for (var i = 0; i < elems.length; i++) {
    if (elems[i].id == "study-build") {
        elems[i].classList.add("active");
    } else {
        elems[i].classList.remove("active");
    }
}

function showDiv(id) {
    // Reset all active panels
    var elems = document.getElementsByClassName("job");

    for (var i = 0; i < elems.length; i++) {
        if (elems[i].id == id) {
            elems[i].classList.add("active");
        } else {
            elems[i].classList.remove("active");
        }
    }
}
