let canvasContext;

const { canvasConfig, playersConfig, ballConfig: ball } = buildConfig();
const { height: canvasHeight, width: canvasWidth } = canvasConfig;
const { height: playerHeight, width: playerWidth, player1, player2 } = playersConfig;

function setup() {
  const canvas = document.getElementById('canvas');
  canvasContext = canvas.getContext('2d');

  // inicializa as posições y do p1 e do p2 para metade da tela
  player1.axis.y = canvasHeight / 2 - playerHeight / 2;
  player2.axis.y = canvasHeight / 2 - playerHeight / 2;

  //define um intervalo de 60 fps para o loop
  setInterval(loop, 1000 / 60);
  initBall();
  initEvents();
}

function loop() {
  draw();
  handleBallOrientation();
  handlePlayerMovement();
}

setup();
