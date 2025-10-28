document.addEventListener("DOMContentLoaded", function () {
  ("use strict");
  const locationInput = document.getElementById("explore_location");
  const experienceInput = document.getElementById("explore_experience");
  const dynamicTextSpan = document.getElementById("explore_dynamic_text");

  function checkInitialProfileSelection() {
    const explorerRadioButton = document.querySelector(
      'input[name="registertype2"].explorer'
    );
    if (explorerRadioButton && explorerRadioButton.checked) {
      autoupdate_explorer_guide("Explorer");
    }
  }
  checkInitialProfileSelection();

  function updateDynamicExplorerText() {
    const dynamicTextSpan = document.getElementById(
      "dynamic-explorer-label-text"
    );
    const locationInput = document.getElementById("explore_location");
    const experienceInput = document.getElementById("explore_experience");

    if (!dynamicTextSpan || !locationInput || !experienceInput) return;

    const location = locationInput.value.trim();
    const experience = experienceInput.value.trim();

    if (!location && !experience) {
      dynamicTextSpan.textContent = "I am exploring places and experiences";
      return;
    }

    let text = "I am here to explore";

    if (location) {
      text += ` ${location}`;
    }
    if (experience) {
      text += ` for ${experience}`;
    }

    dynamicTextSpan.textContent = text;
  }

  if (locationInput && experienceInput) {
    locationInput.addEventListener("keyup", updateDynamicExplorerText);
    experienceInput.addEventListener("keyup", updateDynamicExplorerText);
  }
  window.fetchdataall = async function (url, accessToken = null) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }

    const response = await fetch(url, {
      method: "GET", // or "POST" if body is used
      headers,
    });

    return response.json();
  };

  window.apihandler = async function (body, url) {
    const headers = {
      Authorization: "Bearer {accessToken}",
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      return data;
    } catch (err) {
      return { error: true, message: err.message };
    }
  };

  //toggle password
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Change icon text
    this.textContent = type === "password" ? "👁️" : "🙈";
  });

  // checkbox js

  const checkboxes = document.querySelectorAll(
    'input[name="interestcategory"]'
  );
  const explorercampusinput = document.querySelector("#explorer-campus-input2");
  var output = "";

  checkboxes.forEach((cb) => {
    cb.checked = false;
    cb.addEventListener("change", () => {
      const checkedValues = Array.from(
        document.querySelectorAll('input[name="interestcategory"]:checked')
      ).map((el) => el.value);
      if (typeof window.updateTextRotation === "function") {
        window.updateTextRotation();
      }

      output = checkedValues.length > 0 ? checkedValues.join(",") : "";
      setCookie("explorer-campus-input", output, 7);
    });
  });

  const registertype = document.querySelectorAll('input[name="registertype"]');
  const registertype2 = document.querySelectorAll(
    'input[name="registertype2"]'
  );

  registertype.forEach((cb) => {
    cb.addEventListener("change", (e) => {
      let testomany = document.querySelector("#zeochat-testimony");
      let typeheading = document.querySelector("#typeheading");
      let profiletype = document.querySelector("#profiletype");
      let exploreinterest = document.querySelector("#exploreinterest");
      const explorer = document.querySelector(
        'input[value="explorer"]'
      ).checked;
      const guide = document.querySelector('input[value="Guide"]').checked;

      if (explorer && guide) {
        setCookie("guide", false, 7);
        setCookie("explorer", false, 7);
        $("#user-type-select h3.i-am strong").text(
          "Please select single profile"
        );

        testomany.display = "none";

        return;
      }

      if ((e.target.value == "Guide" && e.target.checked) || guide) {
        setCookie("guide", true, 7);
        setCookie("explorer", false, 7);
        typeheading.innerHTML = "What Guides are saying";
        exploreinterest.innerHTML = "What interests you?";
        testomany.display = "block";
        profiletype.value = "guide";

        document.querySelector("#firstguide").display = "block";
        document.querySelector("#firstexplore").display = "none";

        $(".print-user-type").text("Guide");
        $(".print-campus, .explorer-ambassdor-comma").css("display", "inline");
        $(".user-type-icon").toggleClass("icon-compass2 icon-shield2");

        $(".campus-tell").fadeIn(1000);
        $("#ambassador-campus-input").fadeIn(1000);
        $(".email-intro").fadeIn(1000);
        $(".ambassador-email").fadeIn(1000);
        $(".email-intro .fullname").fadeIn(1000);
        $(".campus-is").css("display", "block");
        $(".next-step h3").css("display", "block");
        $(".hosting-chat").css("display", "block");
        $(".waitlist-and-jumpstart").css("display", "inline");
        $(".waitlist-and-jumpstart.mid-or").addClass("amb-or");
        $(".waitlist-selection").css("display", "none");
        $("#profile-select input.email-primary").attr(
          "placeholder",
          "Enter your email address"
        );
        $("#waitlist-form .waitlist-and-jumpstart h3").css("display", "none");
        $(".ambassador-view").css("display", "block"); // view control
        $(".explorer-view").css("display", "none"); // view control
        $(".recaptcha-intro .g-recaptcha").fadeIn(1000);
        $(".ambassador-box").addClass("selected-box");
        $(".ambassador-box input").addClass("selected-input");
        $(".ambassador-box .select-ambassador-button").fadeOut(1000);
        $(".ambassador-box .qualify-ambassador-button").fadeIn(1000);

        $(".explorer-box").removeClass("selected-box");
        $(".explorer-box input").removeClass("selected-input");
        $(".explorer-box .select-explorer-button").fadeIn(1000);
        $(".explorer-box .launch-explorer-button").fadeOut(1000);
        $(".explorer-box .explore-explorer-button").css("display", "none");
        $(".explorer-box .zeochat-explorer-button").css("display", "none");
        $("#user-type-select h3.i-am strong").text("I'd like to be a Guide");
        $(".menu-icon .menu-ambassadors").show();
        $(".menu-icon .menu-explorers").hide();

        document.querySelector("#forExplorerSelect").style.display = "none";
      } else if (
        (e.target.value == "explorer" && e.target.checked) ||
        explorer
      ) {
        setCookie("guide", false, 7);
        setCookie("explorer", true, 7);
        typeheading.innerHTML = "What Explorers are saying";
        testomany.display = "block";
        profiletype.value = "explorer";
        exploreinterest.innerHTML = "";

        document.querySelector("#firstguide").display = "none";
        document.querySelector("#firstexplore").display = "block";
        document.querySelector("#forExplorerSelect").style.display = "block";
        $(".print-user-type").text("Explorer");
        $(".print-campus, .explorer-ambassdor-comma").css("display", "none");
        $(".user-type-icon").toggleClass("icon-compass2 icon-shield2");
        $(".ambassador-view").css("display", "none"); // view control
        $(".explorer-view").css("display", "block"); // view control
        $(".ambassador-box").removeClass("selected-box");
        $(".ambassador-box input").removeClass("selected-input");
        $(".ambassador-box .select-ambassador-button").fadeIn(1000);
        $(".ambassador-box .qualify-ambassador-button").fadeOut(1000);
        $(".ambassador-box .start-earning-ambassador-button").css(
          "display",
          "none"
        );
        $(".ambassador-box .apply-ambassador-button").css("display", "none");

        $(".campus-tell").fadeIn(1000);
        $("#explorer-campus-input").fadeOut(1000);
        $(".email-intro").fadeIn(1000);
        $(".email-intro .fullname").fadeIn(1000);
        $(".explorer-email").fadeIn(1000);
        $(".campus-interests").css("display", "block");
        $(".next-step h3").css("display", "block");
        $(".exploring-chat").css("display", "block");
        $(".waitlist-selection h3").css("display", "none");
        $(".waitlist-and-jumpstart").removeClass("expand");
        $(".recaptcha-intro .g-recaptcha").fadeIn(1000);
        $(".explorer-box").addClass("selected-box");
        $(".explorer-box input").addClass("selected-input");
        $(".explorer-box .select-explorer-button").fadeOut(1000);
        $(".explorer-box .launch-explorer-button").fadeIn(1000);
        $(".ambassador-view").css("display", "none"); // view control
        $(".explorer-view").css("display", "block"); // view control
        $("#user-type-select h3.i-am strong").text("I'd like to be an Explorer");
      } else {
        testomany.display = "none";
        $("#user-type-select h3.i-am strong").text("Select Your profile");
      }
      // typechecked();
      // console.log("Selected:", e.target.value);
    });
  });

  registertype2.forEach((cb) => {
    cb.addEventListener("change", (e) => {
      let testomany = document.querySelector("#zeochat-testimony");
      let typeheading = document.querySelector("#typeheading");
      let profiletype = document.querySelector("#profiletype");
      let selected = document.querySelector(
        'input[name="registertype2"]:checked'
      ).value;
      profiletype.value = selected;
      autoupdate_explorer_guide(selected);
    });
  });

  // update data
  function autoupdate_explorer_guide(type) {
    let testomany = document.querySelector("#zeochat-testimony");
    let typeheading = document.querySelector("#typeheading");
    let profiletype = document.querySelector("#profiletype");
    let exploreinterest = document.querySelector("#exploreinterest");
    let modalSubtitle = document.getElementById("modal-subtitle");
    let forGuideSelect = document.querySelectorAll(".forGuideSelect");

    const locationRequestInput = document.getElementById("explore_location");
    const experienceRequestInput =
      document.getElementById("explore_experience");

    if (type == "Guide") {
      forGuideSelect.forEach((el) => (el.style.display = "block"));
      setCookie("guide", true, 7);
      setCookie("explorer", false, 7);
      typeheading.innerHTML = "What Guides are saying";
      exploreinterest.innerHTML = "What interests you?";
      $(".explorer-fields").hide();

      locationRequestInput.disabled = true;
      experienceRequestInput.disabled = true;

      testomany.display = "block";
      profiletype.value = "guide";
      document.getElementById("explorer-campus-input").style.display = "block";
      document.getElementById("explorer-rate-input").style.display = "none";
      document.querySelector("#forExplorerSelect").style.display = "none";
      document.querySelector("#firstguide").display = "block";
      document.querySelector("#firstexplore").display = "none";
      document.querySelector(
        'input[name="registertype"][value="Guide"]'
      ).checked = true;

      $(".print-user-type").text("Guide");
      $(".print-campus, .explorer-ambassdor-comma").css("display", "inline");
      $(".user-type-icon").toggleClass("icon-compass2 icon-shield2");

      $(".campus-tell").fadeIn(1000);
      $("#ambassador-campus-input").fadeIn(1000);
      $(".email-intro").fadeIn(1000);
      $(".ambassador-email").fadeIn(1000);
      $(".email-intro .fullname").fadeIn(1000);
      $(".campus-is").css("display", "block");
      $(".next-step h3").css("display", "block");
      $(".hosting-chat").css("display", "block");
      $(".waitlist-and-jumpstart").css("display", "inline");
      $(".waitlist-and-jumpstart.mid-or").addClass("amb-or");
      $(".waitlist-selection").css("display", "none");
      $("#profile-select input.email-primary").attr(
        "placeholder",
        "Enter your email address"
      );
      $("#waitlist-form .waitlist-and-jumpstart h3").css("display", "none");
      $(".ambassador-view").css("display", "block"); // view control
      $(".explorer-view").css("display", "none"); // view control
      $(".recaptcha-intro .g-recaptcha").fadeIn(1000);
      $(".ambassador-box").addClass("selected-box");
      $(".ambassador-box input").addClass("selected-input");
      $(".ambassador-box .select-ambassador-button").fadeOut(1000);
      $(".ambassador-box .qualify-ambassador-button").fadeIn(1000);

      $(".explorer-box").removeClass("selected-box");
      $(".explorer-box input").removeClass("selected-input");
      $(".explorer-box .select-explorer-button").fadeIn(1000);
      $(".explorer-box .launch-explorer-button").fadeOut(1000);
      $(".explorer-box .explore-explorer-button").css("display", "none");
      $(".explorer-box .zeochat-explorer-button").css("display", "none");
      $("#user-type-select h3.i-am strong").text("I'd like to be a Guide");

      modalSubtitle.textContent =
        "Earn Money by sharing your world with explorers";
      exploreinterest.textContent = "What's your location?";
      document.getElementById("explorer-campus-input2").placeholder =
        "Enter your streaming location";
    } else {
      document.querySelector("#forExplorerSelect").style.display = "block";
      $(".explorer-fields").show();
      forGuideSelect.forEach((el) => (el.style.display = "none"));
      locationRequestInput.disabled = false;
      experienceRequestInput.disabled = false;
      updateDynamicExplorerText();
      setCookie("guide", false, 7);
      setCookie("explorer", true, 7);
      typeheading.innerHTML = "What Explorers are saying";
      testomany.display = "block";
      profiletype.value = "explorer";
      document.getElementById("explorer-campus-input").style.display = "none";
      document.getElementById("explorer-rate-input").style.display = "block";
      exploreinterest.innerHTML = "";
      document.querySelector("#firstguide").display = "none";
      document.querySelector("#firstexplore").display = "block";
      document.querySelector(
        'input[name="registertype"][value="explorer"]'
      ).checked = true;
      $(".print-user-type").text("Explorer");
      $(".print-campus, .explorer-ambassdor-comma").css("display", "none");
      $(".user-type-icon").toggleClass("icon-compass2 icon-shield2");
      $(".ambassador-view").css("display", "none"); // view control
      $(".explorer-view").css("display", "block"); // view control
      $(".ambassador-box").removeClass("selected-box");
      $(".ambassador-box input").removeClass("selected-input");
      $(".ambassador-box .select-ambassador-button").fadeIn(1000);
      $(".ambassador-box .qualify-ambassador-button").fadeOut(1000);
      $(".ambassador-box .start-earning-ambassador-button").css(
        "display",
        "none"
      );
      $(".ambassador-box .apply-ambassador-button").css("display", "none");

      $(".campus-tell").fadeIn(1000);
      // $("#explorer-campus-input").fadeIn(1000);
      $(".email-intro").fadeIn(1000);
      $(".email-intro .fullname").fadeIn(1000);
      $(".explorer-email").fadeIn(1000);
      $(".campus-interests").css("display", "block");
      $(".next-step h3").css("display", "block");
      $(".exploring-chat").css("display", "block");
      $(".waitlist-selection h3").css("display", "none");
      $(".waitlist-and-jumpstart").removeClass("expand");
      $(".recaptcha-intro .g-recaptcha").fadeIn(1000);
      $(".explorer-box").addClass("selected-box");
      $(".explorer-box input").addClass("selected-input");
      $(".explorer-box .select-explorer-button").fadeOut(1000);
      $(".explorer-box .launch-explorer-button").fadeIn(1000);
      $(".ambassador-view").css("display", "none"); // view control
      $(".explorer-view").css("display", "block"); // view control
      $("#user-type-select h3.i-am strong").text("I'd like to be an Explorer");
      modalSubtitle.textContent = "Connect with Guides To Explore the world";
      exploreinterest.textContent = "What are your interests?";
      document.getElementById("explorer-campus-input2").placeholder = "Enter here";
     
    }
  }

  // function uppendchecked() {
  //   var intrestchecked = getCookie("explorer-campus-input");
  //   if (intrestchecked) {
  //     const targetInput = document.getElementById("explorer-campus-input2");

  //     if (targetInput) {
  //       targetInput.value = intrestchecked;
  //     }

  //     let checkedArray = intrestchecked.split(",");
  //     checkedArray.forEach((cb) => {
  //       const checkbox = document.getElementById("take_" + cb);
  //       if (checkbox) {
  //         checkbox.checked = true;
  //       }
  //     });

  //     if (typeof window.updateTextRotation === "function") {
  //       window.updateTextRotation();
  //     }
  //   } else {
  //     console.warn('Cookie "explorer-campus-input" is not set.');
  //   }
  // }

  function uppendchecked() {
    var intrestchecked = getCookie("explorer-campus-input");
    if (intrestchecked) {
     
      let checkedArray = intrestchecked.split(",");
      checkedArray.forEach((cb) => {
        const checkbox = document.getElementById("take_" + cb);
        if (checkbox) {
          checkbox.checked = true;
        }
      });

      if (typeof window.updateTextRotation === "function") {
        window.updateTextRotation();
      }
    } else {
      console.warn('Cookie "explorer-campus-input" is not set.');
    }
  }

  function typechecked() {
    let testomany1 = document.querySelector("#zeochat-testimony");
    let typeheading2 = document.querySelector("#typeheading");
    let selectedeventdata = getCookie("explorer");
    // console.log("selectedeventdata", selectedeventdata);
    if (selectedeventdata === "true") {
      $(".checkbox.explorer").click();

      let registertype = document.querySelectorAll(".checkbox.explorer");
      registertype.forEach((cb) => {
        cb.checked = true;
      });

      testomany1.display = "block";
      typeheading2.innerHTML = "What Explorers are saying";

      $(".checkbox.ambassador").prop("checked", false);
      $("#user-type-select h3.i-am strong").text("I'd like to be an Explorer");
      $(".ambassador-view").css("display", "none"); // view control
      $(".explorer-view").css("display", "block"); // view control
      $("#profiletype").val("Explorer");
    } else {
      $(".checkbox.ambassador").click();
      $(".checkbox.explorer").prop("checked", false);
      $("#user-type-select h3.i-am strong").text("I'd like to be a Guide");
      $(".ambassador-view").css("display", "block"); // view control
      $(".explorer-view").css("display", "none"); // view control
      $("#profiletype").val("Guide");
      testomany1.display = "block";
      typeheading2.innerHTML = "What Guides are saying";
    }
  }

  //   function typechecked() {
  //   const isExplorer = getCookie("explorer");
  //   const isGuide = getCookie("guide");

  //   if (isExplorer === 'true') {
  //     autoupdate_explorer_guide("Explorer");
  //   } else if (isGuide === 'true') {
  //     autoupdate_explorer_guide("Guide");
  //   } else {
  //     // Pehli baar user aaya hai, to default Explorer dikha do
  //     autoupdate_explorer_guide("Explorer");
  //   }
  // }

  //for Zeochat (verb) = An insightful, student-driven connection
  typechecked();

  //for I would like to connect for
  uppendchecked();

  $(".item-six").click();
});

