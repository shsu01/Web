jQuery(document).ready(function(){
    $(".main li").mouseover(function(){
        $(".sub").stop().slideDown()
    })
    $(".main li").mouseout(function(){
        $(".sub").stop().slideUp()
    })

    // $(".imgslide li:gt(0)").hide()
    //     setInterval(function(){
    //         $(".imgslide li:first")
    //         .fadeOut()
    //         .next("li")
    //         .fadeIn()
    //         .end()
    //         .appendTo(".imgslide>ul")
    //     },1000)

    setInterval(function(){
        $(".imglen").animate({marginLeft:-1200},1000,function(){
            $(".imglen li:first").appendTo(".imglen>ul")
            $(".imglen").css({marginLeft:0})
        })
    })

    $("#tab2").click(function(){
        $(".gal").show()
        $(".notice").hide()
        $("#tab2").removeClass("off")
        $("#tab1").addClass("off")
    })

    $("#tab1").click(function(){
        $(".notice").show()
        $(".gal").hide()
        $("#tab1").removeClass("off")
        $("#tab2").addClass("off")
    })














})