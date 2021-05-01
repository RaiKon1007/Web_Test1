let n: number;
let str: string;

isEven(-2);
console.log(str);


/* Variante 1 */
/*
function isEven(n: number): string {
    if (n == 0) {
        str = "true";
        return str;
    }
    else {
        if (n == 1) {
            str = "false";
            return str;
        }
        else {
            if (n > 1) {
                isEven(n - 2);
            }
            else {
                str = "Unzulässiger Zahlenbereich"
                return str;
            }
        }
    }
}
*/

/* Variante 2 */

function isEven(n: number): string {
    if (n == 0) {
        str = "true";
        return str;
    }
    else {
        if (n == 1) {
            str = "false";
            return str;
        }
        else {
            if (n > 1) {
                isEven(n - 2);	// Für Zahlen > 1
            }
            else {
                isEven(n + 2);	// Für Zahlen < 0
            }
        }
    }
}

let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);

console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
//console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024])); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
console.log(split(arr, 2, 0));     // Bonus c)
console.log(split(arr, -1, 2));    // Bonus c)
console.log(split(arr, 0, 7));     // Bonus c)

function backwards(_arr: number[]): number[] {
    let arrInt: number[] = [];

    //    for (let idx of _arr) {
    //    for (let idx = 0; idx < _arr.length; idx++) {
    //        arrInt[_arr.length - 1 - idx] = _arr[idx];
    for (let idx = _arr.length - 1; idx >= 0; idx--) {
        arrInt.push(_arr[idx]);
    }
    return arrInt;
}

function join(_arr1: number[], _arr2: number[]): number[] {
    let arrInt: number[] = _arr1;

    //for (let idx of _arr2) {
    for (let idx = 0; idx < _arr2.length; idx++) {
        arrInt.push(_arr2[idx]);
    }
    return arrInt;
}
/*
function join(..._arr: number[]): number[] {
    let arrInt: number[] = _arr1;

    for (let idx of _arr2) {
        arrInt.push(_arr2[idx]);
    }
    return arrInt;
}
*/
function split(_arr: number[], _idx1: number, _idx2: number): number[] {
    let arrInt: number[] = [];

    if ((_idx1 >= 0) && (_idx2 < _arr.length) && (_idx1 <= _idx2)) {	   // Prüfung der Indizes ob diese innerhalb der Arraygröße liegen
        for (let idx = _idx1; idx <= _idx2; idx++) {
            arrInt.push(_arr[idx]);
        }
        return arrInt;
    }
    else {
        console.log("Indizes nicht innerhalb des gültigen Bereichs, oder Index 1 > Index 2");
        return arrInt;
    }
}
