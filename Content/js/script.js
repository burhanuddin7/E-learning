$(function(){
    progressBarUpdate();
});

function progressBarUpdate() {
    var total = $('.section-progress-total').text();
    var current = $('.section-progress-output').text();
    var progress = (current / total) * 100;
    $("#progressBar").css("width", progress + "%");
    if(total==current){
        $('.section-progress-icon').addClass('progress-complete');
    }
}