async function onSubmit(token) {
  // e.preventDefault();
  const loginerror = document.getElementById("loginerror");

  let url = apiurl + "user/login";
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!username || !password) {
    goToTopall();
    loginerror.textContent = "Username and password required";
    loginerror.style.color = "red";
    return;
  }

  let body = {
    username: username,
    password: password,
    captcha: token,
  };
  loader_start_Stop("block");
  const data = await apihandler(body, url);
  loader_start_Stop("none");
  if (data.error) {
    loginerror.textContent = data.message;
    loginerror.style.color = "red";
  } else {
    loginerror.textContent = "Login successful!";
    loginerror.style.color = "green";
    setCookie(prefix + "token", data.access_token, 1, "zeochat.com");

    let cacheusers = getCookie("loginuser"); // existing cookie
    let users = cacheusers ? cacheusers.split(",") : [];

    // Only add if not already present
    if (!users.includes(username)) {
      users.push(username);
    }

    // Save back to cookie
    setCookie("loginuser", users.join(","));
    url = apiurl + "me";
    let da = await fetchdataall(url, data.access_token);
    window.location.href = "https://zeochat.com/" + da.data.user_name;
  }
}

// async function onRegister(token) {
//   console.log("sdfsffsdfsdf");
//   console.log("reCAPTCHA successful. Token: " + token);
//   const loginerror = document.getElementById("errorregister");
//   const full_name = document.getElementById("fullname").value;
//   const email1 = document.getElementById("guide-email").value;
//   const email2 = document.getElementById("explorer-email").value;
//   const intrests = document.getElementById("explorer-campus-input2").value;
//   const profiletype = document.getElementById("profiletype").value;
//   const username = document.getElementById("usernameinsert").value;
//   const userpassword = document.getElementById("userpassword").value;
//   let country_iso = Intl.DateTimeFormat()
//     .resolvedOptions()
//     .locale.split("-")
//     .pop();
//   let email = email1 != "" ? email1 : email2;

