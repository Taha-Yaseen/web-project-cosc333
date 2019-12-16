$(document).ready(function() {

    $('.add-c').click(function() {
        var cart_items = $('span.var-items').html();
        var counti = $(".quantity").val()
        cart_items = parseFloat(cart_items) + +parseFloat(counti)

        $('.var-items').html(cart_items)
    })
    $('.rateMe3').each(function() {

        $(this).mdbRate();
    })

})