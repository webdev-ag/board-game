const boardCells = Array.from(document.querySelectorAll('.cell'));
const HERO_CLASS = 'hero';

/**
 *
 * @returns {HTMLElement}
 */
function getHeroCell() {
    return document.querySelector(`.${HERO_CLASS}`);
}

/**
 * the index of the heroCell
 * @returns number
 */
function getHeroPosition() {
    let hero = getHeroCell();
    return boardCells.findIndex((el, idx) => el === hero);
}

/**
 *
 * @param {number} newIndex
 */
function setHeroPosition(newIndex) {
    let hero = getHeroCell();
    if (newIndex < 0 || newIndex >= boardCells.length) {
        console.error('cannot set hero tpo position', newIndex)
    }
    console.log('Setting Hero to Index', newIndex);

    hero.classList.remove(HERO_CLASS);
    boardCells[newIndex].classList.add(HERO_CLASS);
}

function moveHeroUp() {
    const currentIndex = getHeroPosition();
    setHeroPosition(currentIndex - 5);
}

function moveHeroDown() {
    const currentIndex = getHeroPosition();
    setHeroPosition(currentIndex + 5);
}


function moveHeroLeft() {
    const currentIndex = getHeroPosition();
    setHeroPosition(currentIndex - 1);
}

function moveHeroRight() {
    const currentIndex = getHeroPosition();
    setHeroPosition(currentIndex + 1);
}

function addMoveFunctions () {
    const upBtn = document.querySelector('#move-up');
    const downBtn = document.querySelector('#move-down');
    const leftBtn = document.querySelector('#move-left');
    const rightBtn = document.querySelector('#move-right');

    upBtn.addEventListener('click', () => moveHeroUp());
    downBtn.addEventListener('click', () => moveHeroDown());
    leftBtn.addEventListener('click', () => moveHeroLeft());
    rightBtn.addEventListener('click', () => moveHeroRight());
}

addMoveFunctions()