//   if (validateRegister(full_name, email, username, intrests, userpassword)) {
//     goToTopall();
//     return;
//   }

//   let url = apiurl + "/register";
//   let code = "+91";

//   let body = {
//     agree: 1,
//     code: code,
//     country_iso: country_iso,
//     captcha: token,
//     email: email,
//     full_name: full_name,
//     password: userpassword,
//     user_type: profiletype,
//     full_name: full_name,
//     subscribe_notification: true,
//     interest: intrests,
//     user_name: username,
//   };

//   loader_start_Stop("block");
//   const data = await apihandler(body, url);
//   loader_start_Stop("none");
//   if (data.error) {
//     showMessage(data.message, "red");
//   } else {
//     showMessage("Register successful!", "green");

//     const emailData = {
//       fullName: full_name,
//       email: email,
//       profileType: profiletype,
//       location: document.getElementById("explore_location").value,
//       experience: document.getElementById("explore_experience").value,
//       interests: intrests,
//     };
//     await sendRegistrationEmail(emailData);
//   }
// }

document
  .getElementById("waitlist-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitButton = document.getElementById("registerBtnfinal");
    const originalButtonText = submitButton.value;

    // Collect all form values upfront
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("explorer-email").value;
    const profileType = document
      .getElementById("profiletype")
      .value.trim()
      .toLowerCase();
    const website = document.querySelector(".input-website").value;
    const campusInput2 = document.getElementById(
      "explorer-campus-input2"
    ).value;
    const streamexperience = document.getElementById("streamexperience").value;
    const rate = document.getElementById("rate").value;
    const rate_duration = document.getElementById("rate_duration").value;
    const explore_location = document.getElementById("explore_location").value;
    const explore_experience =
      document.getElementById("explore_experience").value;
    const whenexperience = document.getElementById("whenexperience").value;
    const whenexperiencetime =
      document.getElementById("whenexperiencetime").value;
    const explorer_rate = document.getElementById("explorer-rate-input2").value;

    if (!fullName || !email) {
      showMessage("Please fill in your name and email.", "red");
      return;
    }

    submitButton.disabled = true;
    submitButton.value = "Connecting...";
    showMessage("Connecting...", "blue");

    grecaptcha.ready(async function () {
      const token = await grecaptcha.execute(SITE_KEY, {
        action: "submit",
      });

      let payload = {
        fullname: fullName,
        email: email,
        profileType: profileType,
        website: website,
        "g-recaptcha-response": token,
      };

      if (profileType === "guide") {
        payload["location"] = campusInput2;
        payload.streamexperience = streamexperience;
        payload.rate = rate;
        payload.rate_duration = rate_duration;
        payload.stream_date = whenexperience;
      } else if (profileType === "explorer") {
        payload.explore_location = explore_location;
        payload.explore_experience = explore_experience;
        // payload["interests"] = campusInput2;
        payload.stream_date = whenexperience;
        payload.stream_time = whenexperiencetime;
        payload.explorer_rate = explorer_rate;
      }

      const success = await sendRegistrationEmail(payload);

      submitButton.disabled = false;
      submitButton.value = originalButtonText;

      if (success) {
        document.getElementById("waitlist-form").style.display = "none";
        document.getElementById("form-success-message").style.display = "block";
        document.querySelector("#profile-select .modal-header").style.display =
          "none";
      }
    });
  });

