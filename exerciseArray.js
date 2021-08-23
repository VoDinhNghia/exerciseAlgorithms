// Tim phan tu bi thieu trong mang so nguyen cho truoc tu 1 => 20 
let arrayMiss = [1, 2, 4, 8, 9, 10, 16, 15, 18, 19];
let elementMiss = [];
for (let i = 1; i <= 20; i++) {
    let findElementInArray = arrayMiss.indexOf(i)
    if (findElementInArray == -1) {
        elementMiss.push(i);
    }
}
console.log(`Danh sach cac element bi thieu trong doan 1 = 20 la: ${elementMiss}`);

// Tim phan tu trung lap trong mang so nguyen cho truoc
// Neu array duoc sap xep roi thi thuc hien tim luon con neu chua thi sap xep roi tim
let arrayDup = [1, 3, 6, 1, 9, 10, 12, 9];
let sortArrayDup = arrayDup.sort(function(a, b) {
    return a - b; // sap xep tu nho den lon, b - a thi sap xep tu lon den nho
});
let elementDup = [];
let arrayRemoveDup = [sortArrayDup[0]];
for (let i = 1; i <= sortArrayDup.length; i++) {
    if (sortArrayDup[i] == sortArrayDup[i - 1]) {
        elementDup.push(sortArrayDup[i]);
    } else {
        arrayRemoveDup.push(sortArrayDup[i])
    }
}
//Sap xep mang thu cong bang giai thuat sap xep doi cho truc tiep (Interchange Sort)
for (let i = 0; i < arrayDup.length; i++) {
    for (let k = i + 1; k < arrayDup.length; k++) {
        if (arrayDup[k] < arrayDup[i]) {
            let temp = arrayDup[i];
            arrayDup[i] = arrayDup[k];
            arrayDup[k] = temp;
        }
    }
}
console.log(`Sap xep thu cong: ${arrayDup}`);
console.log(`Danh sach cac element trung lap la: ${elementDup}`);
console.log(`Danh sach sau khi loai cac phan tu trung: ${arrayRemoveDup}`);

// Tim so lon nhat va nho nhat trong mang chua duoc sap xep
let arrayMinMax = [1, 9, 12, 19, 2, 4, 3, 100, 6, 8];
let elementMin = arrayMinMax[0];
let elementMax = arrayMinMax[0];
for (let i = 0; i < arrayMinMax.length; i++) {
    if (elementMin > arrayMinMax[i]) {
        elementMin = arrayMinMax[i];
    } else if (elementMax < arrayMinMax[i]) {
        elementMax = arrayMinMax[i];
    }
}
// dung ham co san 
console.log(`Tim min max dung ham: max ${Math.max.apply(null, arrayMinMax)}, min ${Math.min.apply(null, arrayMinMax)}`);
console.log(`Phan tu nho nhat la: ${elementMin}, phan tu lon nhat la: ${elementMax}`);

// Tim cap so nguyen trong mang co tong bang voi mot so nguyen cho truoc
let arraySumOfDouble = [1, 2, 5, 7, 8, 9, 16, 3, 4, 6, 12, 11, 17, 19, 10];
let nDouble = 16;
let doubleElement = [];
for (let i = 0; i < arraySumOfDouble.length; i++) {
    for (let j = arraySumOfDouble.length - 1; j >= 0; j--) {
        if ((arraySumOfDouble[i] + arraySumOfDouble[j]) == nDouble) {
            if ((arraySumOfDouble[j] - arraySumOfDouble[i]) != Math.abs(arraySumOfDouble[i] - arraySumOfDouble[j])) {
                doubleElement.push(`(${arraySumOfDouble[i]},${arraySumOfDouble[j]})`);
            }
        }
    }
}

console.log(`Danh sach cac cap phan tu ${doubleElement} co tong bang ${nDouble}`);

// Dao nguoc mang cho truoc
let arrayReverse = [1, 4, 2, 7, 6, 9];
let reverseNotFunction = [];
for (let i = arrayReverse.length - 1; i >= 0; i--) {
    reverseNotFunction.push(arrayReverse[i]);
}
let reverseUseFunction = arrayReverse.reverse();
console.log(`Mang dao nguoc su dung ham co san: ${reverseUseFunction}`);
console.log(`Mang dao nguoc khong su dung ham: ${reverseNotFunction}`);
