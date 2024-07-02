jQuery(document).ready(function(){
    $(".main li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })

    $(".main li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    setInterval(function(){
        $(".imglen").animate({marginLeft:-800},1000,function(){
            $(".imglen li:first").appendTo(".imglen>ul")
            $(".imglen").css({marginLeft:0})
        })
    })


})