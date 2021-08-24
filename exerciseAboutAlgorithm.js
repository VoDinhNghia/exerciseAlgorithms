// tinh day fibonacci
const positionNumberFibo = 15;
let numberPosition1 = 1,
    numberPosition2 = 1,
    numberNextPosition;

let arrayNumberFibonacy = [];
for (let i = 1; i <= positionNumberFibo; i++) {
    arrayNumberFibonacy.push(numberPosition1)
    numberNextPosition = numberPosition1 + numberPosition2;
    numberPosition1 = numberPosition2;
    numberPosition2 = numberNextPosition;
}
console.log(`Day so fibonacci tu 1 den vi tri ${positionNumberFibo} la: ${arrayNumberFibonacy}`);

// kiem tra 1 so co phai la so nguyen to hay khong.
function checkNumberPrime(number) {
    if (number < 2) {
        return false;
    } else if (number == 2) {
        return true;
    } else {
        let checkResult = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                checkResult = false;
                break;
            }
        }
        return checkResult;
    }
}
// Liet ke tat ca cac so nguyen to tu 1 => n
function listAllPrimeFrom2ToN(number) {
    let arrayAllPrimeOfN = [];
    for (let i = 1; i <= number; i++) {
        if (checkNumberPrime(i) == true) {
            arrayAllPrimeOfN.push(i);
        }
    }
    return arrayAllPrimeOfN;
}
console.log(`Danh sach tat ca cac so nguyen to nho hon 100 la: ${listAllPrimeFrom2ToN(100)}`);

// tich cac so nguyen to tu nho den lon bang voi so n cho truoc
let numberNeedCalculate = 200;
let listPrime = listAllPrimeFrom2ToN(numberNeedCalculate);
let listAllNumber = [];
let numberTemp = numberNeedCalculate;
for (let i = 0; i < listPrime.length; i++) {
    while (numberTemp % listPrime[i] == 0) {
        if (numberTemp % listPrime[i] == 0) {
            listAllNumber.push(listPrime[i]);
            numberTemp = numberTemp / listPrime[i];
        }
    }
}
console.log(`Danh sach cac so nguyen to co tich bang voi ${numberNeedCalculate} la: ${listAllNumber}`);
// Kiem tra cac so nguyen manh (Pn > (Pn-1 + Pn+1)/2)
let numberStrongPrime = 100;
let listPrimeStrong = listAllPrimeFrom2ToN(numberStrongPrime);
let listAllPrimeStrong = [];
for (let i = 1; i < listPrimeStrong.length - 1; i++) {
    if (listPrimeStrong[i] > (listPrimeStrong[i - 1] + listPrimeStrong[i + 1]) / 2) {
        listAllPrimeStrong.push(listPrimeStrong[i]);
    }
}
console.log(`Danh sach cac so nguyen to manh la: ${listAllPrimeStrong}`);

// Tim 4 so nguyen to lien tiep sao cho tong cua chung cung la so nguyen to
let fourPrime = [];
for (let i = 0; i < listAllPrimeFrom2ToN(100).length - 3; i++) {
    let sumNumberFour = listAllPrimeFrom2ToN(100)[i] + listAllPrimeFrom2ToN(100)[i + 1] + listAllPrimeFrom2ToN(100)[i + 2] + listAllPrimeFrom2ToN(100)[i + 3];
    if (checkNumberPrime(sumNumberFour) == true) {
        fourPrime.push(`(${listAllPrimeFrom2ToN(100)[i]},${listAllPrimeFrom2ToN(100)[i+1]},${listAllPrimeFrom2ToN(100)[i+2]},${listAllPrimeFrom2ToN(100)[i+3]})`)
    }
}
console.log(`Danh sach 4 so nguyen to lien tiep co tong la mot so nguyen to la: ${fourPrime}`);
// Tim 2 so nguyen to sao cho tong va hieu cua chung cung la so nguyen to
let listPrimeSumAndSub = listAllPrimeFrom2ToN(100);
let listDoublePrime = [];
for (let i = 0; i < listPrimeSumAndSub.length; i++) {
    for (let j = listPrimeSumAndSub.length - 1; j >= 0; j--) {
        let sum = listPrimeSumAndSub[i] + listPrimeSumAndSub[j];
        let sub = listPrimeSumAndSub[j] - listPrimeSumAndSub[i];
        if (sub > 0) {
            if (checkNumberPrime(sum) == true && checkNumberPrime(sub) == true) {
                listDoublePrime.push(`(${listPrimeSumAndSub[i]},${listPrimeSumAndSub[j]})`);
            }
        }
    }
}
console.log(`Cap so nguyen to co tong va hieu dieu la so nguyen to la: ${listDoublePrime}`);
//tim so nguyen to co 3 chu so, biet rang neu viet nguoc lai thi ta duoc mot so bang voi lap phuong cua mot so tu nhien
// 100 < n < 1000 => 5^3 <= a^3 < 10^3 => a la so tu nhien nam trong nua khoang [5,10)
let arrayPrime1000 = listAllPrimeFrom2ToN(1000);
let findPrime = [];
for (let i = 0; i < arrayPrime1000.length; i++) {
    if (arrayPrime1000[i] > 100) {
        for (let a = 5; a < 10; a++) {
            if (parseInt((arrayPrime1000[i].toString().split('')).reverse().join('')) == a * a * a) {
                findPrime.push(arrayPrime1000[i])
            }
        }
    }
}
console.log(`so nguyen to co 3 chu so tim duoc la: ${findPrime}`);
