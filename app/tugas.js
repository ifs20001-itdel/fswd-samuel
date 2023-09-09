/*
Nama	: Samuel Adika Lumbantobing
Kampus	: IT Del
Kelas	: FSWD (Kelas B)
*/

//========================================

function getRandomNumber(excludedNumbers) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } while (excludedNumbers.includes(randomNumber));
    return randomNumber;
}

function generateRandomNumbers(count) {
    const randomNumbers = [];
    while (randomNumbers.length < count) {
        const randomNumber = getRandomNumber(randomNumbers);
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

function splitEvenAndOddNumbers(numbers) {
    const evenNumbers = [];
    const oddNumbers = [];

    for (const number of numbers) {
        if (number % 2 === 0 && evenNumbers.length < 50) {
            evenNumbers.push(number);
        } else if (number % 2 !== 0 && oddNumbers.length < 50) {
            oddNumbers.push(number);
        }
    }

    return { evenNumbers, oddNumbers };
}

function calculateStatistics(numbers) {
    let min = numbers[0];
    let max = numbers[0];
    let total = 0;

    for (const number of numbers) {
        total += number;

        if (number < min) {
            min = number;
        } else if (number > max) {
            max = number;
        }
    }

    const average = total / numbers.length;

    return { min, max, total, average };
}

function compareStatistics(name1, statistics1, name2, statistics2) {
    console.log(`Perbandingan antara bilangan ${name1} dan ${name2}:`);
    console.log("===============================================");
    console.log(`Minimum ${name1}:`, statistics1.min);
    console.log(`Minimum ${name2}:`, statistics2.min);

    if (statistics1.min < statistics2.min) {
        console.log(`Minimum ${name1} lebih kecil dari Minimum ${name2}.`);
    } else if (statistics1.min > statistics2.min) {
        console.log(`Minimum ${name1} lebih besar dari Minimum ${name2}.`);
    } else {
        console.log(`Minimum ${name1} sama dengan Minimum ${name2}.`);
    }

    console.log(`\nMaksimum ${name1}:`, statistics1.max);
    console.log(`Maksimum ${name2}:`, statistics2.max);

    if (statistics1.max < statistics2.max) {
        console.log(`Maksimum ${name1} lebih kecil dari Maksimum ${name2}.`);
    } else if (statistics1.max > statistics2.max) {
        console.log(`Maksimum ${name1} lebih besar dari Maksimum ${name2}.`);
    } else {
        console.log(`Maksimum ${name1} sama dengan Maksimum ${name2}.`);
    }

    console.log(`\nTotal ${name1}:`, statistics1.total);
    console.log(`Total ${name2}:`, statistics2.total);

    if (statistics1.total < statistics2.total) {
        console.log(`Total ${name1} lebih kecil dari Total ${name2}.`);
    } else if (statistics1.total > statistics2.total) {
        console.log(`Total ${name1} lebih besar dari Total ${name2}.`);
    } else {
        console.log(`Total ${name1} sama dengan Total ${name2}.`);
    }

    console.log(`\nRata-rata ${name1}:`, statistics1.average);
    console.log(`Rata-rata ${name2}:`, statistics2.average);

    if (statistics1.average < statistics2.average) {
        console.log(`Rata-rata ${name1} lebih kecil dari Rata-rata ${name2}.`);
    } else if (statistics1.average > statistics2.average) {
        console.log(`Rata-rata ${name1} lebih besar dari Rata-rata ${name2}.`);
    } else {
        console.log(`Rata-rata ${name1} sama dengan Rata-rata ${name2}.`);
    }
}

const randomNumbers = generateRandomNumbers(100);
const { evenNumbers, oddNumbers } = splitEvenAndOddNumbers(randomNumbers);
const evenStatistics = calculateStatistics(evenNumbers);
const oddStatistics = calculateStatistics(oddNumbers);

console.log("Tampilan 100 angka Random");
console.log(randomNumbers);
console.log("==================================================");
console.log("BAGI MENJADI 2 ARRAY");
console.log("==================================================");
console.log("Tampilan 50 bilangan Genap");
console.log(evenNumbers);
console.log("Tampilan 50 bilangan Ganjil");
console.log(oddNumbers);
console.log("==================================================");

compareStatistics("Ganjil", oddStatistics, "Genap", evenStatistics);
