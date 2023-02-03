
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  preferredCountries: ["in"],
  separateDialCode: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});


const obj = {};
document.querySelector(".form-container").addEventListener('submit', (event) => {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;

  if (email.length < 16) {
    alert("You have entered an invalid email address");
  }
  else if (email.length > 30) {
    alert("You have entered an invalid email address");
  }
  else if (phone.length != 10) {
    alert("You have entered an invalid Mobile number");
  }
  else {
    alert("Survey Submitted");
    const phoneNumber = phoneInput.getNumber();
    obj.email = email;
    obj.phone = phoneNumber;
    localStorage.setItem("userDetails", JSON.stringify(obj));
    window.location = "./greet.html";
  }



});

