function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var c = document.querySelector("#operator").value;
    var calculate;

    if (c == "add") {
        calculate = a + b;
    } else if (c == "min") {
        calculate = a - b;
    } else if ( c == "div") {
        calculate = a / b;
    } else if ( c == "mul") {
        calculate = a * b;
    }

    document.querySelector("#result").innerHTML = calculate;
}