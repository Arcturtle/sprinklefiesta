cost = document.getElementById("cost")
total = document.getElementById("total")
amount = document.getElementById("amount")
plus = document.getElementById("+")
minus = document.getElementById("-")
orderbutton = document.getElementById("orderbutton")
donut = document.getElementById("donut")
donutbox = document.getElementById("donutbox")

function updatetotal() {
   total.textContent = Math.round(cost.textContent * amount.textContent * 100) / 100
}

plus.onclick = function() {
    amount.textContent = Number(amount.textContent) + 1
    updatetotal()
}

minus.onclick = function() {
    amount.textContent = Number(amount.textContent) - 1
    updatetotal()
}

orderbutton.onclick = function() {
    order = amount.textContent + "x " + donut.textContent
    donutbox.innerHTML = ""
    orderelem = document.createElement("strong")
    costelem = document.createElement("strong")
    orderelem.textContent = "Your order is " + order + ". "
    donutbox.appendChild(orderelem)
    costelem.textContent = "The total cost of your order is $" + total.textContent
    donutbox.appendChild(costelem)
    button = document.createElement("button")
    button.textContent = "Continue to home"
    button.classList.add("orderbutton")
    button.onclick = function() {
        location.href = "home.html"
    }
    donutbox.appendChild(button)
}

updatetotal()