let itemsArray = localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")) : [];
localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

function addtour() {
    event.preventDefault();
    let image = document.getElementById("image").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let temp =
        ' <div class="card"> <img src = "' + image + '" alt = ""><div class = "card-text"> <h1>' + name + '</h1> <p> KZT' + price + ' </p> </> </div>';
    document.getElementById("list").innerHTML += temp;
    itemsArray.push(temp);
    localStorage.setItem("items", JSON.stringify(itemsArray));

}

data.forEach((item) => {
    document.getElementById("list").innerHTML += item;
});

document.getElementById("button_clr").addEventListener("click", function () {
    localStorage.clear();
});