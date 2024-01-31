$(function(){
    // 스크롤 이벤트 리스너를 추가합니다.
    $(window).scroll(function() {
        // 현재 스크롤 값 가져오기
        var scrollValue = $(this).scrollTop();

        // 스크롤 값이 1 이상이면 동작하는 부분
        if (scrollValue > 1) {
            // 여기에 실행하고자 하는 코드를 추가합니다.
            $("header").addClass("scroll");
        } else {
            // 스크롤 값이 1 이하이면 클래스를 제거합니다.
            $("header").removeClass("scroll");
        }
    });


    // 모바일 메뉴 열기
    $(".open_menu").click(function(){
        $(".hidden_bg").addClass("on");
    })
    // 모바일 메뉴 닫기
    $(".close_menu").click(function(){
        $(".hidden_bg").removeClass("on");
    })

    // 모바일 메뉴 토글
    $(".hidden_gnb>li").click(function() {
        // 클릭된 메뉴의 하위 메뉴 토글
        $(this).find('.top_0').slideToggle();

        // 다른 메뉴의 하위 메뉴 닫기
        $(".hidden_gnb>li").not(this).find('.top_0').slideUp();
        // 
        $(".hidden_gnb>li>a").removeClass("on")
        $(this).children('a').addClass("on");

    });
















    // // con5 tabMenu
    // function tabMenu5(dlClass,actName){
    //     let dt5 = document.querySelectorAll(dlClass+">dt")
    //     for(let i = 0 ; i<dt5.length ; i++){
    //         dt5[i].addEventListener("click",function(){
    //             for(let j = 0 ; j<dt5.length ; j++){
    //                 dt5[j].classList.remove(actName)
    //             }
    //             this.classList.add(actName)
    //         })
    //     }
    // }
});