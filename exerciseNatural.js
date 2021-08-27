// Tu day so 0,1,2,3 => lap duoc bao nhieu so tu nhien co 4 chu so khac nhau
// hang ngan se co 3 cach chon vi loai di so 0
// hang tram co 3 cach chon (vi khong trung voi so dau tien => 3 cach chon)
// hang chuc co 2 cach chon, hang don vi co 1 cach chon
// ==> co tat ca: 3x3x2 = 18 so
// truong hop 4 chu so deu khac 0 => hang ngan co 4 cach chon ==> co tat ca 4x3x2x1 = 24 chu so khac nhau
// Neu biet ngon ngu khac (c,c++,...) thi nen thuc hien no thay cho js vi ben duoi dung 3 vong lap long nhau => hieu suat k tot
let arrayNumberFour = [0, 1, 2, 3];
// output:
// [
//   1023, 1203, 1302, 2013,
//   2103, 2301, 3012, 3102,
//   3201, 1032, 1230, 1320,
//   2031, 2130, 2310, 3021,
//   3120, 3210
// ]
//let arrayNumberFour = [4, 1, 2, 3];
// output: 
// [
//   4123, 4213, 4312, 1423,
//   1243, 1342, 2413, 2143,
//   2341, 3412, 3142, 3241,
//   4132, 4231, 4321, 1432,
//   1234, 1324, 2431, 2134,
//   2314, 3421, 3124, 3214
// ]
let nineNumber1 = '';
let nineNumberFour1 = [];
let nineNumberFour2 = [];
let nineNumber2 = '';
for (let i = 0; i < arrayNumberFour.length; i++) {
    if (arrayNumberFour[i] == 0) {
        i = i + 1
    }
    for (let j = 0; j < arrayNumberFour.length; j++) {
        if (arrayNumberFour[i] != arrayNumberFour[j]) {
            nineNumber1 = arrayNumberFour[i].toString().concat(arrayNumberFour[j]);
            nineNumber2 = arrayNumberFour[i].toString().concat(arrayNumberFour[j]);
            for (let k = 0; k < arrayNumberFour.length; k++) {
                if (arrayNumberFour[k] != arrayNumberFour[i] && arrayNumberFour[j] != arrayNumberFour[k]) {
                    nineNumber1 = nineNumber1.concat(arrayNumberFour[k]);
                    if (nineNumber1.length == 4) {
                        nineNumberFour1.push(parseInt(nineNumber1));
                    }
                }
            }
            for (let m = arrayNumberFour.length - 1; m >= 0; m--) {
                if (arrayNumberFour[m] != arrayNumberFour[i] && arrayNumberFour[j] != arrayNumberFour[m]) {
                    nineNumber2 = nineNumber2.concat(arrayNumberFour[m]);
                    if (nineNumber2.length == 4) {
                        nineNumberFour2.push(parseInt(nineNumber2));
                    }
                }
            }
        }
    }
}

console.log(nineNumberFour1.concat(nineNumberFour2)); 
