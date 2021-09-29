$(function(){
    $('.setting-section-tabs').click(function(){
        $('.setting-section-tabs').removeClass('active-setting-tab');
        $(this).addClass('active-setting-tab');
        var activeTab= $(this).attr('data-id');
        $('.setting-section-tab-info').hide();
        $('#'+ activeTab).fadeIn();
        $(this).closest('.section-form-main-fold').find('.primary-btn.green-btn').hide();
        $(this).closest('.section-form-main-fold').find('.primary-btn.blue-btn').show();
        $('.section-form-element').removeClass('invalid');
    });
});

function changeProfilePic(input) {
    var validExtensions = ['jpg','jpeg']; //array of valid extensions
    var fileName = input.files[0].name;
    var picsize = Math.round((input.files[0].size / 1024)); 
    var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase();
    $(input).closest('.section-form-main-fold').find('.primary-btn.green-btn').hide();
    $(input).closest('.section-form-main-fold').find('.primary-btn.blue-btn').show();
    console.log(fileNameExt);
    console.log(picsize);
    if ($.inArray(fileNameExt, validExtensions) == -1) {
        input.type = '';
        input.type = 'file';
        alert("Only these file types are accepted : "+validExtensions.join(', '));
        return false;
    }else if(picsize >= 4096){
        input.type = '';
        input.type = 'file';
        alert("File too Big, please select a file less than 4mb");
        return false;
    }
    else{
        if (input.files && input.files[0]) {
            var filerdr = new FileReader();
            filerdr.onload = function (e) {
                $('#profilePicBox').attr('src', e.target.result);
            }
            filerdr.readAsDataURL(input.files[0]);
        }
    }
    
}

function validateProfileFields(){
    isFormValid = true;
    if(!checkNameValidation($('#profileName'))){
        return false;
    }
    if(!checkEmailValidation($('#profileMail'))){
        return false;
    }
    if(!checkNameValidation($('#profileDesignation'))){
        return false;
    }
    if (isFormValid){
        $('.section-profile-btn #saveProfileSettingsBtn').hide();
        $('#saveProfileBtn').show();
        return false;
    }
    return isFormValid;
}

function validateNotificationFields(){
    $('.section-profile-btn #saveNotificationSettingBtn').hide();
    $('#saveNotificationBtn').show();
    return false;
}

function checkNotificationStatus(obj){
    $(obj).closest('.setting-section-tab-info').find('.primary-btn.green-btn').hide();
    $(obj).closest('.setting-section-tab-info').find('.primary-btn.blue-btn').show();
}

