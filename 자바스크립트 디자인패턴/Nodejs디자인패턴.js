출처: https://yceffort.kr/2021/01/nodejs-4-design-pattern
// 자바스크립트는 프로토타입 언어이기 때문에, 프로토타입으로 상속이 구현되어 있다.구현되어
// 모든 객체는 어떤 객체를 상속하고 있다는 뜻이다.

// 이른바 예제 객체라고 불리우는 프로토타입의 객체의 값을 복제하여 새로운 객체를 만든다.값을
// 이는 프로토타입이 새 객체의 일종의 청사진 역할을 하는 것이다.
// 이 설계 패턴을 활용하면 객체에 정의된 함수가 참조에 의해 생성된다는 이점을 얻을 수 있다.
// 즉, 모든 객체가 해당 기능의 복사본을 보유하는 것이 아니라 동일한 기능을 가르키게 된다.가르키게
// 간단히 말해, 프로토타입 기능은 프로토타입에 상속된 모든 객체애 사용가능하다.

const atv = {
    make: 'Honda',
    model:'Rincon 650',
    year: 2018,
    mud: () => {
        console.log('Mudding')
    },
}

const secondATV = Object.create(atv)

프로토타입에서 새로운 객체를 생성하기 위해서는, Object.create()를 활용하면 된다.
두번째 객체인 secondATV는 첫 번째 객체인 atv와 같은 값을 가지게된다. mud()를 호출해보면같은값을
찍는 것을 알수있다.

프로토타입 디자인패턴을 활용하는 다른 방법은 클래스안에 프로토타입을 명시하는 것이다.

const atvPrototype = {
    mud: () => {
        console.log('Mudding')
    },
}

function Atv(make, model, year){
    function constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }



  constructor.prototype = atvPrototype

  let instance = new constructor(make,model, year)
  return instance
}


const atv1 = Atv()
const atv2 = Atv('Honda', 'Rincon 650', '2018')

마찬가지로 두 인스턴스 모두 atv 객체에 정의된 항목에 액세스 할 수있다.Atv
결론적으로 프로토타입 설계 패턴은 객체가 동일한 기능 또는 속성을 공유하기를 원할 때
유용하다.


팩토리

팩토리 디자인 패턴은, 객체를 생성하는데 사용되는 인터페이스 또는 추상 클래스를
정의하는 것이다. 이렇게 생성된 인터페이스 및 추상 클래스를 사용하여 다른 객체를 초기화한다.Atv

import Motorvehicle from './Motorvehicle'
import Aircraft from './Aircraf'
import Railvehicle from './Railvehicle'

const VehicleFactory = (type, make, model, year) => {
    if (type === car) {
        return new Motorvehicle ('car', make, model, year)
    } else if (type === airplane) {
        return new Aircraft('airplane', make, model, year)
    } else if(type === helicopter){
        return new Aircraft('helicopter', make, model, year)
    }else {
        return new Railvehicle('train', make, model, year)
    }
}


module.exports = VehicleFactory

이렇게 각 클래스 인스턴스를 별개로 만드는 대신에, VehicleFactory를 활용해서
타입을 명시하는 방법을 택할 수 있다. 위 예제를 활용해서, CAR 인스턴스를 만들려면
아래처럼 실행하면 된다.

//첫번째 매개변수에서 타입을 지정하고 나머지는 그대로 변수를 넘긴다.
const audiAllroad = VehicleFactory('car', 'Audi', 'A6 Allroad', '2020')

팩토리 디자인 패턴을 사용하면 객체의 구조가 객체 그 자체 사이를 디커플링 시킬 수 있다는 장점이 있다. 
기존 코드를 손상시키지 않더라도 새 객체를 응용프로그램에 사용할 수 있다.
 마지막으로, 인스턴스 생성과 관련된 모든 코드가 한 곳에 있으므로 코드를 더 잘 꾸밀 수 있다.

