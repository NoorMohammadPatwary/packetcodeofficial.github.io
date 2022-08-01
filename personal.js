
$(document).ready(function () {
    
    $('.plansSectionController').hover(function (e) {
        
       
        $(this).css('background-color', 'rgba(40, 185, 185, 0.573)' )
            
        }, function () {
            $(this).css('background-color', 'rgba(0, 255, 255, 0.473)' )
            
        }
    );
});


$(".after_hover_buynow").hover(function () {
        $(this).text("Buy Now");
        
    }, function () {

        $(this).text( $('.after_hover_buynow').attr('data-filter'));
       
    }
);




// btn list 





