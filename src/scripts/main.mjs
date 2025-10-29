const cols = 16;
const rows = 20;

function drawBoard() {
  const game = document.querySelector('#game');

  const rowsVariableName = '--board-rows';
  const colsVariableName = '--board-cols';
  window.document.documentElement.style.setProperty(rowsVariableName, rows);
  window.document.documentElement.style.setProperty(colsVariableName, cols);

  renderCells(game, cols, rows);
}

/**
 *
 * @param {HTMLElement} insertHere
 * @param {number} cols
 * @param {number} rows
 */
function renderCells(insertHere, cols, rows) {
  let cell;
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add(`row-${r}`);
      cell.classList.add(`col-${c}`);
      if (r === 2 && c === 2) {
        cell.classList.add('hero');
      }
      insertHere.appendChild(cell);
    }
  }
}

/**
 *
 * @param {number} col
 * @param {number} row
 * @returns {HTMLDivElement|undefined}
 */
function getCellByNo(col, row) {
  return document.querySelector(`.col-${col}.row-${row}`);
}

/**
 *
 * @returns {Record<'col'|'row'|'element',unknown>};
 */
function findHeroPosition() {
  const hero = document.querySelector('.hero');
  let col = -1;
  let row = -1;
  hero.classList.forEach((className) => {
    if (className.startsWith('col')) {
      col = parseInt(className.split('-')[1]);
    } else if (className.startsWith('row')) {
      row = parseInt(className.split('-')[1]);
    }
  });
  return { col, row, element: hero };
}

function setHeroPosition(col, row) {
  const cell = getCellByNo(col, row);
  cell.classList.add('hero');
}

function moveHeroUp() {
  const { col, row, element } = findHeroPosition();
  if (row - 1 < 0) {
    return;
  }
  element.classList.remove('hero');
  setHeroPosition(col, row - 1);
}

function moveHeroDown() {
  const { col, row, element } = findHeroPosition();
  if (row + 1 > rows) {
    return;
  }
  element.classList.remove('hero');
  setHeroPosition(col, row + 1);
}

function moveHeroLeft() {
  const { col, row, element } = findHeroPosition();
  if (col - 1 < 0) {
    return;
  }
  element.classList.remove('hero');
  setHeroPosition(col - 1, row);
}

function moveHeroRight() {
  const { col, row, element } = findHeroPosition();
  if (col + 1 > cols) {
    return;
  }
  element.classList.remove('hero');
  setHeroPosition(col + 1, row);
}

drawBoard();

document.querySelector('#move-up').addEventListener('click', () => moveHeroUp());
document.querySelector('#move-down').addEventListener('click', () => moveHeroDown());

document.querySelector('#move-left').addEventListener('click', () => moveHeroLeft());
document.querySelector('#move-right').addEventListener('click', () => moveHeroRight());

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.key === 'ArrowDown') {
    moveHeroDown();
  } else if (event.key === 'ArrowUp') {
    moveHeroUp();
  } else if (event.key === 'ArrowRight') {
    moveHeroRight();
  } else if (event.key === 'ArrowLeft') {
    moveHeroLeft();
  }
})
