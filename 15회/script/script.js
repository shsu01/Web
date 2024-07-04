jQuery(document).ready(function(){
    $(".main li").mouseover(function(){
        $(".sub, .bgmenu").stop().fadeIn()
    })

    $(".main li").mouseout(function(){
        $(".sub, .bgmenu").stop().fadeOut()
    })

    $(".imgslide li:gt(0)").hide()
    setInterval(function(){
        $(".imgslide li:first")
        .fadeOut()
        .next("li")
        .fadeIn()
        .end()
        .appendTo(".imgslide>ul")
    },1000)

    

})