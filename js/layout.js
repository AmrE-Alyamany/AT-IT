/* Show and hide menu */

$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        if($(window).scrollTop() < 80 ) {
            
            $('.navbar').css ({
               'margin-top': '-100px',
                'opacity': '0'
                
            });
            
            $('.navbar-inverse').css({
                'background-color': 'rgba(59, 59 , 59, 0)'
                
            });
            
        } else {
            
            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'
                
            });
            
            $('.navbar-inverse').css({
                'background-color': 'rgba(0, 0 , 0, 0.6)',
                'border-color': '#888'
                
            });
            
            $('.navbar-brand img').css({
               'height': '35px',
                'padding-top': '0px'
                
            });
            
            $('.navbar-nav > li > a ').css({
                'padding-top': '15px'
                
                
            });
                
        }
       
    });

    /*  Tabs replace active class  */

    $('.tabs-list li').click(function() {

	$(this).addClass('active').siblings().removeClass('active');

	$('.tabs .tabs-content > div').hide();

	$('.' + $(this).data('class')).show();

	});
    
});

