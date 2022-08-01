$(document).ready(function () {
    $(".list ").click(function () { 

    const value=$(this).attr('data-filter')
    // console.log(value);

    if (value=="All") {
        $(".itembox").show('1000');
    }else{
        $('.itembox').not('.'+ value).hide('1000')
        $('.itembox').filter('.'+ value).show('1000')

    }
    
    });
});

$('.list').addClass('active').siblings().removeClass('active');