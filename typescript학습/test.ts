// const obj: {[index: string]: any} = {
//     foo: 3
// };

import { UniqueEnumValueNamesRule } from "graphql";
import { assertValidExecutionArguments } from "graphql/execution/execute";
import { TypeFlags } from "typescript"

 
// obj["bar"] = 'hello"


// function click(this: {a: number}) {
//      this.a = 5;
// }
// this.click = this.click.bind(this); 이거 안쓰려고 arrow function 사용

// class Test {
//         click(this: Test){
//             this.
//         }
// }

// const a: string = null; 
// const b: string = undefined; 
// // string 타입은 null 과 undefined를 둘다슬수있다 문제가생김

// function test(a: string | null) {
//      if(a === null) {
//          return -1;
//      }//이를 type guard라고 한다.
//     return a.indexOf('a');
// }

// test(null);
// test('a');


//공변적? 반공변적 이런것 타입이 좀 더 정확해진다.
// const button = document.querySelector('#btn'); as HTMLButtonElement;

// button.addEventListener('dragend', (e: KeyboardEvent) => {
    
// });


// --strictPropertyInitialization
// class Test {
//     name!: string;
//     constructor(){

//     }
//          async init() {
//              this.name ='Mark';
//          }
// }//실제 멤버 변수를 선언할때 할당하거나, 생성자에 할당하거나 둘 중 하나.
// //contructor는 async를 못씀 
// const test = new Test();
// test.init();


// // strictBindCallApply
// function bindTest(a: string, b: number) {
    
// }

// const obj = {};

// bindTest.apply(obj, [5, 5]);

// //alwaysStrict

// references?  프로젝트를 잘게나눠서 설정 다르게하고 돌려서 하나의 프로젝트로 돌아가게하는거? monorepo Lerna?
// tsconfig입장에선 사용하는 소스들을 모아다가 하나의 큰 덩어리로 컴파일.
// 빌드시간 개선, 잘게 쪼갠 컴포넌트 간의 논리적인 분리,
// 새로운 방식으로 코드를 조직 가능, build 옵션을 이용하면, 레퍼런스로 연결된 프로젝트를 빠르게 컴파일 가능

// Composite
// 참조되는 프로젝트는 compileOptions 안에 composite라는 플래그가 true여야합니다.
// declaration도 켜서 다른 프로젝트에서 참조할 때 d.ts를 사용할 수 있도록 해야 합니다.

// Literal Types
// Javascript 에서 값을 표현하기 위해 상수값을 사용할수 있다.
// 그것은 변수가 아니라 고정된 값으로서"문자 그대로(literally)" 스크립트에 값을 제공하는 것이다.

// 이러한 literally 고정된 값을 타입으로 사용할 수 있다.

const age = 36;
const name = 'mark';
const isMale = true;
const fruits = ['apple', 'banana'];
const person = {
      name: 'mark',
      age :36
};


// let fruits: ['apple', 'banana'] = ['apple', 'banana'];
// fruits = ['apple', 'banana', 'cherry']; //Error but tuple

// var, let, const 과 type
// var는 잘안씀.

// let 과 const의 타입 추론

let a : string = '에이';
let b ='비이'; //자동으로 string이라고 인식이 가능.

const c: string = '씨이';
const d = '디이';

/*
a는 명시적으로 지정된 타입인 string
b는 타입추론에 의한 타입인 string
c는 명시적
d는 타입추론에 의한 타입인 리터럴 타입"디이"
*/

Object Types primitive type이 아님을 나타낸다.
object로 지정된 자리에 boolean, number, string같은게 오면 에러를 나타낸다.

// let myName= 'mark';
// const myAge = 36;

// object.create();

//Array Types
// let list: number[] = [1,2,3];
// let list: Array<number> = [1,2,3];

//Tuple Types.
배열인데 타입이 한가지가 아닌 경우. 마찬가지로 객체임.
꺼내 사용할때 주의가 필요함.

// let myName= 'mark';
// const myAge = 36;

// let tu: [string, number] = ['hello', 1, 'world'];


// function bindTest(a: string, b: number) {


// }

// const obj = {};

// bindTest.apply(obj,)

// function returnAny(message: any) : void {
//     console.log(message);
// }

// returnVoid('아무거나');

