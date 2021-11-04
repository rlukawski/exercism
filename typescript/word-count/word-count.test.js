"use strict";
exports.__esModule = true;
var word_count_1 = require("./word-count");
describe('words()', function () {
    it('counts one word', function () {
        var expectedCounts = new Map(Object.entries({ word: 1 }));
        expect(word_count_1.count('word')).toEqual(expectedCounts);
    });
    xit('counts one of each', function () {
        var expectedCounts = new Map(Object.entries({ one: 1, of: 1, each: 1 }));
        expect(word_count_1.count('one of each')).toEqual(expectedCounts);
    });
    xit('counts multiple occurrences', function () {
        var expectedCounts = new Map(Object.entries({ one: 1, fish: 4, two: 1, red: 1, blue: 1 }));
        expect(word_count_1.count('one fish two fish red fish blue fish')).toEqual(expectedCounts);
    });
    xit('includes punctuation', function () {
        var expectedCounts = new Map(Object.entries({
            car: 1,
            ':': 2,
            carpet: 1,
            as: 1,
            java: 1,
            'javascript!!&@$%^&': 1
        }));
        expect(word_count_1.count('car : carpet as java : javascript!!&@$%^&')).toEqual(expectedCounts);
    });
    xit('includes numbers', function () {
        var expectedCounts = new Map(Object.entries({ testing: 2, 1: 1, 2: 1 }));
        expect(word_count_1.count('1 2 testing testing')).toEqual(expectedCounts);
    });
    xit('normalizes to lower case', function () {
        var expectedCounts = new Map(Object.entries({ go: 3 }));
        expect(word_count_1.count('go Go GO')).toEqual(expectedCounts);
    });
    xit('counts properly international characters', function () {
        var expectedCounts = new Map(Object.entries({ '¡hola!': 1, '¿qué': 1, 'tal?': 1, 'привет!': 1 }));
        expect(word_count_1.count('¡Hola! ¿Qué tal? Привет!')).toEqual(expectedCounts);
    });
    xit('counts multiline', function () {
        var expectedCounts = new Map(Object.entries({ hello: 1, world: 1 }));
        expect(word_count_1.count('hello\nworld')).toEqual(expectedCounts);
    });
    xit('counts tabs', function () {
        var expectedCounts = new Map(Object.entries({ hello: 1, world: 1 }));
        expect(word_count_1.count('hello\tworld')).toEqual(expectedCounts);
    });
    xit('counts multiple spaces as one', function () {
        var expectedCounts = new Map(Object.entries({ hello: 1, world: 1 }));
        expect(word_count_1.count('hello  world')).toEqual(expectedCounts);
    });
    xit('does not count leading or trailing whitespace', function () {
        var expectedCounts = new Map(Object.entries({ introductory: 1, course: 1 }));
        expect(word_count_1.count('\t\tIntroductory Course      ')).toEqual(expectedCounts);
    });
    xit('handles properties that exist on Object’s prototype', function () {
        var expectedCounts = new Map(Object.entries({
            reserved: 1,
            words: 1,
            like: 1,
            constructor: 1,
            and: 1,
            tostring: 1,
            'ok?': 1
        }));
        expect(word_count_1.count('reserved words like constructor and toString ok?')).toEqual(expectedCounts);
    });
});
