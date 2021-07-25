// Method Overload 생각보다 많이 쓰임. method 호출할때 내부적으로 
//overload같은걸 제공하는데 이걸 타입으로 설명해줌.
//구현 함수는 오버로드 리스트에 속하지 않음.

function overloads(arg: number, another:boolean): string;
function overloads(arg: string): number;

function overloads(arg: any): any {
       if( typeof arg === 'string') {
           
       }
}

overloads(36, false);
overloads('Mark')


//Decorators란? 
//java의 annotaion이랑은 다르다. compile타임에 상관x, 데코레이터의 시그니처가 맞는지는 확인함.
//함수다, 특정 시그니처, 클래스가 인스턴스로 만들어질때가 아니라, 최초 클래스가 참조될때 한번맍 ㅓㄱ용된다.

// tsconfig에서 experimentalDecorators 켜야됨

//Iterable 순환하면서 읽을수잇따 for문 사용해서. for of. es6에서 배열에서만 사용가능.

// 내가 어떤 객체를 만들었는데 걔를 for문돌려서 custom해보고싶다.

class CustomIterable implements Iterable<string> {
    private _array: Array<string> = ['first', 'second'];

    [Symbol.iterator](){
        var nextIndex = 0;

        return {
            next: () => {
                return {
                    value: this._array[nextIndex+++],
                    done: nextIndex > this._array.length
                };
            }
        };
    }
}

const cIterable = new CustomIterable();