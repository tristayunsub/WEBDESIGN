// class Person1 {
//     name!: string ;
//     age!: number;
// }

import { consoleTestResultHandler } from "tslint/lib/test";

// const p1 = new Person1();
// p1.age = 36;
// console.log(p1);

//생성자 함수가 없으면, 디폴트 생성자가 불린다.
//클래스의 프로퍼티 혹은 멤버 변수가 정의되어 있지만, 값을 대입하지않으면 undefined이다.
//접근 제어자(Access Modifier) 는 public이 디폴트이다.

// class Person4 {
//     private _name: string = 'Mark';
//       set name (name: string) {
//           this._name = name;
//       }

//       get name(): string{
//          return this._name; 
//       }
// }


// class Person4 {
//     public readonly name: string = 'Mark';
//  }
 

// const p4 = new Person4();
// console.log(p4);
// // p4.name = 'Mark';
// console.log(p4.name);

//클래스와 프로퍼티의 접근 제어자 
//private으로 설정된 프로퍼티는 dot으로 접근 x
//클래스 내부에서는 private 프로퍼티 사용할 수 있다.
// private이 붙은 변수나 함수는 _를 이름앞에 붙이는데, 이는 문법이 아니라 널리 쓰이는 코딩 컨벤션이다.


// class Parent5 {
//     private privateProp!: string;
//     protected protectedProp!: string;
//     constructor() {

//     } //디폴트 생성자.
// }

// class Child5 extends Parent5 {
//           constructor() {
//               super();
//               this.protectedProp = '';
//           }
//    hello() {
//        this.protectedProp = 'protected';
//    } 
}

// 부모에서 private로 설정된 프로퍼티는 상속을 받은 자식에서도 접근할 수 없다.
// 부모에서 protected로 설정된 프로퍼티는 상속을 받은 자식에서 접근 가능.
// 상속을 받은 자식 클래스에서 부모 클래스에 this를 통해 접근하려면, 생성자에서
// super();를 통해 초기화 해야한다.

// class Person6 {
//          public age = 36;
//        constructor(public name: string) {
            
//        }
// } 

// new Person6('Mark');

//디폴트 생성자는 프로그래머가 만든 생성자가 없을때 사용한다.
//사용자가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
//생서자에서 바로 멤버로 할당할 수 있는 방법이 잇다.

//클래스와 상속.

// class Parent8 {
//        constructor(protected_name: string, protected_age: number) {}
//        public hello() {
//            console.log(`${this._name}, ${this._age}`);
//        }
//      }

// class Child8 extends Parent8 {
//      _name = '마크';
// }

// const c8 = new Child8('Mark', 36).hello();
// c8.hello();
// const p8 = new Parent8('M', 36);


// class Parent9 { 
//     constructor(protected _name: string, private _age:number) {}
//     hello() {
//         console.log(this._name, this._age);
//     }
// }

// class Child9 extends Parent9 {
//     constructor(name: string ){
//         super(name, 36);
//     }
// }

// new Child9('Mark').hello();

//생성자를  정의하고, this를 사용하려면, super를 통해 부모의 생성자를 호출해줘야 한다.
// super를 호출할 때는 부모 생성자의 입력 타입이 같아야 한다.
// super를 호출하는 것은 클래스 외부에서 호출하는 것과 같다.
// protected 함수를 호출해서 그 안의 private을 출력하는 것에 주의한다.


//Class EXample11 - 클래스와 static 프로퍼티 => 클래스 변수


class Person11 {
    private static PI = '3.14'; //private static함수가 존재한다면 어디서 쓰일까.?
    static abs(){
        
    }

    hello(){
        Person11.PI;
    }
}

const PI = '3.14';
function test() {

}

export class Person11 {
           static abs() {

           }
           hello() {
               PI;
               test();
           }
}

