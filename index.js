const myLibrary = [
    {
        name: 2,
        surname: 3,
        quantity: 3,
        status: 2
    },
    {
        name: 2,
        surname: 3,
        quantity: "cool",
        status: true
    }];


function addBookToLibrary() {
}

let table = document.getElementById("table");

for (let book of myLibrary) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = book.name;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = book.surname;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = book.quantity;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.textContent = book.status;
    tr.appendChild(td4);

    table.appendChild(tr);
}

const save = document.querySelector(".save");
const dialog = document.querySelector("#form");


console.log(dialog)

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");


// "Close" button closes the dialog
save.addEventListener("click", () => {
    console.log(24939857)
    myLibrary.push({

        name: input1.value,
        surname: input2.value,
        quantity: input3.value,
    })
    dialog.close();
});

