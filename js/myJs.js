$(document).ready(function() {
    var cart_items = 0;
    $('.add-c').click(function() {
        cart_items = cart_items + +($('.quantity').val())
        $('.var-items').html(cart_items)
    })
})