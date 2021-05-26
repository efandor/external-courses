const imageList = ['01', '02', '03', '04', '05'];
const first = document.querySelector('.first-pic');
const second = document.querySelector('.second-pic');
const third = document.querySelector('.third-pic');
let shuffledImageList = [];

const shuffle = (array) => {
    shuffledImageList = [...array];
    for (let i = shuffledImageList.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledImageList[i], shuffledImageList[j]] = [shuffledImageList[j], shuffledImageList[i]];
    }

    first.style.backgroundImage = `url('asset/${shuffledImageList[0]}.jpg')`;
    second.style.backgroundImage = `url('asset/${shuffledImageList[1]}.jpg')`;

    if (shuffledImageList[2]) {
        third.style.backgroundImage = `url('asset/${shuffledImageList[2]}.jpg')`;
    } else {
        third.remove();
    }
};

shuffle(imageList);

const leftButton = document.querySelector('.left-arrow');
const rightButton = document.querySelector('.right-arrow');

const leftSwap = () => {
    const leftItem = shuffledImageList.shift();

    shuffledImageList.push(leftItem);

    first.style.backgroundImage = `url('asset/${shuffledImageList[0]}.jpg')`;
    second.style.backgroundImage = `url('asset/${shuffledImageList[1]}.jpg')`;
    third.style.backgroundImage = `url('asset/${shuffledImageList[2]}.jpg')`;
    first.className = "first-pic animated-left";
    second.className = "second-pic animated-left";
    third.className = "third-pic animated-left";
    
    setTimeout(() => {
        first.className = "first-pic";
        second.className = "second-pic";
        third.className = "third-pic";
    }, 500);
};

const rightSwap = () => {
    const rightItem = shuffledImageList.pop();

    shuffledImageList.unshift(rightItem);

    first.style.backgroundImage = `url('asset/${shuffledImageList[0]}.jpg')`;
    second.style.backgroundImage = `url('asset/${shuffledImageList[1]}.jpg')`;
    third.style.backgroundImage = `url('asset/${shuffledImageList[2]}.jpg')`;
    first.className = "first-pic animated-right";
    second.className = "second-pic animated-right";
    third.className = "third-pic animated-right";
    
    setTimeout(() => {
        first.className = "first-pic";
        second.className = "second-pic";
        third.className = "third-pic";
    }, 500);
        
};

leftButton.addEventListener('click', leftSwap);
rightButton.addEventListener('click', rightSwap);
