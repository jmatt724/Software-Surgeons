import { calcDigitalWallet, calcBalance } from "./calculateBalance"
import { yearRange } from "./calendarData"


describe("Data tests", () => {
    test("DigitalCard", () => {
        expect(calcDigitalWallet([{digitalWallet:true, amount:"2000.0"}])).toBe("2000.00")
    })
    test("DigitalCard", () => {
        expect(calcDigitalWallet([{digitalWallet:true, amount:"0.0"}])).toBe("0.00")
    })
    test("calcBalance", () => {
        expect(calcBalance([{amount:"2000.0"}, {amount:"1500.0"}])).toBe("3500.00")
    })
    test("calcBalance", () => {
        expect(calcBalance([{amount:"1.0"}, {amount:"2.0"}])).toBe("3.00")
    })
    test("yearRange", () => {
        var years = yearRange(2010)

        expect(Array.isArray(years)).toBe(true)
    })
})