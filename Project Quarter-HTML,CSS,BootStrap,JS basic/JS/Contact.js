$ = document.querySelector.bind(document);

window.onload = function () {
    declareEvents();

}

function declareEvents() {
    $("#id_form").addEventListener("submit", function (e) {
        e.preventDefault();
        let email1 = $("#id_email1").value;
        let email2 = $("#id_email2").value;
        if ($("#id_name").value.length < 2) {
            alert("Your name is too short!");

            return;
        }
        else if (email1.length < 5 || !email1.includes("@") || !email1.includes(".")) {
            alert("Email invalid, try again!");
            return;
        }
        else if (email1 != email2) {
            alert("The emails are not equal!")
            return;
        }
        alert("Thank you for your comment. We will call you back as soon as possible!");
        console.log("form work");
    })
}
