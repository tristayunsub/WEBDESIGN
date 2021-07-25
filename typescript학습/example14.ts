// abstract에는 new를 할 수없다.

// abstract class AbstractClass {

// }

// class Person14 extends AbstractClass {

// }

// new Person14();

export class Person15 {
      private static INSTANCE: Person15;
    static createInstance(){
           if( Person15.INSTANCE === undefined ){
           Person15.INSTANCE = new Person15();
    }
    return Person15.INSTANCE;
}

        constructor () {
        
    }
}

export const person15 = new Person15();

Person15.createInstance();