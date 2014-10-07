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
    slideWindowPosition,
    slideWindowContentWidth;

// menu veriables
var slideWindowMenu = slideWindow+' '+'.menu',
    slideWindowMenuButton = slideWindowMenu+' '+'.fa-angle-down';

var tabButtonAction,
    tabContent,
    tabClosed = true;
    

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
        
        if ($(this).closest(slideWindow).hasClass('tabs')){
            
            // function to handle window slide with tabs
            tabButtonAction = $(this).attr('data-action');
            
            $(this).toggleClass('active');
            $(this).siblings('.slidewindow_handle').removeClass('active');
            
            if($(this).hasClass('active')){
                
                $(this).closest('.tab-handles').siblings('.tab-container').find('.tab[data-content="'+tabButtonAction+'"]').css('visibility', 'visible');
                $(this).closest('.tab-handles').siblings('.tab-container').find('.tab[data-content="'+tabButtonAction+'"] .slidewindow_content').show();
                $(this).closest('.tab-handles').siblings('.tab-container').find('.tab[data-content!="'+tabButtonAction+'"]').css('visibility', 'hidden');
                $(this).closest('.tab-handles').siblings('.tab-container').find('.tab[data-content!="'+tabButtonAction+'"] .slidewindow_content').hide();
                
                if (tabClosed == true){
                    slideWindowContentWidth = 0;
                    getSlideWindowPositionObj[slideWindowPosition] = slideWindowContentWidth;
                    $(this).closest(slideWindow).animate(getSlideWindowPositionObj, 500, function(){
                        tabClosed = false;
                    });
                    getSlideWindowPositionObj = {};
                }
            }
            else if ((!$(this).closest('.tab-handles .slidewindow_handle').hasClass('active')) && (tabClosed == false)){
                
                slideWindowContentWidth = ('-'+$(this).closest('.tab-handles').siblings('.tab-container').width()+'px');
                getSlideWindowPositionObj[slideWindowPosition] = slideWindowContentWidth;
                $(this).closest(slideWindow).animate(getSlideWindowPositionObj, 500, function(){
                    $('.tab-container .tab', this).css('visibility', 'hidden');
                    tabClosed = true;
                });
                getSlideWindowPositionObj = {};
                
            }
            else {
                $(this).closest('.tab-handles').siblings('.tab-container').find('.tab[data-content="'+tabButtonAction+'"]').css('visibility', 'hidden');
            }    
   
        }
        else {
            if ($(this).closest(slideWindow).css(slideWindowPosition) !== '0px'){
                slideWindowContentWidth = 0;
            }
            else {
                slideWindowContentWidth = ('-'+$($(this).siblings(slideWindowContent)).width()+'px');
            }
            getSlideWindowPositionObj[slideWindowPosition] = slideWindowContentWidth;
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