const handleSubmit = async (event) => //handle submit event
{
    event.preventDefault(); 

    const name = document.getElementById("newRestaurantName").value;
    const phone = document.getElementById("newRestaurantTel").value;
    const address = document.getElementById("newRestaurantAddress").value;
    const photo = document.getElementById("newRestaurantPhoto").value;

    fetch("/api/restaurants", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, address, photo }), //shorthand of name: name...
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        window.location.href = "/restaurants"; //direct to restaurant page
    }).catch(error => {
        console.error("Error: ", error);
    });
}

document.addEventListener("DOMContentLoaded", () =>
{
    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit); //attach handleSubmit to submit event
});