if (sitekey == "") {
  document
    .getElementById("registerBtnfinal")
    .addEventListener("click", function (e) {
      e.preventDefault();
      // console.log("form submitted");
      // alert("form submitted");
      onRegister(prefix);
    });
}

function validateRegister(full_name, email, username, intrests, userpassword) {
  // Validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
  const strongPasswordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const color = "red";

  // Field validations
  if (!full_name) {
    showMessage("Full name is required", color);
    return true;
  }

  if (!email) {
    showMessage("Email is required", color);
    return true;
  }

  if (!emailPattern.test(email)) {
    showMessage("Please enter a valid email address", color);
    return true;
  }

  if (!username) {
    showMessage("Username is required", color);
    return true;
  }

  if (!usernamePattern.test(username)) {
    showMessage(
      "Username must be 3–20 characters (letters, numbers, underscores only)",
      color
    );
    return true;
  }

  if (!intrests) {
    showMessage("Please enter your interests", color);
    return true;
  }

  if (!userpassword) {
    showMessage("Password is required", color);
    return true;
  }

  if (!strongPasswordPattern.test(userpassword)) {
    showMessage(
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
      color
    );
    return true;
  }

  return false;
}

function showMessage(message, color) {
  const loginerror = document.getElementById("errorregister");
  loginerror.textContent = message;
  loginerror.style.color = "white";
  loginerror.style.background = color;

  // Auto-remove after 10 seconds
  setTimeout(() => {
    loginerror.textContent = "";
    loginerror.style.background = "";
  }, 10000);
}

