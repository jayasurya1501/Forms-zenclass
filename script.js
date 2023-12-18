function addRecord() {
    var form = document.getElementById("myForm");
    var tableBody = document.getElementById("tableBody");
    var newRow = tableBody.insertRow();

    for (var i = 0; i < form.elements.length - 1; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = form.elements[i].value;
    }

    // Clear form fields
    form.reset();
}