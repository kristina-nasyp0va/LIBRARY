const myLibrary = [
    {
        name: "Мартин Иден",
        autor: "Джек Лондон",
        quantity: 605,
        status: "status-select__read",
        id: "id9684350275072326"
    },
    {
        name: "Гарри Поттер и методы рационального мышления",
        autor: "Элиезер Юдковский",
        quantity: 1200,
        status: "status-select__not-started",
        id: "id9684350275033333"
    }];

function createOption(text, value) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    return option
}

let table = document.querySelector(".library-table");

function initialRender(library) {
    for (let element of library) {
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
        select.classList.add("status-select")

        const Option1 = createOption("Не начато", "Не начато")
        select.appendChild(Option1)
        const Option2 = createOption("В процессе", "В процессе")
        select.appendChild(Option2)
        const Option3 = createOption("Прочитано", "Прочитано")
        select.appendChild(Option3)

        if (element["status"] == "status-select__not-started") {
            Option1.setAttribute("selected", "")
        } else if (element["status"] == "status-select__in-progress") {
            Option2.setAttribute("selected", "")
        } else if (element["status"] == "status-select__read") {
            Option3.setAttribute("selected", "")
        }

        td4.appendChild(select)
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        const button__delete = document.createElement("button")
        button__delete.textContent = "Удалить"
        button__delete.setAttribute("id", element.id)
        button__delete.setAttribute("class", "delete")
        td5.appendChild(button__delete)
        tr.appendChild(td5);

        table.appendChild(tr);
    }
}

initialRender(myLibrary)

const deleteButtons = document.querySelectorAll(".delete");

// Добавляем обработчик события для каждой кнопки
deleteButtons.forEach(button => {
    button.addEventListener("click", function () {
        const tdParent = this.parentElement;
        const trParent = this.tdParent;
        // Получаем ID книги из атрибута data-id
        const bookId = this.getAttribute("id");
        myLibrary = myLibrary.filter(book => book.id != bookId);
        // Удаляем элемент списка из DOM
        tdParent.remove();
        trParent.remove();

    });
});

const form = document.querySelector(".new-book-form");

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const inputName = document.querySelector(".new-book-form__name");
    const valueName = inputName.value;

    const inputAutor = document.querySelector(".new-book-form__autor");
    const valueAutor = inputAutor.value;

    const inputQuantity = document.querySelector(".new-book-form__quantity");
    const valueQuantity = inputQuantity.value;

    const select = document.querySelector(".status-select__add"); // выбираем элемент select
    const valueSelect = select.value
    console.log(valueSelect)

    let newBook = {
        name: valueName,
        autor: valueAutor,
        quantity: valueQuantity,
        status: valueSelect,
        id: "id" + Math.random().toString(10).slice(2)
    }

    myLibrary.push(newBook)
    console.log(form)
    render(newBook)
})

function render(book) {

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = book["name"];
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = book["autor"];
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = book["quantity"];
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    const select = document.createElement("select"); // выбираем элемент select

    const Option1 = createOption("Не начато", "Не начато")
    select.appendChild(Option1)
    const Option2 = createOption("В процессе", "В процессе")
    select.appendChild(Option2)
    const Option3 = createOption("Прочитано", "Прочитано")
    select.appendChild(Option3)

    if (book["status"] == "status-select__not-started") {
        Option1.setAttribute("selected", "")
    } else if (book["status"] == "status-select__in-progress") {
        Option2.setAttribute("selected", "")
    } else if (book["status"] == "status-select__read") {
        Option3.setAttribute("selected", "")
    }

    td4.appendChild(select)
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    const button__delete = document.createElement("button")
    button__delete.textContent = "Удалить"
    button__delete.setAttribute("id", book.id)
    button__delete.setAttribute("class", "delete")
    td5.appendChild(button__delete)
    tr.appendChild(td5);

    table.appendChild(tr);

}

