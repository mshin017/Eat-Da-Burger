$(function() {
$("#submit").on("click", function(event){
    var id = $(this).data("id");
    var eat = $(this).data("eat");

    var eatState = {
      devoured: eat
    };


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatState
    }).then(
      function() {
        console.log("changed devoured", eat);
        location.reload();
      }
    );
  });

})