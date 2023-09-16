import { Matrix } from '../../exercism/matrix';

test('Matrix', () => {
    const testMatrix = new Matrix("1 2 3\n3 4 5");
    console.log(testMatrix.rows);
    console.log(testMatrix.columns);
    expect(testMatrix).toBeDefined();
})
