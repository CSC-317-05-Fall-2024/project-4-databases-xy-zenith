const header = document.querySelector("header"); //select header nav and footer
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

function headerRender()
{
    let h1 = document.createElement("h1"); //h1
    h1.setAttribute("class", "index");
    
    var headerImg = document.createElement("img"); //header image
    headerImg.className = "locationImg";
    headerImg.src = "/images/hongKong.jpg";
    h1.appendChild(headerImg);

    var div = document.createElement("div"); //header text
    div.className = "locationText";
    div.innerText = "Hong Kong";
    h1.appendChild(div);

    header.appendChild(h1);
}

function navRender()
{
    nav.className = "navbar";

    var indexLink = document.createElement("a"); //home link
    indexLink.className = "navLink";
    indexLink.href = "/";
    indexLink.innerText = "Home";
    nav.appendChild(indexLink);

    var attractionsLink = document.createElement("a"); //attractions link
    attractionsLink.className = "navLink";
    attractionsLink.href = "/attractions";
    attractionsLink.innerText = "Attractions";
    nav.appendChild(attractionsLink);

    var restaurantsLink = document.createElement("a"); //restaurants link
    restaurantsLink.className = "navLink";
    restaurantsLink.href = "/restaurants";
    restaurantsLink.innerText = "Restaurants";
    nav.appendChild(restaurantsLink);

    var restaurantFormLink = document.createElement("a"); //new restaurant link
    restaurantFormLink.className = "navLink";
    restaurantFormLink.href = "/new-restaurant-form";
    restaurantFormLink.innerText = "New Restaurant";
    nav.appendChild(restaurantFormLink);
}

function footerRender()
{
    var div = document.createElement("div"); //footer text
    div.className = "contact";
    div.innerText = "Contact Info: ttang9@sfsu.edu";
    footer.appendChild(div);
}

headerRender(); //run functions to apply header nav and footer
navRender();
footerRender();