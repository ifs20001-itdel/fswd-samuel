function getRandomNumber(excludedNumbers) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } while (excludedNumbers.has(randomNumber));
    return randomNumber;
}

function generateRandomNumbers(count) {
    const randomNumbers = new Set();
    while (randomNumbers.size < count) {
        const randomNumber = getRandomNumber(randomNumbers);
        randomNumbers.add(randomNumber);
    }
    return Array.from(randomNumbers);
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

function splitEvenAndOddNumbersByIndex(numbers) {
    const evenNumbers = [];
    const oddNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(numbers[i]);
        } else {
            oddNumbers.push(numbers[i]);
        }
    }

    return { evenNumbers, oddNumbers };
}

function compareStatistics(name1, statistics1, name2, statistics2) {
    console.log(`Perbandingan antara bilangan ${name1} dan ${name2}:`);
    console.log("===============================================");

    const compareValue = (valueName, value1, value2) => {
        console.log(`${valueName} ${name1}:`, value1);
        console.log(`${valueName} ${name2}:`, value2);

        if (value1 < value2) {
            console.log(`${valueName} ${name1} lebih kecil dari ${valueName} ${name2}.`);
        } else if (value1 > value2) {
            console.log(`${valueName} ${name1} lebih besar dari ${valueName} ${name2}.`);
        } else {
            console.log(`${valueName} ${name1} sama dengan ${valueName} ${name2}.`);
        }
    };

    compareValue("Minimum", statistics1.min, statistics2.min);
    compareValue("Maksimum", statistics1.max, statistics2.max);
    compareValue("Total", statistics1.total, statistics2.total);
    compareValue("Rata-rata", statistics1.average, statistics2.average);
}

const randomNumbers = generateRandomNumbers(100);
const { evenNumbers, oddNumbers } = splitEvenAndOddNumbersByIndex(randomNumbers);

console.log("Tampilan 100 angka Random");
console.log(randomNumbers);
console.log("==================================================");
console.log("BAGI MENJADI 2 ARRAY");
console.log("==================================================");
console.log("Tampilan 50 bilangan Genap (Berdasarkan Urutan Index)");
console.log(evenNumbers);
console.log("Tampilan 50 bilangan Ganjil (Berdasarkan Urutan Index)");
console.log(oddNumbers);
console.log("==================================================");

const evenStatistics = calculateStatistics(evenNumbers);
const oddStatistics = calculateStatistics(oddNumbers);

compareStatistics("Ganjil", oddStatistics, "Genap", evenStatistics);