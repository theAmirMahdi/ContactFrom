let emailValidation = document.querySelector("#email");
let mobileValidation = document.querySelector("#fnumber");
let submitValidation = document.querySelector(".btn");

submitValidation.addEventListener("click", function () {
  let emailElem = emailValidation.value;
  let mobileElem = mobileValidation.value;

  let emailIsValid = validateEmail(emailElem);
  let mobileIsValid = validateMobile(mobileElem);

  if (emailIsValid && mobileIsValid) {
    alert("Form submitted successfully!");
  }
});

function validateEmail(email) {
  if (email.length <= 100 && email.length >= 5 && email.trim() !== "") {
    return true;
  } else {
    let reason = "";
    switch (true) {
      case email.length === 0:
        reason = "Email is empty";
        break;
      case email.length < 5:
        reason = "Email is too short (less than 5 characters)";
        break;
      case email.length > 100:
        reason = "Email is too long (more than 100 characters)";
        break;
      default:
        reason = "Email contains invalid characters";
    }
    alert(reason);
    return false;
  }
}

function validateMobile(mobile) {
  if (mobile.trim().length === 11 && mobile.trim() !== "") {
    console.log("mobile is okay");
    return true;
  } else {
    reason = "";
    switch (true) {
      case mobile.length === 0:
        reason = "Mobile is empty";
        break;
      case mobile.length != 11:
        reason = "Mobile number should be eqaul 11";
        break;
      default:
        reason = "Mobile contains invalid characters";
    }
    alert(reason);
    return false;
  }
}
