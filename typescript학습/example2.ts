interface Person2 {
    name: string;
    age?: number; //옵셔널
    
}

const p21 = {
    name: 'Mark'
};


const p22 = {
    name: 'Mark',
    age: 36

};

function hello2(person: Person2): void{
    if (person.age === undefined) {
        return;
    }
    console.log(`${person.name},${person.age.toString()}`);
}