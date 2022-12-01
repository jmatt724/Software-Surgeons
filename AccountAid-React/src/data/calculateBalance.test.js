const calcBalance = require("./calculateBalance");

test('Check if the balance was updated correctly', () => {
    expect(calcBalance(1,2).toBe(3))
})
