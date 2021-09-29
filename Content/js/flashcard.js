var totalFlashCard= $('.section-quiz-flashcard .section-quiz-flashcard-list').length;
$(function(){
    $('.section-quiz-flashcard-count .flashcard-total-count').text(totalFlashCard);
    $('.flashcard-current-count').text($('.section-quiz-flashcard-list:visible').data('id'));
});

function GoNext(){
    var currentId = $('.section-quiz-flashcard-list:visible').data('id');
    var nextId = currentId+1;
    $('.flashcard-current-count').text(nextId);
    $('[data-id="'+nextId+'"]').fadeIn(100);
    $('[data-id="'+currentId+'"]').hide();
    if($('#btnPrevFlashCard:hidden').length == 1){
        $('#btnPrevFlashCard').show();
    }
    if(nextId == totalFlashCard){
        $('#btnNextFlashCard').hide();
        $('#btnQuizFlashCard').show();
    }
}

function GoPrev(){
    var currentId = $('.section-quiz-flashcard-list:visible').data('id');
    var prevId = currentId-1;
    $('[data-id="'+currentId+'"]').hide();
    $('.flashcard-current-count').text(prevId);
    $('[data-id="'+prevId+'"]').fadeIn(100);
    $('#btnQuizFlashCard').hide();
    if($('#btnNextFlashCard:hidden').length == 1){
        $('#btnNextFlashCard').show();
    }
    if(prevId == 1){
        $('#btnNextFlashCard').show();
        $('#btnPrevFlashCard').hide();
    }
}