// Avoid leaking any
function leakingAny(value: any) {
    let a: number = value.num;
    let b = a + 1;
    return b;//any가 전파되는것을 막자 아웃풋을 any로 안하게.
}

leakingAny('hello');
leakingAny(8);

//Never Types Tip)에러를 막는 용도로 사용
//Union Type 여러 타입을 조합하여 하나의 타입으로 만들 수 있는 타입.
function padLeft(value: string, padding: string | number ) {

}

//Literal Types과 함께 사용하면 인자를 강하게 좁힐 수 있다.
function offset(direction: 'left' | 'right' | 'top' | 'bottom', 
size: number) {
    //..
}

//Type Guards와 함께 사용하면, 타입을 좁힐 수 있다.
function position(value: string | number) {
     if ( typeof value === 'string') {
         return value.indexOf('');
     }
     //여기 부턴 number
     return value;
}

// Type Guard 
// 런타임에 사용하는 연산자인 typeof, instanceof, in, literal type, custom type guard를 이용하면
// 컴파일에 인식한다.
// Type Guard를 사용하면 조건문 블록 스코프 내에서 타입을 좁힐 수 있따.

// in 연산자는 명시된 속성이 명시된 객체에 존재하면 true를 반환합니다.
// object형의 타입(literal이 아닌 타입)에서 사용할 수 있다.

console.log('indexOf' in 'hello'); //error
console.log('toString' in {}); //true
console.log('length' in []); //true

// literal type guards 조합에 리터럴 형식이 있을 경우 에를들어 차별하기위해 해당유형 검사.

interface IMachine {
    type: string;
}

class Car implements IMachine {
    type: 'CAR';
    wheel: number;
}

class Boat implements IMachine {
    type: 'BOAT';
    motor: 'number';
}

function getWhellOrMotor(machine: Car | Boat): number {
    if (machine.type === 'CAR') {
        return machine.wheel;
    } else {
        return machine.motor;
    }
}
// 잘 안씀


//custom type guards 함수를 만들고 그 함수에서 타입 체크.

function isCar(arg:any): arg is Car {
    return arg type === 'CAR';
}

function isBoat(arg: any): arg is Boat {
    return arg type === 'BOAT';
}


function test(a: { b?: {c: string}}) {
    if (a.b !== undefined) {
              const b = a.b; // 바꿔주면된다. 
           setTimeout(() => {
               console.log(b.c);
           }, 1000);
    }
}


// Type Assertions & non-null assertions
// Type Assertions

// 형변환 과는 다르다. 형변환은 실제 데이터 구조를 바꿔줌
// '타입이 이것이다 '라고 컴파일러에게 알려주는 것을 의미한다.
// 그래서 행동에 대해서 작성자가 100% 신뢰하는 것이 중요하다.

// 문법적으로는 두가지 방법이 있다.
// 변수 as 강제할 타입
// <강제할타입>변수
const dom = document.querySelector('#id') as HTMLButtonElement;

function test(value: any) {
    (value as string).indexOf('')
}

let someValue: any= "this is a string";

let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;

/*
1.주로 넓은 타입에서 좁은 타입으로 강제하는 경우가 많다.
2. jsx 에서는 as를 쓴다.
*/

// NON-NULL assertions
// function optional(b: HTMLElement) {
//     b.parentElement!.addEventListener()
// }





// Enum Types
Numeric enums
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];


String enums
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",

}



// Reverse mappings 값을통해서 이름을  알아낸다.

// enum Enum {
//     A
// }

// let a = Enum.A;
// let nameOfA = Enum[a]; //"A"

// const enums? 실제로 런타임에서 const 값으로 들어간다.

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

var directions = [0 /*Up*/, 1 /*Down */, 2 /*Left */, /*Right */];



// type Alias 타입 별칭
// 인터페이스랑 비슷, Primitive, Union Type, TuPLE
// 기타 직접 작성해야하는 타입을 다른 이름을 지정 가능
// 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는것은아님.

// aliasing Union Type

// let person: string | number = 0;
// person = 'Mark';

// type StringOrNumber = string | number;

// let another: StringOrNumber = 0;
// another = 'anna';

// 유니온타입은 a도가능하고 b도가능하다.
/*
1. type alias 끼리는 extends, implements 불가.
2. interface extends type alias 가능
3. class implements type alias 가능
4. class extends type alias 불가 (interface도 마찬가지)
5. 마치 interface처럼 동작한다.
*/



