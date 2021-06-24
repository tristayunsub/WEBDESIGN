//자스 단점 숫자 유형인지 아닌지 구분안하고 문자열로전달 !표로 타입 캐스팅가능 
//이제 functiond에 좀 더 명시적인 값을 넣을수있다 예를들면 num1에서 num1:number 이렇게
//터미널에 tsc using-ts.ts를 사용하면 컴파일해서 js파일 구할수 있다.
//브라우저는 typescript를 실행할 수 없다. 이클립스 같은 구닥다리안쓰고 최신 IDE쓸 수 있다.
//인터페이스나 제네릭같은 개발에는 도움되는 그런것들 오류를 방지한다. 데코레이터로 메타프로그래밍.
//Configuration과 compiler에 대해서 자세히 알아볼것, 이후 advanced typescript는 듣고싶으면 들어라\
//제네릭에 대해서 배울 것임 데코레이터도. 처음부터 타입스크립트로 프로젝트 하나 만들어본다.
//이후 namespaces와 module로 코드를 보다 쉽게 관리하는 방법, 이후 웹팩과 타입스크립트. 
const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;



function add(num1: number, num2: number) {
 
    return num1 + num2;
 }


button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value)); 
});