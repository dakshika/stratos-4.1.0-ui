// window variables
var slideWindow = '.slidewindow',
    slideWindowButton = '.slidewindow_handle',
    slideWindowContent = '.slidewindow_content';
    
var getSlideWindowPosition = function(thisWindow) {
    if ($(thisWindow).hasClass('right')){return 'right';}
    else {return 'left';}
}; // default window position 'left'

var leftOffset = 0,
    rightOffset = 0;

var getSlideWindowPositionObj = {},
    slideWindowPosition;

// menu veriables
var slideWindowMenu = slideWindow+' '+'.menu',
    slideWindowMenuButton = slideWindowMenu+' '+'.fa-angle-down';

$(window).load(function(){
    
    //********************************************// 
    // Slide Window Function
    //********************************************// 
    
    // hidding slide windows on page laod
    $(slideWindow).each(function(){
        if (getSlideWindowPosition(this) == 'left'){
            $(this).css('top', leftOffset);
            leftOffset = leftOffset + 55;
        }
        else if (getSlideWindowPosition(this) == 'right'){
            $(this).css('top', rightOffset);
            rightOffset = rightOffset + 55;
        }
        $(this).css(getSlideWindowPosition(this), ('-'+($(slideWindowContent, this).width())+'px'));
    });
    
    // function to handle window slide
    $(slideWindowButton).click(function(){
        
        slideWindowPosition = getSlideWindowPosition($(this).closest(slideWindow));
        
        if ($(this).closest(slideWindow).css(slideWindowPosition) !== '0px'){
            
            //$(this).closest(slideWindow).siblings(slideWindow+'.'+slideWindowPosition).fadeOut('fast');
            
            getSlideWindowPositionObj[slideWindowPosition] = 0;
            $(this).closest(slideWindow).animate(getSlideWindowPositionObj, 500);
            getSlideWindowPositionObj = {};
        }
        else {
            
            //$(this).closest(slideWindow).siblings(slideWindow).fadeIn('fast');
            
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
        $(this).toggleClass('fa-angle-up fa-angle-down').siblings('ul').slideToggle();
    });

});