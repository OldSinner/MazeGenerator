const map = new Map(50, 50, 10, 0, 0);
function setup() {
  frameRate(20);
  createCanvas(600, 600);
}

function draw() {
  map.Draw();
  map.MoveCell();
}
