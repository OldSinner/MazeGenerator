class Map {
  constructor(x, y, cellsize) {
    this.cells = [];
    for (let i = 0; i < x; i++) {
      this.cells[i] = [];
      for (let j = 0; j < y; j++) {
        this.cells[i][j] = new Cell(i, j, cellsize);
      }
    }
  }

  drawCells() {
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[i].length; j++) {
        this.cells[i][j].drawCell();
      }
    }
  }
}

class Cell {
  constructor(x, y, cellsize) {
    this.x = x;
    this.y = y;
    this.cellsize = cellsize;
  }
  drawCell() {
    fill(255);
    rect(
      this.x * this.cellsize,
      this.y * this.cellsize,
      this.cellsize,
      this.cellsize
    );
  }
}
