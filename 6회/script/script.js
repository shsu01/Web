jQuery(document).ready(function(){
    $(".main li").mouseover(function(){
        $(".sub").stop().slideDown()
    })

    $(".main li").mouseout(function(){
        $(".sub").stop().slideUp()
    })

    setInterval(function(){
        $(".imglen").delay(1000)
        $(".imglen").animate({marginLeft:-1200},1000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginLeft:0})
        })
    })
    
})