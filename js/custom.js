$(document).ready(function() {

    $('.user img').click(function(){
        var userelement = $(this).parent();
        if(userelement.hasClass('active')){
            userelement.removeClass('active');
        }else{
            userelement.addClass('active');
        }
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".user").length === 0) {
            $('.user').removeClass('active');
            
        }
    });
});