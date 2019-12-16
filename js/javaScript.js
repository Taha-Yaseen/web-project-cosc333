$(document).ready(() => {
    $('[data-toggle="tooltip"]').tooltip()
    const books = [{
            isbn: "shi",
            imgSource: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37836/large_thumb_stage.jpg",
            title: "Title",
            price: "200",
            description: "Description of the book. Lorem ipsum..",
            rating: 3
        },
        {
            isbn: "shi",
            imgSource: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37836/large_thumb_stage.jpg",
            title: "Title",
            price: "200",
            description: "Description of the book. Lorem ipsum..",
            rating: 3
        },
        {
            isbn: "shi",
            imgSource: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37836/large_thumb_stage.jpg",
            title: "Title teni",
            price: "200",
            description: "Description of the book. Lorem ipsum..",
            rating: 3
        },
        {
            isbn: "shi",
            imgSource: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37836/large_thumb_stage.jpg",
            title: "Title",
            price: "200",
            description: "Description of the book. Lorem ipsum..",
            rating: 3
        }, {
            isbn: "shi",
            imgSource: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37836/large_thumb_stage.jpg",
            title: "Title",
            price: "200",
            description: "Description of the book. Lorem ipsum..",
            rating: 3
        }, {
            isbn: "shi",
            imgSource: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37836/large_thumb_stage.jpg",
            title: "Title",
            price: "200",
            description: "Description of the book. Lorem ipsum..",
            rating: 3
        },
        {
            isbn: "shi",
            imgSource: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37836/large_thumb_stage.jpg",
            title: "Title",
            price: "200",
            description: "Description of the book. Lorem ipsum..",
            rating: 3
        }
    ]
    $("body").on('click', ".tag-chips i", function() {
        $(this).parent().remove()
    })

    $("#searchButton").on('click', () => {
        if (!$("#bookNameSearch input").val() && !$("#authorNameSearch input").val())
            return
        books.forEach(book => {
            $("#cardsContainer").append(`
            <div class="book-card w-100 row md-3">
                    <div class="book-cover view overlay w-100 h-100 col-md-2">
                        <img src="${book.imgSource}" alt="image cover" class="h-100 mx-auto">
                        <div class="mask rgba-white-light">
                        </div>
                    </div>
                    <div class="book-info col-md-10 h-100">
                        <div class="row">
                            <div class="col">
                                <h2>${book.title}</h2>
                            </div>
                            <div class="col" style="text-align: right;">
                                <h2>${book.price}</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col h-100">
                                <div class="flex-row">
                                    <div class="flex-col">
                                        <p><strong>By:</strong> Nasser, Mohammad</p>
                                        <p><strong>Description:</strong>${book.description}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p><strong>ISBN:</strong>${book.isbn}</p>
                                    </div>
                                    <button class="btn waves-effect waves-light blue-gradient">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			`)
        })
        $('#cardsContainer h1').html('Results for: ' + $("#bookNameSearch input").val())
        $('#cardsContainer').prepend(res)
        $('body').hide().show(0);
    })

    $(".search-container input[type=text]").on("keydown", function(e) {
        let newVal = $(this).val()
        if (e.keyCode === 32 && !newVal.length)
            return e.preventDefault()
        else if (e.keyCode != 13)
            return
        if (newVal.trim().length > 0) {
            $(this).val("")
            $(this).before(`
				<div class="tag-chips waves-effect waves-light">
					<p>${newVal}</p>
					<i class="fas fa-times"></i>
				</div>
			`)
        }
    })

    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();

            reader.onload = function(e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-upload").on('change', function() {
        readURL(this);
    });

    $(".upload-button").on('click', function() {
        $(".file-upload").click();
    });

    $("body").on("click", "#login-button", function() {
        $("#signUpFormAnimator").fadeOut(150, () => $("#loginFormAnimator").fadeIn(150))
        $(this).removeClass("white")
        $("#signup-button").addClass("white")
    })
    $("body").on("click", "#signup-button", function() {
        $("#loginFormAnimator").fadeOut(150, () => $("#signUpFormAnimator").fadeIn(150))
        $(this).removeClass("white")
        $("#login-button").addClass("white")
    })

    function numberOnly(str) {
        return str.length && !/[^0-9]/gm.test(str)
    }

    function alphaOnly(str) {
        return str.length && !/[^a-z]/gmi.test(str)
    }

    function alphanumeric(str) {
        return /[a-z]+/i.test(str) && /[0-9]+/.test(str) && !/([^\w\s]|_| )/.test(str)
    }

    var loginFormElements = {
        email: $('#loginEmail'),
        emailValidationBox: $('#loginEmailValidationBox'),
        password: $('#loginPassword'),
        passwordValidationBox: $('#loginPasswordValidationBox')
    }

    var validatedBeforeL = false

    function isValidEmailAddress(emailAddress) {
        let pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i)
        return pattern.test(emailAddress)
    }

    function isValidPassword(password, validationBox) {
        if (password.length < 8) {
            validationBox.html('At least 8 characters long')
            return false
        }
        if (!alphanumeric(password)) {
            validationBox.html('Must contain characters and numbers')
            return false
        }
        return true
    }

    function validatePassword(password, validationBox) {
        let valid = isValidPassword(password.val(), validationBox)
        if (valid) {
            password.addClass('is-valid')
            password.removeClass('is-invalid')
            validationBox.css('display', 'none')
        } else {
            password.addClass('is-invalid')
            password.removeClass('is-valid')
            validationBox.css('display', 'block')
        }
    }

    function validateEmail(email, validationBox) {
        if (isValidEmailAddress(email.val())) {
            email.removeClass('is-invalid')
            email.addClass('is-valid')
            validationBox.css('display', 'none')
        } else {
            validationBox.html('Invalid email address. Example: name@example.com')
            email.removeClass('is-valid')
            email.addClass('is-invalid')
            validationBox.css('display', 'block')
        }
    }

    function validateLogin() {
        if (!validatedBeforeL)
            return true
        validateEmail(loginFormElements.email, loginFormElements.emailValidationBox)
        validatePassword(loginFormElements.password, loginFormElements.passwordValidationBox)
    }

    let loginForm = $('#loginForm')
    loginForm.submit(() => {
        validatedBeforeL = true;
        validateLogin()
    })

    loginFormElements.email.keydown(() => validatedBeforeL ? validateLogin() : null)
    loginFormElements.password.keydown(() => validatedBeforeL ? validateLogin() : null)

    signupFormElements = {
        email: $('#signupEmail'),
        emailValidationBox: $('#signupEmailValidationBox'),
        phone: $('#signupPhone'),
        phoneValidationBox: $('#signupPhoneValidationBox'),
        password: $('#signupPassword'),
        passwordValidationBox: $('#signupPasswordValidationBox'),
        passwordC: $('#signupPasswordC'),
        passwordCValidationBox: $('#signupPasswordCValidationBox'),
        firstName: $('#signupFirstName'),
        firstNameValidationBox: $('#signupFirstNameValidationBox'),
        lastName: $('#signupLastName'),
        lastNameValidationBox: $('#signupLastNameValidationBox'),
    }

    validatedBeforeS = false

    function validatePasswordS(password, confirmPassword, pValidationBox, pCValidationBox) {
        let valid = isValidPassword(password.val(), pValidationBox)
        if (valid) {
            password.addClass('is-valid')
            confirmPassword.addClass('is-valid')
            password.removeClass('is-invalid')
            confirmPassword.removeClass('is-invalid')
            pValidationBox.css('display', 'none')
            if (password.val() !== confirmPassword.val()) {
                confirmPassword.addClass('is-invalid')
                confirmPassword.removeClass('is-valid')
                pCValidationBox.html('Passwords do not match')
                pCValidationBox.css('display', 'block')
            }
        } else {
            password.addClass('is-invalid')
            confirmPassword.addClass('is-invalid')
            password.removeClass('is-valid')
            confirmPassword.removeClass('is-valid')
            pValidationBox.css('display', 'block')
        }
    }

    function validateName(firstName, lastName, fValidationBox, lValidationBox) {
        console.log(alphaOnly(firstName.val()))
        console.log(firstName.val())
        if (alphaOnly(firstName.val())) {
            firstName.addClass('is-valid')
            firstName.removeClass('is-invalid')
            fValidationBox.css('display', 'none')
        } else {
            firstName.removeClass('is-valid')
            firstName.addClass('is-invalid')
            fValidationBox.css('display', 'block')
        }
        if (alphaOnly(lastName.val())) {
            lastName.addClass('is-valid')
            lastName.removeClass('is-invalid')
            lValidationBox.css('display', 'none')
        } else {
            lastName.removeClass('is-valid')
            lastName.addClass('is-invalid')
            lValidationBox.css('display', 'block')
        }
    }

    function validatePhone(phone, validationBox) {
        if (numberOnly(phone.val()) && phone.val().length > 6) {
            phone.addClass('is-valid')
            phone.removeClass('is-invalid')
            validationBox.css('display', 'none')
        } else {
            phone.removeClass('is-valid')
            phone.addClass('is-invalid')
            validationBox.css('display', 'block')
        }
    }

    function validateSignup() {
        if (!validatedBeforeS)
            return true
        validateEmail(signupFormElements.email, signupFormElements.emailValidationBox)
        validatePasswordS(signupFormElements.password, signupFormElements.passwordC, signupFormElements.passwordValidationBox, signupFormElements.passwordCValidationBox)
        validatePhone(signupFormElements.phone, signupFormElements.phoneValidationBox)
        validateName(signupFormElements.firstName, signupFormElements.lastName, signupFormElements.firstNameValidationBox, signupFormElements.lastNameValidationBox)
    }

    signupFormElements.email.keydown(() => validatedBeforeS ? validateSignup() : null)
    signupFormElements.password.keydown(() => validatedBeforeS ? validateSignup() : null)
    signupFormElements.phone.keydown(() => validatedBeforeS ? validateSignup() : null)
    signupFormElements.passwordC.keydown(() => validatedBeforeS ? validateSignup() : null)
    signupFormElements.firstName.keydown(() => validatedBeforeS ? validateSignup() : null)
    signupFormElements.lastName.keydown(() => validatedBeforeS ? validateSignup() : null)

    let signupForm = $('#signupForm')
    signupForm.submit(() => {
        validatedBeforeS = true
        validateSignup()
    })
})