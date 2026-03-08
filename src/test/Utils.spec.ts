import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {

    it("Should return uppercase of valid string", () => {
        // Convenção comum de estruturação de um teste: arrange, act, assert
        // arrange:
        const sut = toUpperCase // sut = system under test
        const expected = "HELLO WORLD"

        // act:
        const actual = sut("hello world")

        // assert:
        expect(actual).toBe(expected);
    })


    it("Should return info for valid string", () => {
        const actual = getStringInfo("My String")

        expect(actual.lowerCase).toBe('my string')
        expect(actual.extraInfo).toEqual({}) 

        // expect(actual.characters.length).toBe(9)
        expect(actual.characters).toHaveLength(9)
        expect(actual.characters).toContain<string>('M')
        
        // expect(actual.extraInfo).not.toBe(undefined)
        // expect(actual.extraInfo).not.toBeUndefined()
        // expect(actual.extraInfo).toBeDefined()
        expect(actual.extraInfo).toBeTruthy()

    })

});