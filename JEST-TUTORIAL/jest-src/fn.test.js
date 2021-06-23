const fn = require("./fn");

//toBe,
// toEqual,
// toStrictEqual,
// toBeNull,
// toBeUndefined,
// toBeDefined,
// toBeTruthy,
// toBeFalsy,
// toBeGreaterThan,크다 대소비교  업로드된 파일의 크기가 적당한지, 판별, 글자수 제한파일용량제한
// toBeGreaterThanOrEqual, 크거나 같다
// toBeLessThan,작다
// toBeLessThanOrEqual, 작거나 같다
// toBeCloseTo,
// toMatch,
// toThrow
// toContain 배열에서 쓰임


// test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
//     expect(fn.makeUser('Mike', 30)).toEqual({
//         name: 'Mike',
//         age: 30,

//     });
// });

// test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
//     expect(fn.makeUser('Mike', 30)).toStrictEqual({
//         name: 'Mike',
//         age: 30,

//     });
// });

// test("null은 null입니다.", () => {
//     expect(null).toBeNull();
// });

// test("0은 false 입니다.", () =>{
//     expect(fn.add(1, -1)).toBeFalsy(); 
// });

// test("비어있지 않은 문자열은 true입니다.", () =>{
//     expect(fn.add("hello", "world")).toBeTruthy(); 
// });




// test("ID는 10자 이하여야 합니다.", () =>{
//     const id = 'THE_BLACK'
//     expect(id.length).toBeLessThanOrEqual(10); 
// });



// test("비밀번호 4자리.", () =>{
//     const pw = '1234'
//     expect(pw.length).toBe(4); 
// });


// test("0.1 더하기 0.2는 0.3 입니다", () =>{
    
//     expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3); //소수점 계산못함 이진법이니가 toBeCloseto사용
// });

// test("Hello World에 a 라는 글자가 있나?", () =>{
    
//    expect("Hello World").toMatch(/H/); //있다. 대소문자 구분된다. 구분하기싫으면 i를 뒷쪽에
// });

// test("Hello World에 a 라는 글자가 있나?", () =>{
    
//     expect("Hello World").toMatch(/H/i); //있다. 대소문자 구분된다. 구분하기싫으면 i를 뒷쪽에
//  });

//  test("유저 리스트에 Mike 가 있나?", () =>{
//     const user = "Mike";
//     const userList = ["Tom", "Mike", "Kai"]
//     expect(userList).toContain(user); 
//  });


 test("이거 에러 나나요?", () =>{
   
    expect(() => fn.throwErr()).toThrow();
 }); //예외가 발생하면 pass가뜬다. toThrow에