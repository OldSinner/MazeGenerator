const map = new Map(100, 100, 10);
function setup() {
  createCanvas(600, 600);
}

function draw() {
  map.drawCells();
}
