import { calcDigitalWallet, calcBalance } from "./data/calculateBalance"
import { yearRange } from "./data/calendarData"


describe("Data tests", () => {
    test("DigitalCard Test 1", () => {
        expect(calcDigitalWallet([{digitalWallet:true, amount:"2000.0"}])).toBe("2000.00")
    })
    test("DigitalCard Test 2", () => {
        expect(calcDigitalWallet([{digitalWallet:true, amount:"0.0"}])).toBe("0.00")
    })
    test("calcBalance Test 1", () => {
        expect(calcBalance([{amount:"2000.0"}, {amount:"1500.0"}])).toBe("3500.00")
    })
    test("calcBalance Test 2", () => {
        expect(calcBalance([{amount:"1.0"}, {amount:"2.0"}])).toBe("3.00")
    })
    test("yearRange Test 2", () => {
        var years = yearRange(2010)

        expect(Array.isArray(years)).toBe(true)
    })
})