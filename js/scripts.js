//user interface logic
$(document).ready(function() {

//when the my cv button is clicked, the show cv div should be shown
$("#cv").click(function(event) {
    event.preventDefault();
    $("#Abugacv").removeClass('hide-div');
    $("#backimg").addClass('bgview');   
    $("#backimg").removeClass('bghome');
});

//when the my hidecv button is clicked, the cv should hbe hidden
$("#hidecv").click(function(event) {
    event.preventDefault();
    $("#Abugacv").addClass('hide-div');
    $("#backimg").addClass('bghome');   
    $("#backimg").removeClass('bgview');
});

});