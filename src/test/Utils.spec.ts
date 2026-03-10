import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {

    it("Should return uppercase of valid string", () => {
        // Padrão de teste AAA
        // Convenção comum de estruturação de um teste: arrange, act, assert
        // arrange:
        const sut = toUpperCase // sut = system under test
        const expected = "HELLO WORLD"

        // act:
        const actual = sut("hello world")

        // assert:
        expect(actual).toBe(expected);
    })


   describe("ToUpperCase examples", () => {
        it.each([
            { input: "abc", expected: "ABC" },
            { input: "My-string", expected: "MY-STRING" },
            { input: "def", expected: "DEF" },
        ])("$input toUppercase should be $expected", ({ input, expected }) => {
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        });
    });

    describe('getStringInfo for arg My-string should', () => {
        it('should return right length', () => {
            const actual = getStringInfo("My String")
            expect(actual.characters).toHaveLength(9)
        })

        it('should return right lowercase', () => {
            const actual = getStringInfo("My String")
            expect(actual.lowerCase).toBe('my string')
        })

        it('should return right uppercase', () => {
            const actual = getStringInfo("My String")
            expect(actual.upperCase).toBe('MY STRING')
        })
    })


    // it("Should return info for valid string", () => {
    //     const actual = getStringInfo("My String")

    //     expect(actual.lowerCase).toBe('my string')
    //     expect(actual.extraInfo).toEqual({}) 

    //     // expect(actual.characters.length).toBe(9)
    //     expect(actual.characters).toHaveLength(9)
    //     expect(actual.characters).toContain<string>('M')
        
    //     // expect(actual.extraInfo).not.toBe(undefined)
    //     // expect(actual.extraInfo).not.toBeUndefined()
    //     // expect(actual.extraInfo).toBeDefined()
    //     expect(actual.extraInfo).toBeTruthy()

    // })

});