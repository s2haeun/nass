$(function() {
    $(".popup_close").click(function() {
        $(this).closest('.popup_wrap').hide();
    });

    $(".popup_foot input[type='checkbox']").click(function() {
        var popup = $(this).closest('.popup_num');
        if ($(this).is(":checked")) {
            var now = new Date();
            var expires = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
            document.cookie = popup.attr('id') + "=1; expires=" + expires.toUTCString() + "; path=/";
        }
    });

    $(".popup_wrap").each(function() {
        var popup = $(this);
        var popupCookie = getCookie(popup.attr('id'));
        if (popupCookie === "1") {
            popup.hide();
        }
    });
});

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
