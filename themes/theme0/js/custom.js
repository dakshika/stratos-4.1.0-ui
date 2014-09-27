// menu variables
var rightHelpMenuIsShown = false;
var leftmenuIsShown = false;

$(document).ready(function(){


    /**
     * Function to handle bringing the side menu out
     */
    $('.menutoggle').click(function () {
        if (leftmenuIsShown) {
            // take menu in
            $('.menucontent').animate({
                'left': '-10em'
            }, 500);
            $('.menutoggle').animate({
                'left': '-=7.3em'
            }, 500);
            leftmenuIsShown = false;
        } else {
            // bring menu out
            $('.menucontent').animate({
                'left': '0em'
            }, 500);
            $('.menutoggle').animate({
                'left': '+=7.3em'
            }, 500);
            leftmenuIsShown = true;
        }
    });

    $('.menutoggle-right-help').click(function () {
        if (rightHelpMenuIsShown) {
            // take menu in
            $('.menucontent-right-help').animate({
                'right': '-10em'
            }, 500);
            $('.menutoggle-right-help').animate({
                'right': '-=7.3em'
            }, 500);
            rightHelpMenuIsShown = false;
        } else {
            // bring menu out
            $('.menucontent-right-help').animate({
                'right': '0em'
            }, 500);
            $('.menutoggle-right-help').animate({
                'right': '+=7.3em'
            }, 500);
            rightHelpMenuIsShown = true;
        }
    });


});