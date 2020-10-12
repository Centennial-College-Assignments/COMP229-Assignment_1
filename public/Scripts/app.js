/* File Name: app.js
   Author: Devesh Kumar
   File Description: Custom JS File  */


"use strict";

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
            contactNumber.addEventListener("blur", (event) => {
                if (contactNumber.value !== "" && !contactNumber.value.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)) {
                    contactNumber.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid Phone number with area code and country code (If International Number)";
                } else {
                    errorMessage.hidden = true;
                }
            });


            let emailAddress = document.getElementById("emailAddress");
            emailAddress.addEventListener("blur", (event) => {
                if (!emailAddress.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                    emailAddress.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid email address.";
                } else {
                    errorMessage.hidden = true;
                }
            });

        }
        return false;
    }

    function Start() {
        validateForm();
    }

    window.addEventListener("load", Start);

}());