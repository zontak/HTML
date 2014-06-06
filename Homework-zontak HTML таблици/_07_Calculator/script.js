
(function () {
    $(document).ready(function () {
        var canTypeSign = false;
        $("button").on("click", function (event) {
            var button = event.target.id;
            if (button == "=") {
                if (canTypeSign) {
                    var expression = $("#field").val();
                    $("#field").val(eval(expression));
                    canTypeSign = false;
                } else {
                    alert("You must enter digit!");
                }
            } else if (button == "C") {
                $("#field").val("");
                canTypeSign = false;
            } else if (isInt(button)) {
                var expression = $("#field").val();
                expression += button;
                $("#field").val(expression);
                canTypeSign = true;
            } else {
                if (canTypeSign) {
                    var expression = $("#field").val();
                    expression += " " + button + " ";
                    $("#field").val(expression);
                    canTypeSign = false;
                } else {
                    alert("You must enter digit!");
                }
            }
        });
    });
})();

function isInt(x) {
    var y = parseInt(x, 10);
    return !isNaN(y) && x == y && x.toString() == y.toString();
}