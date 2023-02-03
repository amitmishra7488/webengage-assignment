const user = JSON.parse(localStorage.getItem("userDetails"))

const display = () => {
    document.querySelector("#container").innerHTML = "";

    let thankYou = document.createElement("h1");
    thankYou.textContent = "Thanks a ton for taking out your precious time and for completing the survey";

    let email = document.createElement("p");
    email.textContent = `Email Address:   ${user.email}`;

    let phone = document.createElement("p");
    phone.textContent = `Contact Number:  ${user.phone}`;

    document.querySelector("#container").append(thankYou, email, phone)

}
display();