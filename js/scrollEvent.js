$(function(){

    let scrTop = 0
    let devHeight = $(window).height() // 브라우저의 높이가 계산됨

    $(window).scroll(function(){

        scrTop= $(window).scrollTop()
        // 스크롤이 얼만큼 내려와있는지 계산

        $(".am1,.am2,.am3,.leftfadein,.rightfadein").each(function(){
            if(scrTop+(devHeight*0.80)>=$(this).offset().top){
                // 스크롤바를 더 내려서 태그의 위치를 지나쳤다
                $(this).addClass("on")
            }else{
                // 지나치지 않은 상태
                $(this).removeClass("on")
            }

        })


    })





})