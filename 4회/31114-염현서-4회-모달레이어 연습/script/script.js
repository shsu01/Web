jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown()
        $(".bgmenu").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp()
        $(".bgmenu").stop().slideUp()
    })

    //가로슬라이드
    //일정간격으로 반복해
    //imglen을 이동시켜(왼쪽여백-1200,2000,function
    //imglen의 첫째를 imglen>ul의 막내로 집어넣어
    //imglen의 왼쪽여백을 0으로 설정해

    // setInterval(function(){
    //     $(".imglen").animate({marginLeft:-1200},1000,function(){
    //         $(".imglen li:first").appendTo(".imglen>ul");
    //         $(".imglen").css({marginLeft:0});
    //     })
    // })

    //세로슬라이드
    //일정간격으로 반복해
    //imglen의 li를 움직여(위여백 -300)
    //imglen의 li 첫째를 막내자식으로 넣어줘
    //imglen의 윗 여백을 0으로 설정

    setInterval(function(){
        $(".imglen").animate({marginTop:-300},1000,function(){
            $(".imglen li:first").appendTo(".imglen>ul")
            $(".imglen").css({marginTop:0})
        })
    })

    
    //공지사항의 첫번째 li를 클릭하면
    //팝업을 보여줘
    $(".notice li:first").click(function(){
        $(".popup").show()
        $(".modal").show()
    })
    //버튼을 클릭하면
    //팝업을 숨겨줘
    $("button").click(function(){
        $(".popup").hide()
        $(".modal").hide()
    })

})
