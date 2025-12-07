import { boardMaps, mapOrder } from './maps/index.mjs';

/**
 * @param {Array<Array<string>>|undefined} newMap
 * @returns {map: Array<string[]>, heroPos: { heroRow: number, heroCol: number }}
 */
function drawGame(newMap = undefined) {
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
  insertHere.innerHTML = '';
  const heroPos = { heroRow: -1, heroCol: -1 };
  for (const r in map) {
    const row = map[r];
    for (const c in row) {
      const cell = row[c];
      const cellElement = document.createElement('div');
      insertHere.appendChild(cellElement);
      cellElement.classList.add('cell', `col-${c}`, `row-${r}`);
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

/**
 *
 * @param {{heroRow:number, heroCol:number}} heroPos
 * @param {Array<Arra<string>>} map
 * @returns
 */
function moveHeroUp(heroPos, map) {
  const { heroCol, heroRow } = heroPos;
  const moveToCol = heroCol;
  const moveToRow = heroRow - 1;
    if (moveToRow - 1 < 0) {
    return {heroPos, map};
  }
  const goToCell = map[moveToRow][moveToCol];
  if (goToCell === ' ') {
    map[moveToRow][moveToCol] = 'X';
    map[heroRow][heroCol] = ' ';
    drawGame(map);
    return { map, heroPos: { heroRow: moveToRow, heroCol: moveToCol } };
  }
  return {heroPos, map};
}

/**
 *
 * @param {{heroRow:number, heroCol:number}} heroPos
 * @param {Array<Arra<string>>} map
 * @returns
 */
function moveHeroDown(heroPos, map) {
  const { heroCol, heroRow } = heroPos;
  const moveToCol = Number(heroCol);
  const moveToRow = Number(heroRow) + 1;
    if (moveToRow + 1 > map.length) {
    return {heroPos, map};
  }

  const goToCell = map[moveToRow][moveToCol];
  if (goToCell === ' ') {
    map[moveToRow][moveToCol] = 'X';
    map[heroRow][heroCol] = ' ';
    drawGame(map);
    return { map, heroPos: { heroRow: moveToRow, heroCol: moveToCol } };
  }
  return {heroPos, map};
}

function moveHeroLeft(heroPos, map) {
  const { heroCol, heroRow } = heroPos;
  const moveToCol = Number(heroCol) - 1;
  const moveToRow = Number(heroRow);
    if (moveToCol < 0) {
    return {heroPos, map};
  }

  const goToCell = map[moveToRow][moveToCol];
  if (goToCell === ' ') {
    map[moveToRow][moveToCol] = 'X';
    map[heroRow][heroCol] = ' ';
    drawGame(map);
    return { map, heroPos: { heroRow: moveToRow, heroCol: moveToCol } };
  }
  return {heroPos, map};
}

function moveHeroRight(heroPos, map) {
  const { heroCol, heroRow } = heroPos;
  const moveToCol = Number(heroCol) + 1;
  const moveToRow = Number(heroRow);
    if (moveToCol + 1 > map[moveToRow].length) {
    return {heroPos, map};
  }

  const goToCell = map[moveToRow][moveToCol];
  if (goToCell === ' ') {
    map[moveToRow][moveToCol] = 'X';
    map[heroRow][heroCol] = ' ';
    drawGame(map);
    return { map, heroPos: { heroRow: moveToRow, heroCol: moveToCol } };
  }
  return {heroPos, map};
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

let { map, heroPos } = drawGame();

document.querySelector('#move-up').addEventListener('click', () => {
  const newData = moveHeroUp(heroPos,map)
  map = newData.map;
  heroPos = newData.heroPos;
});
document.querySelector('#move-down').addEventListener('click', () => {
  const newData = moveHeroDown(heroPos,map);
  map = newData.map;
  heroPos = newData.heroPos;
});

document.querySelector('#move-left').addEventListener('click', () => {
  const newData = moveHeroLeft(heroPos,map);
  map = newData.map;
  heroPos = newData.heroPos;
});

document.querySelector('#move-right').addEventListener('click', () => {
  const newData = moveHeroRight(heroPos,map)
  map = newData.map;
  heroPos = newData.heroPos;
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.key === 'ArrowDown') {
    const newData = moveHeroDown(heroPos,map);
    map = newData.map;
    heroPos = newData.heroPos;
  } else if (event.key === 'ArrowUp') {
    const newData = moveHeroUp(heroPos,map)
    map = newData.map;
    heroPos = newData.heroPos;
  } else if (event.key === 'ArrowRight') {
    const newData = moveHeroRight(heroPos,map)
    map = newData.map;
    heroPos = newData.heroPos;
  } else if (event.key === 'ArrowLeft') {
      const newData = moveHeroLeft(heroPos,map);
      map = newData.map;
      heroPos = newData.heroPos;
  }
});
