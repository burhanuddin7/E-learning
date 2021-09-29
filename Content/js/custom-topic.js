$(function(){
    var card_max_height=[];
    var k=0;
    jQuery(".section-container-item").each(function(index){
        card_max_height[k] =  jQuery(this).find(".section-container-item-info").outerHeight();   
        //console.log(index);  
        k++;
    });
    jQuery(".section-container-item .section-container-item-info").css("min-height",Math.max.apply(Math,card_max_height));                                   
});
