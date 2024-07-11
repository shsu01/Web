jQuery(document).ready(function(){
    $(".main li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })

    $(".main li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    $(".imgslide li:gt(0)").hide()
    setInterval(function(){
        $(".imgslide li:first")
        .fadeOut()
        .next("li")
        .fadeIn()
        .end()
        .appendTo(".imgslide>ul")
    },2000)

    $(".notice li:first").click(function(){
        $(".popup").show()
    })
    $("button").click(function(){
        $(".popup").hide()
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