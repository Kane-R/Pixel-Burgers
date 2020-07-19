$(function() {
    
    setFillings();
    devoured();
    
    $("#add-burger-form").on("submit", event => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        
        const name = $('#add-burger-input').val()
        
        $.ajax("/api/burgers", {
                type: "POST",
                data:  { name }, 
        })
        .then( () => {
            console.log("Added a burger!");
            // Reload the page to get the updated list
            location.reload();
        })
        .catch( () => res.json(error) );
    });

    $(".delete-button").on("click", event => {
        $(event).stopPropagation

        const id = $(event.currentTarget).parent('.burger-wrapper').data('id')

        $.ajax(`/api/burgers/${id}`, {
                type: "DELETE"
        })
        .then(() => {
            console.log("deleted Burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });


    
    $(".burger-wrapper").on("click", event => {
        //get the id of the burger to devour
        const id = $(event.currentTarget).data('id')
    
        $.ajax("/api/burgers", {
            type: "PUT",
            data: { id }
        })
        .then(() => {
            console.log("Burger devoured!");
            // Reload the page to get the updated list
            location.reload();
        })
        .catch((error) => console.log(error))
    });
});