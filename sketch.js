const map = new Map(100, 100, 10, 0, 0);
function setup() {
  frameRate(5);
  createCanvas(600, 600);
}

function draw() {
  map.MoveCell();
  map.Draw();
}