function goToTopall() {
  $("html, body").animate(
    {
      scrollTop: $("html").offset().top,
    },
    500,
    "easeInOutExpo"
  );

  return false;
}

function loader_start_Stop(status) {
  goToTopall();
  let loader = document.querySelector(".loader");
  loader.style.display = status;
}

async function sendRegistrationEmail(formData) {
  // console.log(formData);
  // debugger;
  const validateApiUrl = "https://zeochat.com/api/v1/user/validate/identity";
  const registerApiUrl = "https://zeochat.com/api/v1/register-custom";

  const registerButton = document.getElementById("registerBtnfinal");
  const originalButtonText = "Connect";

  try {
    registerButton.disabled = true;
    registerButton.value = "Validating...";

    const validateResponse = await fetch(validateApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({ email: formData.email, check_exist: 1 }),
    });

    const validationData = await validateResponse.json();

    if (
      !validateResponse.ok ||
      validationData.message === "The email has already been taken."
    ) {
      showMessage(
        validationData.message || "This email is already registered.",
        "red"
      );

      return false;
    }

    registerButton.value = "Processing...";

    const registerResponse = await fetch(registerApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const registerData = await registerResponse.json();

    if (!registerResponse.ok) {
      let errorMessage =
        registerData.message || "An error occurred during registration.";
      if (registerData.errors) {
        errorMessage = Object.values(registerData.errors).flat().join(" ");
      }
      showMessage(errorMessage, "red");
      return false;
    }

    // document.getElementById("waitlist-form").reset();
    showMessage(
      registerData.message || "Success! Your application has been sent.",
      "green"
    );
    return true;
  } catch (error) {
    console.error("Fetch Error:", error);
    showMessage(
      "Could not connect to the server. Please check your connection and try again.",
      "red"
    );
    return false;
  } finally {
    registerButton.disabled = false;
    registerButton.value = originalButtonText;
  }
}

