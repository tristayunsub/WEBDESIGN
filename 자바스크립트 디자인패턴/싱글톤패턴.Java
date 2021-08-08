
https://webdevtechblog.com/%EC%8B%B1%EA%B8%80%ED%84%B4-%ED%8C%A8%ED%84%B4-singleton-pattern-db75ed29c36

자바의 싱글톤 패턴과 스프링의 싱글톤패턴의 다른점!?
싱글턴(Singleton) 이란 ?

싱글턴 패턴은 인스턴스가 오직 1개만 생성되야 하는 경우에 사용되는 패턴입니다. 

예를들어 레지스트리 같은 설정 파일의 경우 객체가 여러개 생성되면 설정 값이 변경될 위험이 생길 수 있습니다.

인스턴스가 1개만 생성되는 특징을 가진 싱글턴 패턴을 이용하면, 

하나의 인스턴스를 메모리에 등록해서 여러 스레드가 동시에 해당 인스턴스를 공유하여 사용하게끔 할 수 있으므로, 

요청이 많은 곳에서 사용하면 효율을 높일 수 있습니다.

주의 해야할 점은 싱글턴을 만들때 동시성(Concurrency) 문제를 고려해서 싱글턴을 설계해야합니다.

싱글턴 패턴의 공통적인 특징 private constructor
를 가진다는 것과, static method 사용되는

Eager Initialization(이른 초기화, Thread-safe)
public class Singleton{
    //Eager Initialization
    private static Singleton uniqueInstance = new Singleton();
    
    private Singleton(){}

    public static Singleton getInstance() {
        return uniqueInsatnce;
    }
}

이른 초기화 방식은, static 키워드의 특징을 이용해서 클래스 로더가 초기화 하는 시점에서
정적 바인딩(static binding)(컴파일 시점에서 성격이 결정됨)을 통해 해당 인스턴스를 메모리에 등록해 사용

이른 초기화 방식은 클래스 로더에 의해 클래스가 최초로 로딩될 때 객체가 생성되기 떄문이
thread-safe하다.

싱글턴 구현시 중요한점이, 멀티 스레딩 환경에서도 동작 가능하게끔 구현해야한다는 것.

Lazy Initialization with syncchroized

synchronized 키워드를 이용한 게으른 초기화 방식.
메소드에 동기화블럭을 지정해서 thread-safe를 보장한다.

게으른 초기화 방식이란 ? 컴파일 시점에 인스턴스를 생성하는 것이아니라,
 인스턴스가 필요한 시점에 요청 하여 동적 바인딩(dynamic binding)
(런타임시에 성격이 결정됨)을 통해 인스턴스를 생성하는 방식을 말합니다.

public class Singlneton {
     private static Singleton uniqueInstance;

     private Singleton() {
     }

     // Lazy Initialization
     public static synchronized Singleton getInstance() {
         if(uniqueInstance == null) {
             uniqueInstance = new Singleton();
         }
         return uniqueInstance;
     }
}


