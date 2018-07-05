$(document).ready(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).val();
    var devoured = $(this).data("devoured");
    console.log(devoured);

    var newDevourState = {
      devoured: devoured
    };

    // Send the PUT request.
    $.ajax({
      url: "/api/burgers/" + id,
      method: "PUT",
      data: newDevourState
    }).then(
      function (response) {
        console.log(response);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $("#stacey-struggle").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("I am in here");

    var newBurger = {
      burger_name: $("#enter_text").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});