// Задача-1

const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

// Задача-2

function startTimer() {
    let count = 1;

    setInterval(() => {
        console.log(`Прошла секунда // ${count}`);
        count++;
    }, 1000);
}

startTimer();


// Задача-3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}

count();

// Задача-4

const block = document.getElementById('myBlock');
const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
    block.classList.toggle('colored');
});

// Задача-5

const xhr = new XMLHttpRequest();

xhr.open("GET", "data.json", true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};

xhr.send();