요약
팩토리 디자인 패턴은 객체 생성을 위한 인터페이스 및 추상 클래스를 제공한다.
동일한 인터페이스 및 추상 클래스를 사용하여 다른 객체를 만들 수 있다.
코드의 구조를 개선하고 유지관리가 더 쉬워 진다.


빌더

빌더 디자인 패턴 또한 마찬가지로 객체구조와 객체를 분리할 수 있다. 
따라서 복잡한 객체를 생성하는 코드를 단순화 한다.
단순한 객체를 만들 때는 과한 기능일 수 있지만, 복잡한 객체를 만들 때는 단순화 하는데 도움을 준다.Aircraft


class Car {
    constructor(make,model, year, isForSale = true, isInStock = false){
        this.make= make
        this.model = model
        this.year = year
        this.isForSale = isForSale
        this.isInStock = isInStock
    }

    toString() {
        return console.log(JSON.stringify(this))

    }
}


class CarBuilder {
    constructor(make,model, year){
    this.make= make
    this.model = model
    this.year = year
     }
    

    notForSale(){
        this.isForSale = false
        
        return this
    }

    addInstock() {
        this.isInStock = true
        return this
    }

    build() {
        return new Car(
          this.make,
          this.model,
          this.year,
          this.isForSale,
          this.isInStock,
        )
      }
    }
    

module.exports = CarBuilder


위 패턴을 사용하면 Car 대신에 CarBuilder를 사용하여 객체를 만들 수 있다.

const CarBuilder = require('./CarBuilder')

const bmw = new CarBuilder('bmw', 'x6', 2020).addInstock().build()
const audi = new CarBuilder('audi',  'a8', 2021).notForSale().build()
const mercedes = new CarBuilder('mercedes-benz', 'c-class', 2019).build()

만약에 이런 빌더 패턴 없이 복잡한 객체를 만들게 되면 에러 발생할 가능성이 커진다.

const bmw = new CarBuilder('bmw', 'x6', 2020, true, true)

보자

뒤 이어 있는 true가 각각 무엇을 의미하는지 알아야 하기 때문에 객체 생성이
복잡해 지고, 에러를 만들어낼 가능성이 커진다. 
따라서 빌더 디자인 패턴은 복잡한 객체 생성과 사용을 분리하는데 도움을 준다.


싱글톤

클래스의 단일 인스턴스만을 원할때 이 패턴 사용. 즉, 여러개의 인스턴스를 생성하는 것이 아니라
하나만 생성하는 것이다. 인스턴스가 없다면 새 인스턴스를 생성한다.
인스턴스 가 있는 경우에는, 해당 인스턴스를 사용한다.


class DatabaseConnection {
    constructor() {
        this.databaseConnection = 'dummytext'
    }

    getNewDBConnection(){
        return thiss.databaseConnection
    }
}



class Singleton {
    constructor() {
        throw new Error('Use the getInstance() method on the Singleton object!')
    }


    getInstance() {
        if(!Singleton.instance){
            Singleton.instance = new DatabaseConnection()
        }Z

        return Singleton.instance
    }
}

module.exports = Singleton


class DatabaseConnection {
    constructor() {
      this.databaseConnection = 'dummytext'
    }
  
    getNewDBConnection() {
      return this.databaseConnection
    }
  }
  
  module.exports = new DatabaseConnection()


이것이 작동할 수 있는 이유는 module caching system이다.

모듈이 처음 로딩된 이후에 캐싱이 되는 것을 의미한다. 즉, 위의 예제에서는
새롭게 exported된 인스턴스는 캐싱이 되며, 이것이 재 사용될 때마다 이 캐쉬댄
내용을 불러온다는 뜻이다.

따라서, nodejs에서는 싱글턴을 구현하는 방법은 이 처럼 두가지로 볼 수 있다.


요약
싱클턴 방식은 단 하나의 클래스 인스턴스가 필요할 때 유용하다.
Nodejs에서는, module caching system을 활용해서 export한 모듈을 바로 쓸 수 있다.