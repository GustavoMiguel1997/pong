function initEvents() {
  document.addEventListener('keyup', ({ key }) => {
    if (key === 'w' || key === 's') {
      player1.key = '';
    } else if (key === 'ArrowUp' || key === 'ArrowDown') {
      player2.key = '';
    }
  });

  document.addEventListener('keydown', function ({ key }) {
    if (key === 'w' || key === 's') {
      player1.key = key;
    } else if (key === 'ArrowUp' || key === 'ArrowDown') {
      player2.key = key;
    }
  });
}
