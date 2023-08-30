//Define UI Element
let addButton1 = document.querySelector(".addButton1")
let addButton2 = document.querySelector(".addButton2")
let addButton3 = document.querySelector(".addButton3")
let addButton4 = document.querySelector(".addButton4")

let cartRows = document.querySelector(".cartRows")
let cartTable = document.querySelector(".cartTable")

//Define Event listeners
addButton1.addEventListener("click", addToCart)
addButton2.addEventListener("click", addToCart)
addButton3.addEventListener("click", addToCart)
addButton4.addEventListener("click", addToCart)

let remove_Buttons = []


//Define Functions

function addToCart(e) {

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = cartTable.insertRow(-1); // We are adding at the end

    row.className = `row${cartTable.rows.length - 1}`

    var button = document.createElement("BUTTON");
    button.innerText = "Remove";


    // Create table cells
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);

    switch (e.target.className) {
        case "addButton1":
            c2.innerText = "Product 1"
            c3.innerText = 100
            button.className = `btn_remove${cartTable.rows.length - 1}`;
            remove_Buttons.push(button)
            remove_Buttons[remove_Buttons.length - 1].addEventListener("click", removeFromCart)
            break;
        case "addButton2":
            c2.innerText = "Product 2"
            c3.innerText = 200
            button.className = `btn_remove${cartTable.rows.length - 1}`;
            remove_Buttons.push(button);
            remove_Buttons[remove_Buttons.length - 1].addEventListener("click", removeFromCart)
            break;
        case "addButton3":
            c2.innerText = "Product 3"
            c3.innerText = 300
            button.className = `btn_remove${cartTable.rows.length - 1}`;
            remove_Buttons.push(button);
            remove_Buttons[remove_Buttons.length - 1].addEventListener("click", removeFromCart)
            break;
        case "addButton4":
            c2.innerText = "Product 4"
            c3.innerText = 400
            button.className = `btn_remove${cartTable.rows.length - 1}`;
            remove_Buttons.push(button);
            remove_Buttons[remove_Buttons.length - 1].addEventListener("click", removeFromCart)
            break;
        default:
            break;
    }

    function removeFromCart(e) {
        e.target.parentElement.parentElement.remove()
    }

    // Add data to c1 and c2
    c1.innerText = cartTable.rows.length - 1

    c4.append(button);

}