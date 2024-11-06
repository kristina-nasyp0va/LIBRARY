const myLibrary = [
    {
        name: 2,
        autor: 3,
        quantity: 3,
        status: 2
    },
    {
        name: 2,
        autor: 3,
        quantity: 2,
        status: true
    }];




let table = document.querySelector(".BooksCollection");

function CreateOption(text, value) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    return option
}

for (let book of myLibrary) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = book.name;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = book.autor;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = book.quantity;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    const Select = document.createElement("select"); // выбираем элемент select


    const Option1 = CreateOption("Не начато", "Не начато")
    Select.appendChild(Option1)
    const Option2 = CreateOption("В процессе", "В процессе")
    Select.appendChild(Option2)
    const Option3 = CreateOption("Прочитано", "Прочитано")
    Select.appendChild(Option3)


    td4.appendChild(Select)
    tr.appendChild(td4);

    table.appendChild(tr);
}



const Form = document.querySelector(".formAddBook");

Form.addEventListener("submit", function (event) {
    event.preventDefault()

    const Input1 = document.querySelector(".Input1");
    const Value1 = Input1.value;

    const Select = document.querySelector(".status"); // выбираем элемент select
    const SelectValue = Select.value

    let NewBook = {
        name: Value1,
        autor: 2,
        quantity: 3,
        status: Select
    }

    myLibrary.push(NewBook)
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = NewBook.name;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = NewBook.autor;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = NewBook.quantity;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    const Option1 = CreateOption("Не начато", "Не начато")
    const Option2 = CreateOption("В процессе", "В процессе")
    const Option3 = CreateOption("Прочитано", "Прочитано")
    Select.appendChild(Option1)
    Select.appendChild(Option2)
    Select.appendChild(Option3)

    if (Option1.value = SelectValue) {
        Select.value = Option1
    } else if (Option2.value = SelectValue) {
        Select.value = Option2
    } else if (Option3.value = SelectValue) {
        Select.value = Option3
    }

    td4.textContent = NewBook.status;
    tr.appendChild(td4);

    table.appendChild(tr);

})

//const Input1 = document.querySelector(".Input1");
//const Value1 = Input1.value;
//console.log(Value1);

console.log(Form)

