$(function(){

});
var isFormValid = true;
function checkNameValidation(obj) {
    var regExName = /^[a-zA-Z0-9_\- ]*$/;
    var inputVal = $(obj).val().trim();
    if ((!regExName.test(inputVal)) || inputVal == "") {
        $(obj).closest('.section-form-element').addClass('invalid');
        isFormValid = false; 
    }else{
        $(obj).closest('.section-form-element').addClass('section-form-valid');
        isFormValid = true; 
    }
    return isFormValid;
}

function checkEmailValidation(obj) {
    var regExEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var inputVal = $(obj).val().trim();
    if ((!regExEmail.test(inputVal)) || inputVal == "") {
        $(obj).closest('.section-form-element').addClass('invalid');
        isFormValid = false; 
    }else{
        $(obj).closest('.section-form-element').addClass('section-form-valid');
        isFormValid = true; 
    }
    return isFormValid;
}

function removeErrorMsg(obj, event){
    if (event.keyCode == 13) { 
        event.preventDefault();
        return false;
    }else{
        $(obj).closest('.section-form-element').removeClass('invalid section-form-valid ');
    } 
}

function NextStepBtn(){
    isFormValid = true;
    if(!checkEmailValidation($('#userEmailid'))){
        return false;
    }
    if(!checkNameValidation($('#userFname'))){
        return false;
    }
    if(!checkNameValidation($('#userLname'))){
        return false;
    }
    if(!checkNameValidation($('#userDesignation'))){
        return false;
    }
    
    if (isFormValid){
        $(".section-form-first-fold").hide();
        $(".section-form-second-fold, .section-account-back-btn").fadeIn();
        $('.section-form-element').removeClass('invalid');
    }
    return isFormValid;
}

function goBackToFirstFold(){
    $(".section-form-second-fold, .section-account-back-btn").hide();
    $(".section-form-first-fold").fadeIn();
}

function checkLoginPassword(obj){
    var pwdVal= $(obj).val().trim();
    if (pwdVal == "") {
        $(obj).closest('.section-form-element').addClass('invalid');
        isFormValid = false; 
    }else{
        $(obj).closest('.section-form-element').addClass('section-form-valid');
        isFormValid = true; 
    }
    return isFormValid;
}

function checkPasswordValidation(obj) {
    var pwdVal= $(obj).val().trim();
    var regexSpecial = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{8,}$/;
    if(pwdVal.length==0){
        $(obj).closest('.section-form-element').addClass('invalid');
        isFormValid = false; 
    }
    else if (pwdVal.length < 8 || pwdVal.length > 20) {
        $(obj).closest('.section-form-element').addClass('invalid');
        $(obj).next().text("Password should be atleast 8-20 characters.");
        isFormValid = false; 
    }
    else if(!regexSpecial.test(pwdVal)){
        $(obj).closest('.section-form-element').addClass('invalid');
        $(obj).next().text("Use atleast one a-z, A-Z, 0-9 and a special symbol");
        isFormValid = false; 
    }
    else {
        $(obj).closest('.section-form-element').addClass('section-form-valid');
        isFormValid = true; 
    }
    return isFormValid;
}

function confirmPasswordValidation(obj){
    var cnfPwdVal = $(obj).val().trim();
    var pwdVal= $.trim($('#userPassword').val());
    if (cnfPwdVal.length == 0) {
        $(obj).closest('.section-form-element').addClass('invalid');
        isFormValid = false; 
    }
    else if (cnfPwdVal != pwdVal ) {
        $(obj).closest('.section-form-element').addClass('invalid');
        $(obj).next().text("Your passwords do not match");
        $(obj).val("");
        isFormValid = false; 
    }
    else {
        $(obj).closest('.section-form-element').addClass('section-form-valid');
        isFormValid = true; 
    }
    return isFormValid;
}

function validateRegisterForm(){
    isFormValid = true;
    if(!checkPasswordValidation($('#userPassword'))){
        return false;
    }
    if(!confirmPasswordValidation($('#userCnfPassword'))){
        return false;
    }
    if (isFormValid){
        alert("Validation Done!!!");
        return false;
    }
    return isFormValid;
}

function validateForgotPassForm(){
    isFormValid = true;
    isFormValid= checkEmailValidation($('#userEmailid'));
    if (isFormValid){
        alert("Validation Done!!!");
        return false;
    }
    return isFormValid;
}

function validateLoginForm(){
    isFormValid = true;
    if(!checkEmailValidation($('#userEmailid'))){
        return false;
    }
    if(!checkLoginPassword($('#userPassword'))){
        return false;
    }
    if (isFormValid){
        alert("Validation Done!!!");
        return false;
    }
    return isFormValid;
}

function validateChangePasswordForm(){
    isFormValid = true;
    if(!checkLoginPassword($('#currentPassword'))){
        return false;
    }
    if(!checkPasswordValidation($('#userPassword'))){
        return false;
    }
    if(!confirmPasswordValidation($('#userCnfPassword'))){
        return false;
    }
    if (isFormValid){
        $('.section-form-btn #changePasswordBtn').hide();
        $('#savePasswordBtn').show();
        return false;
    }
    return isFormValid;
}

function removeSaveBtn(obj, event){
    if (event.keyCode == 13) { 
        event.preventDefault();
        return false;
    }else{
        $(obj).closest('.section-form-element').removeClass('invalid section-form-valid ');
        $(obj).closest('.section-form-main-fold').find('.primary-btn.green-btn').hide();
        $(obj).closest('.section-form-main-fold').find('.primary-btn.blue-btn').show();
    } 
    
}
 