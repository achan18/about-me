// Disables submit button until all text fields are entered
(function() {
  $("form input, #message").keyup(function() {
    var empty = false;
    $("form input, #message").each(function() {
      if ($(this).val() == "") {
        empty = true;
      }
    });

    if (empty) {
      $("#email-submit").attr("disabled", "disabled");
    } else {
      $("#email-submit").removeAttr("disabled");
    }
  });
})();
