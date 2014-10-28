// window variables
var slideWindow = '.slidewindow',
    slideWindowButton = '.slidewindow-handle',
    slideWindowContent = '.slidewindow-content',  
    leftOffset = 0,
    rightOffset = 0,
    getSlideWindowPositionObj = {},
    slideWindowPosition,
    slideWindowContentWidth,
    getSlideWindowPosition = function(thisWindow) {
        if ($(thisWindow).hasClass('right')){return 'right';}
        else {return 'left';}// default window position 'left' 
    };

// menu veriables
var slideWindowMenu = slideWindow+' '+'.menu',
    slideWindowMenuButton = slideWindowMenu+' '+'.fa-angle-down',
    breadcrumb = '.sub-header';

// tab specific veriables
var tabContainer = '.tab-container',
    tab = '.tab',
    tabHandles = '.tab-handles',
    tabButtonAction,
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
        
        if ($(this).hasClass('tabs')){
            $(slideWindowContent, this).css('min-height', $(tabHandles, this).height());
            $(slideWindowContent, this).css('min-width', $(slideWindowContent, this).width());
        }
         
    });

	// open menu if current page is not home page    
    var currentPage = $(location).attr('pathname').toLowerCase();
	$(slideWindowMenu+' li a').each(function(){
		if($(this).attr('href').toLowerCase() == currentPage){
			$(this).closest(slideWindow).css('left', '0');
	        $(this).closest(slideWindow).children().find(slideWindowButton).css('z-index', 100);
	        $(this).closest('ul').show();
		}
	});
    	
    // function to handle window slide
    $(slideWindowButton).click(function(){
        
        slideWindowPosition = getSlideWindowPosition($(this).closest(slideWindow));
        
        $(this).css('z-index', 100);
        $(this).siblings().css('z-index', 0);
        
        if ($(this).closest(slideWindow).hasClass('tabs')){

            // function to handle window slide with tabs
            tabButtonAction = $(this).attr('data-action');
            
            $(this).toggleClass('active');
            $(this).siblings(slideWindowButton).removeClass('active');
            
            if($(this).hasClass('active')){
                
                $(this).closest(tabHandles).siblings(tabContainer).find(tab+'[data-content="'+tabButtonAction+'"]').css('visibility', 'visible');
                $(this).closest(tabHandles).siblings(tabContainer).find(tab+'[data-content="'+tabButtonAction+'"] '+slideWindowContent).show();
                $(this).closest(tabHandles).siblings(tabContainer).find(tab+'[data-content!="'+tabButtonAction+'"]').css('visibility', 'hidden');
                $(this).closest(tabHandles).siblings(tabContainer).find(tab+'[data-content!="'+tabButtonAction+'"] '+slideWindowContent).hide();
                
                if (tabClosed == true){
                    slideWindowContentWidth = 0;
                    getSlideWindowPositionObj[slideWindowPosition] = slideWindowContentWidth;
                    $(this).closest(slideWindow).animate(getSlideWindowPositionObj, 500, function(){
                        tabClosed = false;
                    });
                    getSlideWindowPositionObj = {};
                }
            }
            else if ((!$(this).closest(tabHandles+' '+slideWindowButton).hasClass('active')) && (tabClosed == false)){
                
                slideWindowContentWidth = ('-'+$(this).closest(tabHandles).siblings(tabContainer).width()+'px');
                getSlideWindowPositionObj[slideWindowPosition] = slideWindowContentWidth;
                $(this).closest(slideWindow).animate(getSlideWindowPositionObj, 500, function(){
                    $(tabContainer+' '+tab, this).css('visibility', 'hidden');
                    tabClosed = true;
                });
                getSlideWindowPositionObj = {};
                
            }
            else {
                $(this).closest(tabHandles).siblings(tabContainer).find(tab+'[data-content="'+tabButtonAction+'"]').css('visibility', 'hidden');
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