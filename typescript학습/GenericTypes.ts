// any를 사용하지 말자했는데. generic사용하는이유는 any와 같은 케이스를 조금더
// 정확하게 추론해내기 위함.


function helloString(message: string): string {
             return message;
}


function helloNumber(message: number): number {
    return message;
}

function helloAny(message: any): any {
         return message;
}

helloAny('name');
helloString('name');
helloNumber(36);

function helloGeneric<T>(message: T): T {
      return message;
}


helloGeneric('Mark');
helloGeneric(36);
// helloGeneric<number>('Mark');

// hello의 리턴이 any이기에 타입 헬퍼가 제대로 되지 않음
// helloGeneric을 사용하면 정상적으로 사용 가능.

// function helloArray<T>(message: T[]): T{
//     return message[0];
// }

// console.log(helloArray(['hello', 'world0']));
// console.log(helloArray(['hello', 5]));

// STRING으로 추론된다.
// STRING과 NUMBER의 유니온타입이 되버림. 이건 우리가 원하는 방식이아님.
// 만약에 리턴된게 STRING이면 뒤에 .indexOf()할수있어야되는데 number라서 못함
// number를 타입가드로 빼주기엔 쓸데없는 짓같다.


// function helloTuple<T, K>(message: [T, K]): T {
//       return message[0];
// }

// console.log(helloTuple(['hello', 'world0']));
// console.log(helloTuple(['hello', 5]).indexOf(''));
// console.log(helloTuple([1,2]));//튜플 3까지가지않는다 2개만


class Person5<T extends string | number, K> {
       name!: T;
       age!: K;
       constructor(name: T, age: K){

       }
}

const p5 = new Person5(true, 36);
// p5.age = 'male';
//boolean안된다.

//Generic Example8 -keyof & type lookup system 유용하다.
interface Person8 {
    name: string;
    age: number;

}
type a = keyof Person8;

const person8 = {
    name: 'Mark',
    age: 36
};

function getProperty<T, K extends keyof T>(person: T, key: K ): T[K] {
    return person[key]; 
}

getProperty(person8, 'name');

// keyof T는 배열형태중에 하나만 가지고오곘다, k는 name또는 age만.

function setProperty<T, K extends keyof T> (person: T, key: K, value: T[K]): void {
     person[key] = value;
}


setProperty(person8, 'age', 40);

type PartialPerson8 = Partial<Person8>;
type ReadonlyPerson8 = Readonly<Person8>;
type aaa = Pick<Person8, 'name'>;


//make all properties in t optional , t에 person8넣었더니 keyof T다. 
//T는 NAME혹은 AGE  

interface XYZ {
    x: any;
    y: any;
    z: any;
 
}        function dropXYZ<T extends XYZ>(obj: T): Pick<T, Exclude<keyof T,
         "x" | "y" | "z">>
    
function dropXYZ<T extends XYZ>(obj: T) {
    let {x,y,z, ...rest} = obj;
    return rest;
}
//dropXYZ가 뭐하는거냐 XYZ말고 다른 프로퍼티가 많다 a,b,c,d,e,f,g등. 걔를 인자로 넣었을때
//xyz를 뺀 나머지 오브젝트 타입으로 나온다.