const myLibrary = [
    {
        name: 2,
        autor: 3,
        quantity: 3,
        status: true
    },
    {
        name: 2,
        autor: 3,
        quantity: 2,
        status: true
    }];




let table = document.querySelector(".library-table");

function createOption(text, value) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    return option
}

const form = document.querySelector(".new-book-form");

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const inputName = document.querySelector(".new-book-form__name");
    const valueName = inputName.value;

    const inputAutor = document.querySelector(".new-book-form__autor");
    const valueAutor = inputAutor.value;

    const inputQuantity = document.querySelector(".new-book-form__quantity");
    const valueQuantity = inputQuantity.value;

    const select = document.querySelector(".status-select"); // выбираем элемент select
    const valueSelect = select.value

    let newBook = {
        name: valueName,
        autor: valueAutor,
        quantity: valueQuantity,
        status: valueSelect
    }

    myLibrary.push(newBook)

})

for (let element of myLibrary) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = element.name;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = element.autor;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = element.quantity;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    const select = document.createElement("select"); // выбираем элемент select

    const Option1 = CreateOption("Не начато", "Не начато")
    select.appendChild(Option1)
    const Option2 = CreateOption("В процессе", "В процессе")
    select.appendChild(Option2)
    const Option3 = CreateOption("Прочитано", "Прочитано")
    select.appendChild(Option3)


    td4.appendChild(select)
    tr.appendChild(td4);

    table.appendChild(tr);
}
