const data = document.getElementById('data');
const output = document.getElementById('output');

/* eslint no-return-assign: 0, no-param-reassign: 0*/
const debounce = (outputElem, inputElem) => {
    let timeout;
    const showDelayedOutput = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => outputElem.value = inputElem.value, 3000);
    }

    return showDelayedOutput;
}

data.addEventListener("keydown", debounce(output, data));
