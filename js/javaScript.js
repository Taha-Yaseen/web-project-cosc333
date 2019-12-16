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

    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

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
})