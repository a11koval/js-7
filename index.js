let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;  
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

const arr = [1, 2, 3, 4, 5];
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        break;  
    }
    console.log(numbers[i]);
}

const n = 5;  
let k = 1;
while (true) {
    if (k >= n) {
        break; 
    }
    console.log(k);
    k++;
}
let m = 1;
while (m <= 20) {
    if (m % 3 === 0) {
        m++;  
        continue;  
    }
    console.log(m);
    m++;
}

