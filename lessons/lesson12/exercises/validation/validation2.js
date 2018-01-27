var buttons = document.getElementsByTagName("button");
var submitButton = buttons[0];
submitButton.addEventListener("click", validate);

function validate() {
    var form = document.forms["test"];
    var input = form["testInput"];
    var value = input.value;

    if (!isNumeric(value)) {
        console.log("ERROR");

        var element = document.createElement("div");
        element.className = "error";
        var text = document.createTextNode("Should be numeric!");
        element.appendChild(text);

        document.getElementById("info").appendChild(element);
    }
}

function isNumeric(n) {
    return isFinite(n) && !isNaN(parseFloat(n));
}