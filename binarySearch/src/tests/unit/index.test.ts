import { binarySearch, recursiveBinarySearch } from '../../index';

describe("BinarySearch", () => {
    const input = [1, 5, 10, 15, 20];
    test('3 should result in a null response', () => {
        expect(binarySearch(input, 3)).toBeNull;
    })

    test('5 should result in index 1', () => {
        expect(binarySearch(input, 5)).toEqual(1);
    })
})

describe("recursiveBinarySearch", () => {
    const input = [1, 5, 10, 15, 20];
    test('3 should result in a -1', () => {
        expect(recursiveBinarySearch(input, 3)).toEqual(-1);
    })

    test('5 should result in index 1', () => {
        expect(recursiveBinarySearch(input, 5)).toEqual(1);
    })
})