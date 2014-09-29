// window variables
var slideWindow = '.slidewindow',
    slideWindowButton = '.slidewindow_handle',
    slideWindowContent = '.slidewindow_content';
    
var getSlideWindowPosition = function(thisWindow) {
    if ($(thisWindow).hasClass('right')){return 'right';}
    else {return 'left';}
}; // default window position 'left'

var getSlideWindowPositionObj = {},
    slideWindowPosition;

// menu veriables
var slideWindowMenu = slideWindow+' '+'.menu',
    slideWindowMenuOptions = slideWindowMenu+' '+'.options',
    slideWindowMenuButton = slideWindowMenuOptions+' '+'.fa-sort-down';

$(window).load(function(){
    
    //********************************************// 
    // Slide Window Function
    //********************************************// 
    
    // hidding slide windows on page laod
    $(slideWindow).each(function(){
        $(this).css(getSlideWindowPosition(this), ('-'+$(slideWindowContent, this).width()+'px'));
    });
    
    // function to handle window slide
    $(slideWindowButton).click(function(){
        
        slideWindowPosition = getSlideWindowPosition($(this).closest(slideWindow));
        
        if ($(this).closest(slideWindow).css(slideWindowPosition) !== '0px'){
            getSlideWindowPositionObj[slideWindowPosition] = 0;
            $(this).closest(slideWindow).animate(getSlideWindowPositionObj, 500);
            getSlideWindowPositionObj = {};
        }
        else {
            getSlideWindowPositionObj[slideWindowPosition] = ('-'+$($(this).siblings(slideWindowContent)).width()+'px');
            $(this).closest(slideWindow).animate(getSlideWindowPositionObj, 500);
            getSlideWindowPositionObj = {};
        }
    });
    
    
    //********************************************// 
    // Slide Window Menu Function
    //********************************************//  
    
    // function to toggle hide/show menu options
    $(slideWindowMenuButton).click(function(){
        $(slideWindowMenuOptions+' ul').slideToggle();
    });

});