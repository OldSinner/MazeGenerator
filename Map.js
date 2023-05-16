class Map {
  constructor(x, y, cellsize) {
    this.cells = [];
    for (let i = 0; i < x; i++) {
      this.cells[i] = [];
      for (let j = 0; j < y; j++) {
        this.cells[i][j] = new Cell(i, j, cellsize, this);
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
  constructor(x, y, cellsize, mapref) {
    this.x = x;
    this.y = y;
    this.cellsize = cellsize;
    this.visited = false;
    this.walls = [4];
    this.mapref = mapref;
    for (let i = 0; i < 4; i++) {
      this.walls[i] = true;
    }
  }
  getRandomNeighbor() {
    let neighbors = [];
    if (this.x > 0 && this.mapref.cells[this.x - 1][this.y].visited == false) {
      neighbors.push([this.x - 1, this.y]);
    }
    if (
      this.x < map.cells.length - 1 &&
      this.mapref.cells[this.x + 1][this.y].visited == false
    ) {
      neighbors.push([this.x + 1, this.y]);
    }
    if (this.y > 0 && this.mapref.cells[this.x][this.y - 1].visited == false) {
      neighbors.push([this.x, this.y - 1]);
    }
    if (
      this.y < map.cells[0].length - 1 &&
      this.mapref.cells[this.x][this.y + 1].visited == false
    ) {
      neighbors.push([this.x, this.y + 1]);
    }
    if (neighbors.length == 0) {
      return null;
    }
    return neighbors[Math.floor(Math.random() * neighbors.length)];
  }

  drawCell() {
    if (this.visited) {
      fill(0, 255, 0);
    } else {
      fill(0, 0, 255);
    }
    rect(
      this.x * this.cellsize,
      this.y * this.cellsize,
      this.cellsize,
      this.cellsize
    );
    if (this.walls[0]) {
      line(
        this.x * this.cellsize,
        this.y * this.cellsize,
        (this.x + 1) * this.cellsize,
        this.y * this.cellsize
      );
    }
    if (this.walls[1]) {
      line(
        (this.x + 1) * this.cellsize,
        this.y * this.cellsize,
        (this.x + 1) * this.cellsize,
        (this.y + 1) * this.cellsize
      );
    }
    if (this.walls[2]) {
      line(
        this.x * this.cellsize,
        (this.y + 1) * this.cellsize,
        (this.x + 1) * this.cellsize,
        (this.y + 1) * this.cellsize
      );
    }
    if (this.walls[3]) {
      line(
        this.x * this.cellsize,
        this.y * this.cellsize,
        this.x * this.cellsize,
        (this.y + 1) * this.cellsize
      );
    }
  }
}
