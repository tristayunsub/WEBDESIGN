//자스 단점 숫자 유형인지 아닌지 구분안하고 문자열로전달 !표로 타입 캐스팅가능 
//이제 functiond에 좀 더 명시적인 값을 넣을수있다 예를들면 num1에서 num1:number 이렇게
//터미널에 tsc using-ts.ts를 사용하면 컴파일해서 js파일 구할수 있다.
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
