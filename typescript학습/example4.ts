//객체 인터페이스인데 함수.
interface Person4 {
    name: string;
    hello(age: number): void; //()에 무언가 넣어보자
}

//펑션 인터페이스, 인터페이스가 함수 그자체
interface Hello {
    (name: string, age?: number) void;
}

const hello: Hello = () => {

}

hello();

const p41: Person4 = {
    name: 'Mark',
    hello: function(age: number){
       console.log(this.name, age); 
    }
};

const p42: Person4 = {
    name: 'Mark',
    hello() {
        
    }
};

// p42.hello();

// const p43: Person4 = {
    
// }