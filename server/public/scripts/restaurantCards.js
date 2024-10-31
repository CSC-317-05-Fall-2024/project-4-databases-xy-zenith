document.addEventListener("DOMContentLoaded", function()
{
    const deleteButtons = document.querySelectorAll(".deleteButton"); //select all delete buttons
    
    for(let button of deleteButtons)
    {
        button.addEventListener("click", (event) => //delete function when click
        {
            let restaurantId = button.id.split("-")[1]; //split = {"delete", "0"}
            fetch(`/api/restaurants/${restaurantId}`, {
                method: "DELETE"
            }).then(res => 
            {
                return res.json();
            }).then(data =>
            {
                console.log(data);
                window.location.reload(); //refresh page to show changes
            }).catch(error => {
                console.error("Error", error);
            });
        });
    }
})
