const unit = 40;
let board = { height: 20, width: 30 };

let head = { x: 4, y: 5 };
let tails = [
  { x: 2, y: 5 },
  { x: 3, y: 5 },
  { x: 4, y: 5 },
];
let direction = "right";

function init() {
  const boardWidth = board.width * unit;
  document.getElementById("board").style.width = `${boardWidth}px`;

  const boardHeight = board.height * unit;
  document.getElementById("board").style.height = `${boardHeight}px`;
}

init();

function changeDirection(newdirection) {
  direction = newdirection;
}

function goRight() {
  head.x = head.x + 1;
  if (head.x === board.width) {
    head.x = 0;
  }
}
function goLeft() {
  head.x = head.x - 1;
  if (head.x < 0) {
    head.x === board.width - 1;
  }
}
function goUp() {
  head.y = head.y - 1;
  if (head.y < 0) {
    head.y = board.height - 1;
  }
}
function goDown() {
  head.y = head.y + 1;
  if (head.y === board.height) {
    head.y = 0;
  }
}
function render() {
  const tailsHtml = tails
    .map(
      (tail) =>
        `<div style="width:${unit}px; height:${unit}px; left:${
          tail.x * unit
        }px; top:${tail.y * unit}px"class="snake-tail"></div>`
    )
    .join("");
  document.getElementById("tails").innerHTML = tailsHtml;
}

setInterval(() => {
  if (direction === "right") {
    goRight();
  } else if (direction === "left") {
    goLeft();
  } else if (direction === "up") {
    goUp();
  } else if (direction === "down") {
    goDown();
  }
  tails.push({ x: head.x, y: head.y });
  tails.shift();

  render();
}, 500);

addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    changeDirection("down");
  } else if (event.key === "ArrowUp") {
    changeDirection("up");
  } else if (event.key === "ArrowRight") {
    changeDirection("right");
  } else if (event.key === "ArrowLeft") {
    changeDirection("left");
  }
});
