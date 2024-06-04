jQuery(document).ready(function(){

    //메인의 li에 마우스를 올리면
    //해당 서브를 찾아서 보여줘(슬라이드다운)

    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })
})