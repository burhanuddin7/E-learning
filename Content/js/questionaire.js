$(function(){
    /*Visualizing things on Hover */
    $('#dvRatingScaleQuestion li').on('mouseover', function() {
        var ratingListNo = parseInt($(this).data('value'), 10); 
        $(this).parent().children('li.survey-container-rank').each(function(e) {
            if (e < ratingListNo) {
                $(this).addClass('rank-hover');
            } else {
                $(this).removeClass('rank-hover');
            }
        });
    }).on('mouseout', function() {
        $(this).parent().children('li.survey-container-rank').each(function(e) {
            $(this).removeClass('rank-hover');
        });
    });
    /*Action to perform on click */
    $('#dvRatingScaleQuestion li').on('click', function() {
        var ratingListNo = parseInt($(this).data('value'), 10);
        var ratingList = $(this).parent().children('li.survey-container-rank');
        for (i = 0; i < ratingList.length; i++) {
            $(ratingList[i]).removeClass('rank-selected');
        }
        for (i = 0; i < ratingListNo; i++) {
            $(ratingList[i]).addClass('rank-selected');
        }
        var ratingValue = parseInt($('#dvRatingScaleQuestion li.rank-selected').last().data('value'), 10);
        console.log(ratingValue);  //To get the value of the selected rating
    });
});