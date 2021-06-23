const fn = require ("./fn");


//JEST는 콜백함수가 안먹는다 그래서 DONE이라는 콜백함수 전달 , promise는 return 함수사용 done필요없음
test("3초 후에 받아오는 나이는 30", () => {
        // return fn.getAge().then(age => {
        //     expect(age).toBe(31);
        // });
        return expect(getAge()).resolves.toBe(30);
});


test("0 + 1은 1이야", () => {
    expect(fn.add(0,1)).toBe(1);
});