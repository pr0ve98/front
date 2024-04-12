// test13.js(문자함수 연습)
'use strict';

let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz";
let text2 = '   ABC   BC ABC   GHI  JKLABCMN......  A BC... OPQ.. abc     ';

// length: 길이
// substring(): 특정문자열의 문자열 출력
// indexOf(): 문자열 검색(인덱스 값을 반환, 없으면 -1 반환)
// includes(): 문자열 포함유무(true, false)
// cancat(): 문자열 결합
// slice(): 지정된 인덱스위치부터 문자열 가져오기
// trin(): 문자열의 앞뒤 공백 삭제
// replace(): 치환(첫번째 자료만 찾아서 치환)
// replaceAll(): 치환(모든 자료를 찾아서 치환)
// toUpperCase(): 영문 대문자변환
// toLowerCase(): 영문 소문자변환
// charAt(): 문자열 중에서 1개씩 추출
// charCodeAt(): 지정된 인덱스 번지의 영문자의 아스키코드값을 출력
// split(): 지정된 문자로 분리시킨후 배열로 저장한다
// join(): 지정 문자로 결합

let str = "01234567890123456789012345678901234567890<br/>";
str += text1 + '<br/>';
str += text2 + '<br/><br/>';

str += "substring: "+text1.substring(5) + "<br/>";
str += "substring: "+text1.substring(5, 10) + "<br/>";
str += "indexOf: "+text1.indexOf("abc") + "<br/>";
str += "indexOf: "+text1.indexOf("abd") + "<br/>";
str += "slice: "+text1.slice(5) + "<br/>";
str += "slice: "+text1.slice(5, 10) + "<br/>";
str += "replace: "+text2.replace("ABC", "ooppqq") + "<br/>";
str += "replaceAll: "+text2.replaceAll("ABC", "ooppqq") + "<br/>";
str += "charAt: "+text1.charAt(3) + "<br/>";
str += "charCodeAt: "+text1.charCodeAt(3) + "<br/>";

let tel = '010-1234-5678';
let tels = tel.split('-');
for(let tel of tels) {
    console.log(tel);
}
tels.forEach((data, i) => console.log(i, data));

demo.innerHTML = str;