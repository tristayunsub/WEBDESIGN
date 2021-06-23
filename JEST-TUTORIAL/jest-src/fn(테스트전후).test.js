const fn = require("./fn");


let num = 0;



test("0 더하기 1은 1이야", () => {
    num = fn.add(num, 1);
    expect(num).toBe(1);
});