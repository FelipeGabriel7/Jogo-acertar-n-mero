let btnVerify = document.querySelector('.btn');
let btnReplay = document.querySelector('.btn-replay')
let inputNumber = document.querySelector('.number-info');
let error = document.querySelector('.error');
let inputWinner = document.querySelector('.container-input')
let gameResult = document.querySelector('.lifes');
let tentativas = 0;

function numberGame() {

  btnReplay.classList.add('btn-replay-none')

  btnVerify.addEventListener('click', (e) => {

    e.preventDefault()
    tentativas++

    let numberUser = Number(inputNumber.value);
    console.log(typeof numberUser)
    let numberR = numberRandom();
    console.log(numberR)

    if (numberUser === '' || numberUser === 0) {
      error.classList.add('error')
      tentativas = 0;
      return error.innerHTML = ' Digite um valor valido ou maior que 0'
    }

    if (numberUser > 10 || numberUser < 1) {
      error.classList.add('error')
      tentativas = 0;
      return error.innerHTML = ' Valor deve ser entre 1 e 10 '
    }

    if (numberUser !== numberR) {
      error.innerHTML = ''
      gameResult.classList.add('game-error')
      gameResult.textContent = ' Tentativas: ' + tentativas
    } else {

      gameResult.classList.remove('game-error')
      gameResult.classList.add('game-result')
      inputWinner.classList.add('container-input-none')
      btnReplay.classList.remove('btn-replay-none')
      btnReplay.classList.add('btn-replay')

      buttonReturn(btnReplay)
      return gameResult.innerHTML = ' Voce venceu ' + ' ' + ' </br> ' + 'Total de tentativas: ' + tentativas
    }
  })
}

function buttonReturn(btnReplay) {
  btnReplay.addEventListener('click', () => {
    setTimeout(() => {
      location.reload()
    }, 1000)
  })
}

function numberRandom() {
  const aleatory = Math.floor(Math.random() * (10 - 1) + 1)
  return aleatory
}

numberGame()
