jQuery(document).ready(function(){

    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })

    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp()
    })
})