$(function() {
  $(".accordion-header").click(function() {
    $(".accordion-content").slideUp();
    if ($(this).next(".accordion-content").is(":hidden")) {
      $(this).next(".accordion-content").slideDown();
    }
  });

  $(".todos").find("button").click(function() {
    $.ajax({
      url: "https://dummyjson.com/todo",
      type: "GET",
      dataType: 'json',
      success: function(res){
        res.todos.forEach(function(data) {
          $(".todos").find("ul").append(`<li>${data.todo}</li>`);
        });
        console.log("detail", res.todos)
      },
      error: function(error){
        console.error(error)
      }
    })
  })

})