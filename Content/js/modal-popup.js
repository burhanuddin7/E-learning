function openModalPopUp(featureId, modalHeight, modalWidth){
    var modalObj= $('#'+ featureId);
    modalObj.height(modalHeight);
    modalObj.width(modalWidth);
    $('html').css('overflow-y', 'hidden');
    modalObj.closest('.modalOverlayContainer').show();
    modalObj.fadeIn();
}
function closeModalPopUp(obj){
    $('html').css('overflow-y', 'auto');
    $(obj).closest('.modal-container-wrapper').hide();
    $(obj).closest('.modalOverlayContainer').hide();
    $('#unlockedVideoPlayerBtn').removeClass('btn-disabled');
}

function playModalVideoPlayer(obj){
    $(obj).hide();
    if($(obj).parent().find('video').is(":visible")){
        $(obj).parent().find('video').get(0).play();
    }else{
        $(obj).parent().find("iframe")[0].src += "?autoplay=1&mute=1";
    }
}

function closeModalVideoPlayer(obj){
    if($(obj).parents('.modal-container-main-info').find('video').is(":visible")){
        var modalVideoSrc= $(obj).parents('.modal-container-main-info').find('video source').attr('src');
        $(obj).parents('.modal-container-main-info').find('video').attr('src', modalVideoSrc);
    }else{
        var modalFrameSrc= $(obj).parents('.modal-container-main-info').find('iframe').attr('src');
        if(modalFrameSrc.indexOf('?') > -1){
            modalFrameSrc = modalFrameSrc.substring(0 ,modalFrameSrc.indexOf('?'));
        }
        $(obj).parents('.modal-container-main-info').find("iframe")[0].src= modalFrameSrc;
    }
    closeModalPopUp(obj);
    $(obj).parents('.modal-container-main-info').find('.modal-video-overlay').show();
}

function playUnlockedVideo(obj){
    playModalVideoPlayer($('#unlockedVideoOverlay'));
    $(obj).addClass('btn-disabled');
}