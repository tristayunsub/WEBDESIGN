// //초기값의 비교
// var p1 = 1;
// var p2 = 1;

// console.log(p1,p2,p1===p2);

// var o1 = {name:'kim'}
// var o2 = {name:'kim'}

// console.log(o1,o2,o1==o2);

//객체의 immutable

// var o1 = {name:'kim'}
// var o2 = Object.assign({},o1);

// o2.name = 'lee';
// console.log(o1,o2, o1 === o2);


//Nested object

// var o1 = {name:'kim', score:[1,2]}
// var o2 = Object.assign({}, o1);
// o2.score = o2.score.concat();
// o2.score.push(3);
// console.log(o1, o2, o1 === o2, o1.score === o2.score);

// function fn(person){
//     person.name = 'lee';
// }
// var o1 = {name:'kim'}
// var o2 = Object.assign({}, o1);
// fn(o2);
// console.log(o1, o2);

//API 공부

// var score = [1,2,3];
// var a = score;
// var b = score;
// //1~
// // score.push(4);
// var score2 = score.concat(4);
// console.log(score,score2, a, b);

//Object freeze

// var o1 = {name:'kim', score:[1,2]}
// Object.freeze(o1);

// o1.name= 'lee';
// o1.city= 'seoul';
// o1.score.push(3);
// console.log(o1);

// const vs objectfreeze
// const o1 = {name:'kim'}
// Object.freeze(o1);
// const o2 = {name:'lee'}
// // o1 =  o2;
// o1.name = 'park';
// console.log(o1);

정리: const <==> primitive, freeze <=> object에 각각 대응된다.
그러나 freeze는 const와 다르게, 컴파일 에러를 반환하지않는다.
const 이름과 값을 고정한다.
freeze 값 자체를 바꾸지 못한다.
새로 알게된것 concat, freeze 사용법 잘알아 둘 것
좀 있다가 redux공부 시작