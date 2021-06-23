//에러 관련

const fn = {
    add: (num1, num2) => num1 + num2,
    makeUser: (name, age) => ({name, age, gender: undefined}),
    throwErr: () => {
        throw new Error("xx");
    },
};