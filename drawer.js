function drawRect(x, y, w, h, color = 'green') {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, w, h);
}

function drawPlayer(x, y, w, h) {
  canvasContext.fillStyle = 'green';
  canvasContext.fillRect(x, y, w, h);
  canvasContext.shadowColor = 'green';
  canvasContext.shadowBlur = 15;
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

function drawBall() {}

function draw() {
  // fundo
  drawRect(0, 0, canvasWidth, canvasHeight, '#000');
  // player 1
  drawPlayer(player1.axis.x, player1.axis.y, playerWidth, playerHeight);
  // player 2
  drawPlayer(player2.axis.x, player2.axis.y, playerWidth, playerHeight);
  // barra lateral
  drawRect(canvasWidth / 2 - 5, 0, 5, canvasHeight);
  // bola
  drawRect(ball.x, ball.y, 15, 15);

  writePoints();
}

function writePoints() {
  canvasContext.font = '50px monospace';
  canvasContext.fillStyle = '#fff';
  canvasContext.fillText(player1.points, canvasWidth / 4, 50);
  canvasContext.fillText(player2.points, 3 * (canvasWidth / 4), 50);
}
