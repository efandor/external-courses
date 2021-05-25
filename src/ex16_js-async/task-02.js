const data = document.getElementById('data');
const output = document.getElementById('output');
const delay = document.getElementById('delay');

/* eslint no-return-assign: 0, no-param-reassign: 0*/
const debounce = (outputElem, inputElem, delayElem) => {
    let timeout;
    const showDelayedOutput = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => outputElem.value = inputElem.value, delayElem.value);
    }

    return showDelayedOutput;
}

data.addEventListener("input", debounce(output, data, delay));