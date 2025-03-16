function add() {
    if (document.querySelector("#input").value.trim() === "") {
        return; // Do not add empty items
    }
    let li = document.createElement("li");
    let ul = document.querySelector("ul");
    li.textContent = document.querySelector("#input").value;
    ul.append(li);
    document.querySelector("#input").value = "";
    rem(li);
}

function rem(li) {
    let btn = document.createElement("button");
    btn.textContent = "Remove";
    li.append(btn);
    btn.onclick = function () {
        li.remove();
    };
}
