jQuery(document).ready(function(){
    $(".main li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })

    $(".main li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    setInterval(function(){
        $(".imglen").delay(1000)
        $(".imglen").animate({marginLeft:-100 + "%"},2000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginLeft:0})
        })
    })
    
})