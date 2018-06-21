$(function() {
$("#submit").on("click", function(event){
    var id = $(this).data("id");
    var eat = $(this).data("eat");

    var eatState = {
      devoured: eat
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatState
    }).then(
      function() {
        console.log("changed devoured", eat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})