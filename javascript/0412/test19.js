// test19.js
'use strict';

function regexCheck() {
    // 정규표현식 변수를 미리 만들어놓고 수행시켜준다.
    const regEx1 = /atom/gm;  // 'atom'이라는 문자열이 포함되어 있으면 'true', 없으면 'false' 반환
    const regEx2 = /mbc|kbs|sbs|cjb/g; // ||(or) 연산자 정규식에서는 하나만 넣기
    const regEx3 = /홍길(동|순)/g; // 홍길동 or 홍길순 문자 포함
    const regEx4 = /[a-z]/g;     // 영문 소문자 포함
    const regEx5 = /[A-Z]/g;     // 영문 대문자 포함
    const regEx6 = /[가-힣]/g;     // 한글 포함
    const regEx7 = /[^a-z]/g;     // 영문 소문자만 포함?
    const regEx8 = /[^a-zA-Z0-9]/g;     // 영문 대소문자, 숫자만 포함?
    const regEx9 = /[^a-zA-Z가-힣]/g;     // 영문 대소문자, 한글만 포함?
    const regEx10 = /[^a-zA-Zㄱ-ㅎ가-힣]/g;     // 영문 대소문자, 한글자음, 한글만 포함?
    const regEx11 = /[^a-zA-Z0-9_-]/g;     // 영문 대소문자, 숫자, _ -만 포함?

    const regEx21 = /\./g; // .을 포함하고 있느냐?
    const regEx22 = /\d/g; // 숫자를 포함하고 있느냐?
    const regEx23 = /\D/g; // 숫자를 포함하고 있지 않느냐?
    const regEx24 = /\w/g; // 영문자/숫자/_를 포함하고 있느냐?
    const regEx25 = /\W/g; // 영문자/숫자/_만 포함하고 있느냐?
    const regEx26 = /\s/g; // 문장 안에 공백(탭 포함)을 포함하고 있느냐?

    let content = document.getElementById("content").value.trim();

    if(content == "") {
        alert("문자열을 입력하세요");
        return false;
    }

    // if(!content.match(regEx1)) alert("본문에 atom 문자열을 포함하고 있지 않습니다");
    // if(!content.match(regEx2)) alert("본문에 mbc, kbs, sbs, cjb 문자열을 포함하고 있지 않습니다");
    // if(!content.match(regEx3)) alert("본문에 홍길동, 홍길순 문자열을 포함하고 있지 않습니다");
    // if(!regEx4.test(content)) alert("영문 소문자를 포함하고 있지 않습니다");
    // if(!regEx5.test(content)) alert("영문 대문자를 포함하고 있지 않습니다");
    // if(!regEx6.test(content)) alert("한글을 포함하고 있지 않습니다");
    // if(regEx7.test(content)) alert("영문 소문자가 아닌 다른 문자를 포함하고 있습니다");
    // if(regEx8.test(content)) alert("영문 대소문자와 숫자가 아닌 다른 문자를 포함하고 있습니다");
    // if(regEx9.test(content)) alert("영문 대소문자와 한글이 아닌 다른 문자를 포함하고 있습니다");
    // if(regEx10.test(content)) alert("영문 대소문자와 한글이 아닌 다른 문자를 포함하고 있습니다");
    // if(regEx11.test(content)) alert("영문 대소문자와 숫자, _ -이 아닌 다른 문자를 포함하고 있습니다");
    // if(!regEx21.test(content)) alert("'.'을 포함하지 않습니다");
    // if(!regEx22.test(content)) alert("숫자를 포함하지 않습니다");
    // if(regEx23.test(content)) alert("숫자가 아닌 다른 문자를 포함하고 있습니다");
    // if(!regEx24.test(content)) alert("영문/숫자/밑줄을 포함하고 있지 않습니다");
    // if(regEx25.test(content)) alert("영문/숫자/밑줄 외 다른 문자를 포함하고 있습니다");
    if(!regEx26.test(content)) alert("공백을 포함하지 않습니다!");
    else {
        alert("자료가 잘 입력되었습니다~ 통과!!");
        // location.href = "서버로 전송... url?변수1=값1&변수2=값2..."; // get 방식
        // myform.submit(); // post 방식
    }
    document.getElementById("content").focus();
}