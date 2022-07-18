const canvasInitialConfig = {
  height: 500,
  width: 800,
};

const playersInitialConfig = {
  height: 200,
  width: 20,
  player1: {
    axis: {
      x: 10,
      y: null,
    },
    points: 0,
  },
  player2: {
    axis: {
      x: canvasInitialConfig.width - 20 - 10,
      y: null,
    },
    points: 0,
  },
};

const ballInitialConfig = {
  orientation: {},
  x: null,
  y: null,
};

function initBall() {
  ball.orientation.y = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3;
  ball.orientation.x = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3;
  ball.x = canvasWidth / 2 - 10;
  ball.y = canvasHeight / 2 - 10;
}

function handleBallOrientation() {
  //Verifica se a bola está colidindo com o barra do player 1
  if (
    ball.x >= player1.axis.x &&
    ball.x <= player1.axis.x + 10 &&
    ball.y >= player1.axis.y &&
    ball.y <= player1.axis.y + playerHeight
  ) {
    ball.orientation.x = 1;
  }
  //Verifica se a bola está colidindo com o barra do player 2
  else if (
    ball.x >= player2.axis.x &&
    ball.x <= player2.axis.x + 10 &&
    ball.y >= player2.axis.y &&
    ball.y <= player2.axis.y + playerHeight
  ) {
    ball.orientation.x = -1;
  }

  // verifica se a bola bateu no chão ou no teto
  if (ball.y + 10 >= canvasHeight || ball.y <= 0) ball.orientation.y *= -1;

  //move a bola no eixo X e Y
  const ballSpeed = 8;
  ball.x += ballSpeed * ball.orientation.x;
  ball.y += ballSpeed * ball.orientation.y;

  if (ball.x + 10 > canvas.width) {
    player1.points++;
    initBall();
  } else if (ball.x < 0) {
    player2.points++;
    initBall();
  }
}

function handlePlayerMovement() {
  const playerSpeed = 20;
  if (player1.key == 'w' && player1.axis.y > 0) {
    player1.axis.y -= playerSpeed;
  } else if (player1.key == 's' && player1.axis.y + playerHeight < canvasHeight) {
    player1.axis.y += playerSpeed;
  }

  if (player2.key == 'ArrowUp' && player2.axis.y > 0) {
    player2.axis.y -= playerSpeed;
  } else if (player2.key == 'ArrowDown' && player2.axis.y + playerHeight < canvasHeight) {
    player2.axis.y += playerSpeed;
  }
}

function buildConfig() {
  return {
    canvasConfig: canvasInitialConfig,
    playersConfig: playersInitialConfig,
    ballConfig: ballInitialConfig,
  };
}
