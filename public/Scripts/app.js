(function() {


    function validateForm() {
        let contactForm = document.forms[0];

        if (contactForm) {
            contactForm.noValidate = true;

            let errorMessage = document.getElementById("errorMessage");

            let firstName = document.getElementById("firstName");
            firstName.addEventListener("blur", (event) => {
                if (firstName.value.length < 2) {
                    firstName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid First Name with a length of 2 or more characters";
                } else {
                    errorMessage.hidden = true;
                }
            });

            let lastName = document.getElementById("lastName");
            lastName.addEventListener("blur", (event) => {
                if (lastName.value.length < 2) {
                    lastName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid Last Name with a length of 2 or more characters";
                } else {
                    errorMessage.hidden = true;
                }
            });

            let contactNumber = document.getElementById("contactNumber");
            contactNumber.addEventListener("keypress", (event) => {
                event = (event) ? event : window.event;
                let charCode = (event.which) ? event.which : event.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    return false;
                }
                return true;
            });

            let submitButton = document.getElementById("submitButton");

            submitButton.addEventListener("click", (event) => {
                event.preventDefault();
                console.log("Submit Button Clicked");
            });
        }
        return false;
    }

    function Start() {
        let formValidated = validateForm();
        if (formValidated) {
            console.log("successfully validated form");
        } else {
            console.warn("form not validated - does not exist");
        }
    }

    window.addEventListener("load", Start);

}());