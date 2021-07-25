interface Person3 {
    name: string;
    age?: number;
    [index: string]: any; // 내가 원하는 어떤것이든 넣을 수 있음
}


const p3: Person3 = {
   name: 'Mark',
   gender:['male', 'female']
};