document
  .getElementById("close-success-modal")
  .addEventListener("click", function () {
    $("#profile-select").modal("hide");
  });

$("#profile-select").on("hidden.bs.modal", function () {
  //  document.getElementById("waitlist-form").reset();

  document.getElementById("waitlist-form").style.display = "block";
  document.getElementById("form-success-message").style.display = "none";
  document.querySelector("#profile-select .modal-header").style.display =
    "block";

  const errorDiv = document.getElementById("errorregister");
  if (errorDiv) {
    errorDiv.textContent = "";
    errorDiv.style.background = "";
  }
});

function filterNumeric(input) {
  let value = input.value.replace(/\D/g, "");

  if (value === "") {
    input.value = "$";
    return;
  }

  input.value = "$" + value;
}

function enforceMinimum(input) {
  let number = parseInt(input.value.replace(/\D/g, ""));

  if (isNaN(number) || number < 5) {
    number = 5;
  }

  input.value = "$" + number;
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("explorer-rate-input2");
  enforceMinimum(input);
});

$(document).ready(function () {
  $("#book-appointment-btn").on("click", function (e) {
    e.preventDefault();
    const calendlyUrl = "https://calendly.com/brianbr831/book-appointment/";
    Calendly.initPopupWidget({
      url: calendlyUrl,
    });
    return false;
  });

  window.addEventListener("message", function (e) {
    if (e.data.event && e.data.event === "calendly.event_scheduled") {
      Calendly.closePopupWidget();
      const payload = e.data.payload;
      fetchFullAppointmentDetails(payload);
    }
  });
});

function fetchFullAppointmentDetails(payload) {
  fetch("save-appointment.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((fullDetails) => {
      const inviteeName = fullDetails.resource.name;
    
      Swal.fire({
          icon: 'success',
          title: 'Appointment Confirmed!',
          text: 'Thank you, ' + inviteeName + '! We have received your booking details.',
          confirmButtonText: 'Okay!'
      });
    })
    .catch((error) => {
      console.error(
        "Step 4: FAILED! There was a problem fetching details from the server:"
      );
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops... Something went wrong",
        text: "We couldn't book your appointment right now. Please try again later.",
        confirmButtonText: "Okay",
      });
    });
}
