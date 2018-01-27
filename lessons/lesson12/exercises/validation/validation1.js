var buttons = document.getElementsByTagName("button"); // [button#submit, button#back]
var submitButton = buttons[0]; // button#submit
submitButton.onclick = validate; // submitButton.onclick = validate;

function validate() {
    var form = document.forms["test"]; // form[name="test"]
    var input = form["testInput"]; // input[name="testInput"]
    var value = input.value; // value == "blablabla";

    if (!isNumeric(value)) { // false as "blalabla" is not a number
        console.log("ERROR");
        var element = document.createElement("div"); // virtual <div></div>
        element.className = "error"; // virtual <div class="error"></div>
        var text = document.createTextNode("Should be numeric!"); // text: Should be numeric!
        element.appendChild(text); // virtual <div class="error">Should be numeric!</div>

        document.getElementById("info").appendChild(element); // addind to div#info

        setTimeout(function () {
            element.parentNode.removeChild(element); // element == div.error
                                                     // element.parentNode == div#info
                                                     // div#info remove child div.error
        }, 500)
    }
}

function isNumeric(n) {
    return isFinite(n) && !isNaN(parseFloat(n));
}