// chuyen chuoi thuong thanh kieu viet hoa
let stringData = 'Mot sang mai kia khi tinh giac./nBao nhieu sau muon chot vut tan.';
console.log(`Chuoi sau khi chuyen thanh chu hoa: ${stringData.toUpperCase()}`);
// tim trong chuoi co tu 'muon' va thay the bang tu 'han'
let stringDataReplace = '';
if (stringData.indexOf('muon') >= 0) {
    stringDataReplace = stringData.replace('muon', 'han');
}
console.log(`Chuoi sau khi replace: ${stringDataReplace}`);
console.log(`Chuoi sau khi phan tach => array: `, stringData.split('/n'));
console.log(`Chuoi duoc noi them tu mot chuoi moi: ${stringData.concat('/nNoi them chuoi moi.')}`);
