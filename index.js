
var check,
    arr = [],
    nilaiMin, 
    nilaiMax,
    arrsort,
    genap = [],
    ganjil = [],
    averageganjil,
    averagegenap

do {
    var input = parseInt(prompt('silahkan input nomer:'));
    
    check = true;

    if (isNaN(input)) {
        check = !check
    } else {
        if (nilaiMin == undefined && nilaiMax == undefined) {
            nilaiMin = input
            nilaiMax = input
        } else {
            if (input <= nilaiMin) {
                nilaiMin = input
            } else if (input >= nilaiMax) {
                nilaiMax = input
            }
        } 
        arr.push(input)


        //mencari nilai genap dan ganjil
        var ekse = input % 2
        if (ekse == 0) {
            genap.push(input)
        } else {
            ganjil.push(input)
        }
    }
} while (check);

console.log(`arr hasil inputan : ${arr}`);

//Mencari avarage dari jumlah ganjil dan genap
//ganjil
var sumganjil = 0;
ganjil.forEach((item) => {
    sumganjil += item;
})

//genap
var sumgenap = 0;
genap.forEach((item, i) => {
    sumgenap += item;
})
averagegenap = sumgenap / genap.length



//MENGURUTKAN NILAI PADA ARRAY DARI TERKECIL HINGGA TERBESAR
arrsort = arr.sort((a,b) => {
    return a-b
})

console.log(`1a. sort array : ${arrsort}`);
console.log(`1b. Nilai maksimalnya adalah ${nilaiMax} dan minimalnya adalah ${nilaiMin}`);
console.log(`1c. Nilai ganjilnya adalah ${ganjil} dan Nilai genapnya adalah ${genap}`);
console.log(`1d. Average nilai genap adalah ${averagegenap} dan jumlah nilai ganjil adalah ${sumganjil}`);





