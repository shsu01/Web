jQuery(document).ready(function (){
    $(".main li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })

    $(".main li").mouseout(function(){
        $(".sub").stop().slideUp()
    })

    setInterval(function(){
        $(".imglen").delay(1000)
        $(".imglen").animate({marginLeft:-800},2000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginLeft:0})
        })
    })

    $(".notice li:first").click(function(){
        $(".modal").show()
    })

    $("button").click(function(){
        $(".modal").hide()
    })
})