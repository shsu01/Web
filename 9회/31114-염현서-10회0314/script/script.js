jQuery(document).ready(function(){

    //메인의 li에 마우스를 올리면
    //해당 서브를 찾아서 슬라이드다운해

    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    })

    //메인의 li에서 마우스를 떼면
    //해당 서브를 찾아서 슬라이드업해

    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp();
    })
})