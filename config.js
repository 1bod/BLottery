function enfrm() {

    if (document.getElementById("animColors").checked) {
        document.getElementById("animColors1").disabled = false;
        document.getElementById("animColors2").disabled = false;
        document.getElementById("animDeg").disabled = false;
        document.getElementById("textColor").disabled = false;
    } else {
        document.getElementById("animColors1").disabled = true;
        document.getElementById("animColors2").disabled = true;
        document.getElementById("animDeg").disabled = true;
        document.getElementById("textColor").disabled = true;
    }
}