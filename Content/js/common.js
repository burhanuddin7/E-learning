$(function(){
    setProfileNameTitle();
    setDiscussionBoxHeight();
    $(document).click(function (event) {
        if (!$(event.target).closest(".navbar-widget").length && !$(event.target).closest("#dvDiscussionSidebar").length) {
            $('.navbar-widget, #dvDiscussionSidebar').hide();
        }
    });
});

function setProfileNameTitle(){
    var profileName= $('.navbar-profile .navbar-profile-name').text();
    $(".navbar-profile .navbar-profile-name").attr('title', profileName);
}

function openAccountSettingPanel(obj ,event){
    event.stopPropagation();
    $('.navbar-widget').hide();
    $(obj).find('.navbar-widget').show();
}

function fnOpenDiscussionBox(event){
    event.stopPropagation();
    $('.navbar-widget').hide();
    jQuery("#dvDiscussionSidebar").show();
    setDiscussionBoxHeight();
}

function fnCloseDiscussionBox(){
    $('.navbar-widget').hide();
    jQuery("#dvDiscussionSidebar").hide();
}

function setDiscussionBoxHeight(){
    var sideBarHeight= $(window).height() - 60;
    $('#dvDiscussionSidebar').height(sideBarHeight);
    var chatBoxHeight = sideBarHeight - $('.discussion-sidebar-info').outerHeight() - $('.discussion-sidebar-textbox').outerHeight(true);
    $('.discussion-sidebar-main-chat').height(chatBoxHeight);
}