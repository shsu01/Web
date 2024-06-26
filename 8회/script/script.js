jQuery(document).ready(function () {
    $(".main li").mouseover(function () {
        $(".sub , .bgmenu").stop().slideDown()
    })

    $(".main li").mouseout(function () {
        $(".sub , .bgmenu").stop().slideUp()
    })

    setInterval(function () {
        $(".imglen").animate({ marginLeft: -1200 }, 1000, function () {
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({ marginLeft: 0 })
        })
    })


})