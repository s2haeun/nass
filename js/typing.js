// $(function(){
    
    $(function(){

        var typingBool = false; 
        var typingIdx = 0; 
        var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
        typingTxt = typingTxt.split(""); // 한글자씩 자른다 
        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
            typingBool = true; 
           
            var tyInt = setInterval(typing, 100); // 반복동작 
        } 
    
        function typing() { 
            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
             
                // 글자를 이어 붙일 경우에 색을 넣어줄 글자를 지정한다 
                if (typingTxt[typingIdx] == '원' || typingTxt[typingIdx] == '스' || typingTxt[typingIdx] == '톱' || typingTxt[typingIdx] == '치' || typingTxt[typingIdx] == '료') {
                    var inText = "<span class='text_bold'>" + typingTxt[typingIdx] + "</span>";
                    $(".typing").append(inText);
                } else {
                    $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다 
                }
    
                typingIdx++; 
            } else { 
                clearInterval(tyInt); // 끝나면 반복종료 
            } 
        }  
    });
    



    




// })