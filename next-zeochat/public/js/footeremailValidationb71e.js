$(document).ready(function () {
  $("form.qbstp-header-subscribe").on("submit", function (e) {
    e.preventDefault();

    const email = $("#email-control").val();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   console.log("email:---", email);
    if (email && emailPattern.test(email)) {
      setCookie("user_email_entry", email, 7);
      $("#profile-select").modal("show");
    } else {
      $("#email-control")
        .val("")
        .attr("placeholder", "Please enter a valid email to start!")
        .focus();
    }
  });

  $("#profile-select").on("show.bs.modal", function () {
    const savedEmail = getCookie("user_email_entry");
    if (savedEmail) {
      $("#explorer-email").val(savedEmail);
      $("#guide-email").val(savedEmail);
    }
  });

  $("#email-control").on("input", function () {
    const email = $(this).val();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const startButton = $(".button-footer");
    const emailValidationMessage = $("#email-validation-message");

    if (email && emailPattern.test(email)) {
      startButton
        .prop("disabled", false)
        .removeClass("disabled-button")
        .addClass("enabled-button");
      emailValidationMessage.text("Valid email address!").css("color", "green");
    } else {
      startButton
        .prop("disabled", true)
        .removeClass("enabled-button")
        .addClass("disabled-button");
      emailValidationMessage
        .text("Please enter a valid email address.")
        .css("color", "red");
    }
  });
});
