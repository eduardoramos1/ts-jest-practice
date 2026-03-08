import { toUpperCase } from "../app/Utils";

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

});