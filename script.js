var result = document.getElementById("result");

var input = document.getElementById("input");

function createRow(col1, col2) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = col1;
    tr.appendChild(td1);

    var td2 = document.createElement("td");
    td2.innerText = col2;
    tr.appendChild(td2);

    return tr;
}

function count() {
    var text = document.getElementById("input").value;

    result.classList.remove("invisible");

    var result_body = document.getElementById("result-body");

    result_body.innerHTML = "";

    for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        if (letter == ' ') {
            letter = "space";
        }
        var row = document.getElementById(letter);
        if (row) {
            var count = parseInt(row.children[1].innerText);
            row.children[1].innerText = count + 1;
        } else {
            var row = createRow(letter, 1);
            row.id = letter;
            result_body.appendChild(row);
        }
    }
}

var btn = document.getElementById("btn");

btn.addEventListener("click", count);

input.addEventListener("keyup", count);
