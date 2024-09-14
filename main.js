const input = document.querySelector("input");
const button = document.querySelector("button");
const output = document.querySelector("#output");

input.addEventListener("input", function () {
    if (input.value.length > 0) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "disabled");
    }

    const file = input.files[0];

    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            const data = evt.target.result.trim().split("\n");
            const table = document.createElement("table");
            for (let i = 0; i < data.length; i++) {
                const row = document.createElement("tr");
                const columns = data[i].split(";");
                const col1 = document.createElement("td");
                const col2 = document.createElement("td");
                const col3 = document.createElement("td");
                col1.classList.add("col1");
                col2.classList.add("col2");
                col3.classList.add("col3");
                col1.textContent = columns[0];
                col2.textContent = "-";
                col3.textContent = columns[1];
                row.appendChild(col1);
                row.appendChild(col2);
                row.appendChild(col3);
                table.appendChild(row);
            }
            output.innerHTML = "";
            output.appendChild(table);
            // document.write(data);
        };
        reader.onerror = function (evt) {
            document.write("error reading file");
        };
    }
});

button.addEventListener("click", function () {
    print();
});
