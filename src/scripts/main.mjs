import { boardMaps, mapOrder } from './maps/index.mjs';

/**
 *
 * @returns {map: Array<string[]>, heroPos: { heroRow: number, heroCol: number }}
 */
function drawBoard(newMap = undefined) {
  const game = document.querySelector('#game');

  const rowsVariableName = '--board-rows';
  const colsVariableName = '--board-cols';

  const mapName = 'm1';
  const map = newMap ?? boardMaps[mapName];

  window.document.documentElement.style.setProperty(rowsVariableName, map.length);
  window.document.documentElement.style.setProperty(colsVariableName, map[0].length);

  const heroPos = renderMap(game, map);

  return { map, heroPos };
}

/**
 * @param {HTMLElement} insertHere
 * @param {Array<string[]>} map
 * @returns {{ heroRow: number, heroCol: number }}
 */
function renderMap(insertHere, map) {
  const heroPos = { heroRow: -1, heroCol: -1 };
  for (const r in map) {
    const row = map[r];
    for (const c in row) {
      const cell = row[c];
      const cellElement = document.createElement('div');
      insertHere.appendChild(cellElement);
      cellElement.classList.add('cell');
      if (cell === '#') {
        cellElement.classList.add('wall');
      } else if (cell === 'X') {
        cellElement.classList.add('hero');
        heroPos.heroRow = r;
        heroPos.heroCol = c;
      } else if (cell === 'E') {
        cellElement.classList.add('door');
      }
    }
  }
  return heroPos;
}

function moveHeroUp(heroPos, map) {
  const { heroCol, heroRow } = heroPos;
  const moveToCol = heroCol;
  const moveToRow = heroRow - 1;
  if (moveToRow - 1 < 0) {
    return;
  }
  const goToCell = map[moveToRow][moveToCol];
  if (goToCell === ' ') {
    map[moveToRow][moveToCol] = 'X';
    map[heroRow][heroCol] = 'E';
  }
  drawBoard(map);
  return { map, heroPos: { heroRow: moveToRow, heroCol: moveToCol } };
}

function moveHeroDown(heroPos, map) {
  const { heroCol, heroRow } = heroPos;
  const moveToCol = heroCol;
  const moveToRow = heroRow + 1;
  if (moveToRow + 1 >= map.length) {
    return;
  }
  const goToCell = map[moveToRow][moveToCol];
  if (goToCell === ' ') {
    map[moveToRow][moveToCol] = 'X';
    map[heroRow][heroCol] = 'E';
  }
  drawBoard(map);
  return { map, heroPos: { heroRow: moveToRow, heroCol: moveToCol } };
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

function setHeroPosition(col, row) {
  const cell = getCellByNo(col, row);
  cell.classList.add('hero');
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

const { map, heroPos } = drawBoard();

document.querySelector('#move-up').addEventListener('click', () => moveHeroUp(map, heroPos));
document.querySelector('#move-down').addEventListener('click', () => moveHeroDown(map, heroPos));

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
});
