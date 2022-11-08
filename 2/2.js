function setClick(id) {
    var td = document.getElementById(id);
    td.style.background = "red";
}





function createHall() {
    var row = document.getElementById("row").value;
    var col = document.getElementById("col").value;
    var table = document.createElement("table");
    table.classList.add("table1");
    for (let i = 0; i < row; i++) {
        var tr = document.createElement("tr");
        for (let j = 1; j <= col; j++) {
            var tdId = String.fromCharCode(i + 65) + j;
            var td = document.createElement("td");
            var text = document.createTextNode(tdId);
            td.appendChild(text);
            tr.appendChild(td);
            td.classList.add("td1");
            td.setAttribute("id", tdId);
            td.setAttribute("onclick", "setClick(this.id)");
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
