jQuery(document).ready(function(){
    $(".main li").mouseover(function(){
        $(".sub, .bgmenu").stop().slideDown()
    })

    $(".main li").mouseout(function(){
        $(".sub, .bgmenu").stop().slideUp()
    })

    setInterval(function(){
        $(".imglen").delay(1000)
        $(".imglen").animate({marginTop:-350},1000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginTop:0})
        })
    })

    $(".notice li:first").click(function(){
        $(".modal").show()
    })

    $("button").click(function(){
        $(".modal").hide()
    })
})