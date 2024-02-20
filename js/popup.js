$(function() {
    var popup = $("#popup_0");
    
    // 팝업 보이기
    popup.show();
    
    // 닫기 버튼 클릭 시 팝업 닫기
    $(".popup_close").click(function() {
        popup.hide();
    });
    
    // 체크박스 클릭 시 오늘 하루동안 보지 않기 기능 구현
    $("#chkbox0").click(function() {
        // 만약 체크박스가 체크되었다면
        if($(this).is(":checked")) {
            // 쿠키를 설정하여 오늘 하루 동안 보지 않도록 처리
            var now = new Date();
            // 만료 시간을 오늘 자정으로 설정
            var expires = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
            document.cookie = "hide_popup=1; expires=" + expires.toUTCString() + "; path=/";
        }
        // 팝업 숨기기
        // popup.hide();
    });
    
    // 쿠키 값 확인하여 팝업 숨기기
    var popupCookie = getCookie("hide_popup");
    if(popupCookie === "1") {
        popup.hide();
    }
});

// 쿠키 가져오는 함수
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}