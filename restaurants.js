class Restaurant {
    name;
    tags = [];
    costrangemin;
    costrangemax;
    logo;
    link;
    constructor(name, logo, tags, costrangemin, costrangemax, link) {
        this.name = name
        this.logo = logo
        this.tags = tags
        this.costrangemin = costrangemin
        this.costrangemax = costrangemax
        this.link = link
    }
}

restaurants = [new Restaurant("Krispy Kreme", "logos/krispykreme.png", ["Sweet", "Tasty"], 8.99, 21.89, "krispykreme.html"), new Restaurant("Donut King", "logos/donutking.png", ["Hot", "Fresh"], 9.99, 19.99, "donutking.html")]

for (let i = 0; i < restaurants.length; i++) {
    rest = restaurants[i]
    box = document.createElement("div")
    imgdiv = document.createElement("div")
    box.classList.add("restbox")
    box.classList.add("right")
    box.classList.add("resttext")
    restlogo = document.createElement("img")
    restlogo.src = rest.logo
    restlogo.align = "left"
    restlogo.classList.add("logo")
    restname = document.createElement("strong")
    restname.textContent = rest.name
    restcostrange = document.createElement("p")
    restcostrange.textContent = "$" + rest.costrangemin + "-" + rest.costrangemax
    resttags = document.createElement("p")
    resttags.textContent = "Tags: " + rest.tags
    imgdiv.appendChild(restlogo)
    box.appendChild(restname)
    box.appendChild(imgdiv)
    box.appendChild(restcostrange)
    box.appendChild(resttags)
    body = document.getElementById("home")
    body.appendChild(box)
    body.appendChild(document.createElement("br"))
}