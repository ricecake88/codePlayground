
function getMidIdx(minIdx: number, maxIdx: number) {
    return Math.floor((minIdx + maxIdx) / 2)

}
export function binarySearch<T>(input: Array<T>, searchItem: T, minIdx: number = 0, maxIdx: number = input.length - 1): number | null {

    let guessIdx = getMidIdx(minIdx, maxIdx);

    while (input[guessIdx] !== searchItem) {

        if (searchItem > input[guessIdx]) {
            minIdx = guessIdx + 1;
        }
        if (searchItem < input[guessIdx]) {
            maxIdx = guessIdx - 1;
        }

        guessIdx = getMidIdx(minIdx, maxIdx);

        if (maxIdx < minIdx) {
            return null
        }
    }

    return guessIdx;
}

interface BinarySearch<T> {
    (input: Array<T>, searchItem: T, min?: number, max?: number): number
}

export const recursiveBinarySearch: BinarySearch<number> = (input: Array<number>, searchItem: number, min: number = 0, max: number = input.length - 1): number => {

    // check that min and max are not the same and we have already checked the entire array
    if (min > max) {
        return -1;
    }

    // get the midIdx
    const targetIdx = Math.floor((min + max) / 2);
    if (input[targetIdx] === searchItem) {
        return targetIdx;
    } else if (searchItem < input[targetIdx]) {
        // set the max idx to the lower half portion and don't include the targetIdx
        max = targetIdx - 1;
    }
    if (searchItem > input[targetIdx]) {
        // set the min idx to the upper half portion and don't include the targetIdx
        min = targetIdx + 1;
    }
    return recursiveBinarySearch(input, searchItem, min, max);
}