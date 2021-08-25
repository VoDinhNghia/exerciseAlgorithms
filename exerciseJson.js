// sap xep json theo ID
let dataJsonTableUser = [{
    'ID': 1,
    'Name': 'Vo A',
    'Age': 25
}, {
    'ID': 9,
    'Name': 'Nguyen Van B',
    'Age': 26
}, {
    'ID': 3,
    'Name': 'Nguyen Van A',
    'Age': 24
}, {
    'ID': 2,
    'Name': 'Tran C',
    'Age': 25
}, {
    'ID': 7,
    'Name': 'Van Mo',
    'Age': 28
}];

let dataJsonTableUserB = [{
    'ID': 1,
    'Name': 'Vo A',
    'Age': 25
}, {
    'ID': 9,
    'Name': 'Nguyen Van B',
    'Age': 26
}, {
    'ID': 12,
    'Name': 'Van Ba',
    'Age': 29
}];
//merge 2 array lai va sap xep
let dataMerge2Array = dataJsonTableUser.concat(dataJsonTableUserB);
console.log(`Data sau khi merge 2 array: ${JSON.stringify(dataMerge2Array)}`);
//Sap xep array vua merge theo ID
let dataJsonSortID = dataMerge2Array.sort(function(Id1, Id2) {
    return Id1.ID - Id2.ID;
});
console.log(`Data sau khi duoc sap xep theo ID: ${JSON.stringify(dataJsonSortID)}`);
//Loai bo nhung ID trung trong data vua sap xep
let removeDuplicationInData = [dataJsonSortID[0]];
for (let i = 1; i < dataJsonSortID.length; i++) {
    if (dataJsonSortID[i - 1].ID != dataJsonSortID[i].ID) {
        removeDuplicationInData.push(dataJsonSortID[i])
    }
}
console.log(`Data sau khi loai bo trung lap: ${JSON.stringify(removeDuplicationInData)}`);
//Sap xep theo ten
let dataJsonSortName = dataMerge2Array.sort(function(Name1, Name2) {
    let nameA = Name1.Name.toUpperCase();
    let nameB = Name2.Name.toUpperCase();
    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
})
console.log(`Data sau khi duoc sap xep theo Name: ${JSON.stringify(dataJsonSortName)}`);
// Su dung forEach de lay thong tin user Vo A tu array data
let infoUserVoA = {};
dataMerge2Array.forEach(function(Item) {
    if (Item.Name == 'Vo A') {
        infoUserVoA = Item;
    }
});
console.log(`Thong tin user Vo A: ${JSON.stringify(infoUserVoA)}`);
// replace key Name = userName
dataMerge2Array.forEach(function(Item) {
    Item['userName'] = Item['Name'];
    delete Item['Name'];
});
console.log(`Data sau khi replace key Name la: ${JSON.stringify(dataMerge2Array)}`);

// tao mang moi trong do gia tri Age - 2 con Name va ID giu nguyen
let dataUseMap = dataMerge2Array.map((user) => {
    return {
        'ID': user.ID,
        'Name': user.userName,
        'Age': user.Age - 2
    };
});
console.log(`Data sau khi dung ham map: ${JSON.stringify(dataUseMap)}`);
//Ham fillter 
let filterData = dataMerge2Array.filter((user) => {
    return user.userName == 'Vo A';
});
console.log(`Data sau khi dung ham filter: ${JSON.stringify(filterData)}`);

//ham reduce 
let reduceData = dataMerge2Array.reduce((age, user) => {
    return age = age + user.Age;
}, 0);
console.log(`Data sau khi dung ham reduce: ${JSON.stringify(reduceData)}`);
