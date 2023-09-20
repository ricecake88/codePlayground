export class Matrix {
    matrix: number[][] = new Array<number[]>();

    constructor(input: string) {
        const output = input.split(/[\n\r?]+/g);
        for (let i = 0; i < output.length; i++) {
            this.matrix[i] = new Array<number>();
            let row = output[i].length > 0 && output[i].split(" ");
            if (row) {
                for (let j = 0; j < row.length; j++) {
                    this.matrix[i][j] = parseInt(row[j]);
                }
            }
        }
    }

    get rows(): number[][] {
        const newMatrix: number[][] = new Array<number[]>();
        let j = 0;
        for (let i = 0; i < this.matrix.length; i++) {
            newMatrix[i] = new Array<number>();
            for (let j = 0; j < this.matrix[i].length; j++)
                newMatrix[i][j] = this.matrix[i][j];
        }
        return newMatrix;
    }

    get columns(): number[][] {
        let numRows = this.matrix.length;
        let numCols = this.matrix[0].length;

        const newMatrix: number[][] = new Array<number[]>(numRows);

        // initialize the new Array to be [row#][col#]
        for (let i = 0; i < numCols; i++) {
            newMatrix[i] = new Array<number>(numRows);
        }

        // loop the same way, but set it to the opposite
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                newMatrix[j][i] = this.matrix[i][j];
            }
        }
        return newMatrix;
    }
}
