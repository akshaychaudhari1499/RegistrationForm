function validateForm() {
    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let mobileNumber = document.getElementById('mobile').value
    let country = document.getElementById('country').value
    let gender = document.getElementsByName("gender")
    let error = false

    if (firstName.length >= 3 && isNaN(firstName)) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

    if (lastName.length >= 3 && isNaN(lastName)) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }

    if (
        email.length != 0 &&
        email.includes("@") &&
        email.includes(".") &&
        email.indexOf("@") != 0 &&
        email.length - email.lastIndexOf(".") >= 3
    ) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
    } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
        error = true
    }

    if (mobileNumber.length == 10) {
        document.getElementById('mobile-valid').style.display = 'block'
        document.getElementById('mobile-invalid').style.display = 'none'
    } else {
        document.getElementById('mobile-invalid').style.display = 'block'
        document.getElementById('mobile-valid').style.display = 'none'
        error = true
    }

    let a = 0;
    for (i = 0; i < gender.length; i++) {
        if (gender.item(i).checked == false) {
            a++;
        }
    }

    if (a != gender.length) {
        document.getElementById('gender-valid').style.display = 'block'
        document.getElementById('gender-invalid').style.display = 'none'
    } else {
        document.getElementById('gender-invalid').style.display = 'block'
        document.getElementById('gender-valid').style.display = 'none'
        error = true
    }
    if (country != 'None') {
        document.getElementById('country-valid').style.display = 'block'
        document.getElementById('country-invalid').style.display = 'none'
    } else {
        document.getElementById('country-invalid').style.display = 'block'
        document.getElementById('country-valid').style.display = 'none'
        error = true
    }



    if (!error) {
        alert('Your details have been saved successfully!')

        document.getElementById('registration-form').reset()

        let validFeedbacks = document.getElementsByClassName('valid-feedback')
        for (let i = 0; i < validFeedbacks.length; i++) {
            validFeedbacks[i].style.display = 'none'
        }
        let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
        for (let i = 0; i < invalidFeedbacks.length; i++) {
            invalidFeedbacks[i].style.display = 'none'
        }
    }
}

